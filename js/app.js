/* ============================================================
   AstroTalkz by vorabion — Main App Logic & Interactions
   Controls modal intakes, timers, chat simulations, SVG chart rendering
   ============================================================ */

const App = {
  chatTimerInterval: null,
  callTimerInterval: null,

  init() {
    console.log("AstroTalkz initializing...");
    // Load default route (Login / Splash screen)
    Router.reset('user-login');
    
    // Global event listeners for modal dismissal etc.
    document.addEventListener('click', (e) => {
      const modal = document.getElementById('intake-modal');
      if (modal && e.target === modal) {
        App.closeIntakeModal();
      }
      
      const drawer = document.getElementById('app-drawer');
      if (drawer && drawer.classList.contains('active') && !drawer.contains(e.target) && !e.target.closest('.header-icon-btn')) {
        App.toggleDrawer(false);
      }
    });
  },

  /* ── Core Rendering & Lifecycle ───────────────────────────── */
  render(screenId, params = {}) {
    const viewport = document.getElementById('screen-viewport');
    if (!viewport) return;

    STATE.currentScreen = screenId;

    // Remove any active timers
    clearInterval(this.chatTimerInterval);
    clearInterval(this.callTimerInterval);

    // Call screen generator template
    if (typeof Screens[screenId] === 'function') {
      viewport.innerHTML = Screens[screenId](params);
      this.afterRender(screenId, params);
      this.updateGlobalNavigation(screenId);
    } else {
      console.error(`Screen renderer not found for ID: ${screenId}`);
    }
  },

  updateGlobalNavigation(screenId) {
    const userNav = document.getElementById('bottom-nav');
    const astroNav = document.getElementById('astro-bottom-nav');
    if (!userNav || !astroNav) return;
    
    // Hide both by default
    userNav.style.display = 'none';
    astroNav.style.display = 'none';
    
    // Clear all active states first
    userNav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    astroNav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));

    if (STATE.role === 'user') {
      const mainScreens = ['home', 'consult', 'horoscope', 'bookings', 'profile'];
      if (mainScreens.includes(screenId)) {
        userNav.style.display = 'flex';
        const idMap = { home:'nav-home', consult:'nav-consult', horoscope:'nav-horoscope', bookings:'nav-bookings', profile:'nav-profile' };
        const activeEl = document.getElementById(idMap[screenId]);
        if (activeEl) activeEl.classList.add('active');
      }
    } else {
      const mainScreens = ['astro-dashboard', 'astro-consults', 'astro-earnings', 'astro-profile'];
      if (mainScreens.includes(screenId)) {
        astroNav.style.display = 'flex';
        const idMap = { 'astro-dashboard':'anav-dashboard', 'astro-consults':'anav-consults', 'astro-earnings':'anav-earnings', 'astro-profile':'anav-profile' };
        const activeEl = document.getElementById(idMap[screenId]);
        if (activeEl) activeEl.classList.add('active');
      }
    }
  },

  afterRender(screenId, params) {
    // Keep all scrollable bodies at top
    document.querySelectorAll('.screen-body').forEach(b => b.scrollTop = 0);

    // Custom per-screen logic
    if (screenId === 'chat') {
      this.initChatSession(params && params.id);
    } else if (screenId === 'audio-call') {
      this.initAudioCallSession(params && params.id);
    } else if (screenId === 'astro-consult-live') {
      this.initAstroLiveSession(params && params.id);
    } else if (screenId === 'astro-ai') {
      this.initAISession();
    }
    // Scroll chat to bottom
    const msgs = document.getElementById('chat-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  },

  /* ── Role Management ──────────────────────────────────────── */
  switchRole(role) {
    STATE.role = role;
    
    // Toggle active classes on demo bar pills
    document.querySelectorAll('.demo-pill').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`btn-${role}`);
    if (btn) btn.classList.add('active');

    // Navigate to correct home screen for role
    if (role === 'user') {
      Router.reset('home');
      App.showToast('Switched to User View');
    } else if (role === 'astrologer') {
      Router.reset('astro-dashboard');
      App.showToast('Switched to Expert View');
    }
  },

  /* ── Expert Online Toggle ──────────────────────────────────── */
  toggleAstroOnline() {
    DATA.currentAstrologer.isOnline = !DATA.currentAstrologer.isOnline;
    App.showToast(`You are now ${DATA.currentAstrologer.isOnline ? 'Online ✓' : 'Offline'}`);
    Router.go('astro-dashboard');
  },

  /* ── UI Helpers ────────────────────────────────────────────── */
  selectGender(el) {
    el.closest('div').querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  },

  selectTopup(el) {
    el.closest('.topup-grid').querySelectorAll('.topup-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
  },

  sendChatMsg() {
    const input = document.getElementById('chat-text-input');
    if (!input || !input.value.trim()) return;
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    // Remove typing row
    const typingRow = document.getElementById('typing-row');
    if (typingRow) typingRow.remove();
    // Add user message
    const div = document.createElement('div');
    div.className = 'chat-msg-user';
    div.style.alignSelf = 'flex-end';
    div.innerHTML = `${input.value} <div class="chat-timestamp">${new Date().toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'})} ✓✓</div>`;
    msgs.appendChild(div);
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
  },

  showConsultIntake(type) {
    App.showToast(`Starting ${type} consultation...`);
    if (type === 'chat') Router.go('chat');
    else if (type === 'call') Router.go('audio-call');
    else App.showToast('Video Call: Coming Soon!');
  },

  /* ── Bottom Navigation Render Helpers ─────────────────────── */
  // Navigation is now handled statically in index.html and toggled via updateGlobalNavigation
  renderUserBottomNav(activeTab) {
    return `
      <div class="bottom-nav">
        <div class="nav-item ${activeTab === 'home' ? 'active' : ''}" onclick="Router.go('home')">
          <i class="bi bi-house-door-fill nav-icon"></i>
          <span class="nav-label">Home</span>
        </div>
        <div class="nav-item ${activeTab === 'consult' ? 'active' : ''}" onclick="Router.go('consult')">
          <i class="bi bi-chat-fill nav-icon"></i>
          <span class="nav-label">Consult</span>
        </div>
        <div class="nav-item nav-center-special ${activeTab === 'horoscope' ? 'active' : ''}" onclick="Router.go('horoscope')">
          <i class="bi bi-moon-stars-fill nav-icon"></i>
          <span class="nav-label">Horoscope</span>
        </div>
        <div class="nav-item ${activeTab === 'bookings' ? 'active' : ''}" onclick="Router.go('bookings')">
          <i class="bi bi-calendar-check nav-icon"></i>
          <span class="nav-label">Bookings</span>
        </div>
        <div class="nav-item ${activeTab === 'profile' ? 'active' : ''}" onclick="Router.go('user-profile')">
          <i class="bi bi-person-fill nav-icon"></i>
          <span class="nav-label">Profile</span>
        </div>
      </div>
    `;
  },

  renderStoreBottomNav(activeTab) {
    return `
      <div class="bottom-nav" style="border-top-color: var(--surface-border-gold);">
        <div class="nav-item ${activeTab === 'store' ? 'active' : ''}" onclick="Router.go('store')">
          <i class="bi bi-shop nav-icon text-gold"></i>
          <span class="nav-label">Shop</span>
        </div>
        <div class="nav-item ${activeTab === 'cart' ? 'active' : ''}" onclick="Router.go('cart')">
          <i class="bi bi-cart nav-icon"></i>
          <span class="nav-label">Cart</span>
        </div>
        <div class="nav-item ${activeTab === 'orders' ? 'active' : ''}" onclick="Router.go('my-orders')">
          <i class="bi bi-bag-check nav-icon"></i>
          <span class="nav-label">Orders</span>
        </div>
        <div class="nav-item" onclick="Router.go('home')">
          <i class="bi bi-box-arrow-left nav-icon text-muted"></i>
          <span class="nav-label">Exit Shop</span>
        </div>
      </div>
    `;
  },

  renderAstroBottomNav(activeTab) {
    return `
      <div class="bottom-nav" style="border-top-color: var(--purple-primary);">
        <div class="nav-item ${activeTab === 'dashboard' ? 'active' : ''}" onclick="Router.go('astro-dashboard')">
          <i class="bi bi-grid-1x2-fill nav-icon"></i>
          <span class="nav-label">Dashboard</span>
        </div>
        <div class="nav-item ${activeTab === 'consults' ? 'active' : ''}" onclick="Router.go('astro-consults')">
          <i class="bi bi-chat-text nav-icon"></i>
          <span class="nav-label">Sessions</span>
        </div>
        <div class="nav-item ${activeTab === 'earnings' ? 'active' : ''}" onclick="Router.go('astro-earnings')">
          <i class="bi bi-wallet2 nav-icon"></i>
          <span class="nav-label">Earnings</span>
        </div>
        <div class="nav-item" onclick="App.showToast('Reviews: 125 positive submissions')">
          <i class="bi bi-star nav-icon"></i>
          <span class="nav-label">Reviews</span>
        </div>
        <div class="nav-item" onclick="App.showToast('Profile configuration locked for verification')">
          <i class="bi bi-person-gear nav-icon"></i>
          <span class="nav-label">Settings</span>
        </div>
      </div>
    `;
  },

  switchTab(tabId) {
    if (tabId === 'consult') {
      Router.go('consult');
    }
  },

  /* ── Toast Overlay Creator ────────────────────────────────── */
  showToast(message) {
    // Check if toast already exists
    let existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    
    const viewport = document.getElementById('screen-viewport');
    if (viewport) {
      viewport.appendChild(toast);
      setTimeout(() => toast.remove(), 2800);
    }
  },

  /* ── User Onboarding Logic ────────────────────────────────── */
  prevOnboarding() {
    if (STATE.onboardingStep > 0) {
      STATE.onboardingStep--;
      this.render('user-onboarding');
    } else {
      Router.go('user-login');
    }
  },

  nextOnboarding() {
    const stepsLength = 6;
    if (STATE.onboardingStep < stepsLength - 1) {
      STATE.onboardingStep++;
      this.render('user-onboarding');
    } else {
      STATE.onboardingStep = 0; // Reset
      Router.replace('home');
      App.showToast("Profile set up completed successfully!");
    }
  },

  skipOnboarding() {
    STATE.onboardingStep = 0;
    Router.replace('home');
  },

  toggleReasonChip(chip) {
    chip.classList.toggle('selected');
  },

  selectFamLevel(level, element) {
    document.querySelectorAll('.user-onboarding .card-glass').forEach(el => {
      el.style.borderColor = 'var(--surface-border)';
      el.style.background = 'var(--surface-card)';
    });
    element.style.borderColor = 'var(--purple-mid)';
    element.style.background = 'rgba(124,58,237,0.12)';
  },

  /* ── Astrologer Onboarding Logic ──────────────────────────── */
  prevAstroOnboarding() {
    if (STATE.astroOnboardingStep > 0) {
      STATE.astroOnboardingStep--;
      this.render('astro-onboarding');
    } else {
      Router.go('astro-login');
    }
  },

  nextAstroOnboarding() {
    const stepsLength = 7;
    if (STATE.astroOnboardingStep < stepsLength - 1) {
      STATE.astroOnboardingStep++;
      this.render('astro-onboarding');
    } else {
      STATE.astroOnboardingStep = 0;
      Router.replace('astro-dashboard');
      App.showToast("Expert profile active!");
    }
  },

  skipAstroOnboarding() {
    STATE.astroOnboardingStep = 0;
    Router.replace('astro-dashboard');
  },

  /* ── Auth Flow triggers ───────────────────────────────────── */
  sendOTP() {
    const phone = document.getElementById('login-phone').value || '+91 98765 43210';
    Router.go('otp-verify');
    setTimeout(() => {
      const display = document.getElementById('otp-phone-display');
      if (display) display.innerText = phone;
    }, 50);
  },

  handleOTP(input, step) {
    if (input.value.length === 1 && step < 6) {
      input.nextElementSibling.focus();
    }
  },

  verifyOTP() {
    Router.go('user-onboarding');
  },

  loginGoogle() {
    Router.go('user-onboarding');
    App.showToast("Signed in with Google");
  },

  sendAstroOTP() {
    Router.go('astro-otp');
  },

  verifyAstroOTP() {
    Router.go('astro-onboarding');
  },

  logoutUser() {
    STATE.walletBalance = DATA.currentUser.walletBalance; // Reset wallet
    STATE.cartItems = [];
    Router.reset('splash');
    App.showToast("Logged out successfully");
  },

  /* ── Drawer Overlay toggle ────────────────────────────────── */
  toggleDrawer(forceState) {
    let drawer = document.getElementById('app-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'app-drawer';
      drawer.className = 'card-glass flex-column';
      drawer.style = `
        position: absolute; top: var(--status-height); left: 0; bottom: 0;
        width: 280px; z-index: 500; border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
        border-width: 0 1px 0 0; background: rgba(10, 6, 25, 0.98);
        transform: translateX(-100%); transition: transform 0.3s ease; box-shadow: 20px 0 60px rgba(0,0,0,0.8);
      `;
      
      const user = DATA.currentUser;
      drawer.innerHTML = `
        <div class="p-16 flex-column items-center text-center" style="border-bottom:1px solid rgba(139,92,246,0.15);">
          <img src="${user.avatar}" class="avatar avatar-ring mb-8" style="width:64px; height:64px;">
          <h4 class="text-white text-xs fw-800">${user.name}</h4>
          <span class="text-gold text-xxs mt-2">Gemini Moon Sign</span>
        </div>
        <div class="flex-1 overflow-y-auto py-8">
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('home');">
            <div class="menu-item-icon"><i class="bi bi-house"></i></div>
            <span class="menu-item-title text-xs">App Home</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('store');">
            <div class="menu-item-icon"><i class="bi bi-shop text-gold"></i></div>
            <span class="menu-item-title text-xs text-gold">Astrology Store</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('kundli');">
            <div class="menu-item-icon"><i class="bi bi-grid-3x3"></i></div>
            <span class="menu-item-title text-xs">Generate Kundli</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('horoscope');">
            <div class="menu-item-icon"><i class="bi bi-moon-stars"></i></div>
            <span class="menu-item-title text-xs">Horoscopes</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('bookings');">
            <div class="menu-item-icon"><i class="bi bi-calendar-check"></i></div>
            <span class="menu-item-title text-xs">My Bookings</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); Router.go('transactions');">
            <div class="menu-item-icon"><i class="bi bi-credit-card"></i></div>
            <span class="menu-item-title text-xs">Wallet Ledgers</span>
          </div>
          <div class="menu-item" onclick="App.toggleDrawer(false); App.showToast('Referral program coming soon!')">
            <div class="menu-item-icon"><i class="bi bi-gift"></i></div>
            <span class="menu-item-title text-xs">Refer & Earn</span>
          </div>
        </div>
        <div class="p-12" style="border-top:1px solid rgba(139,92,246,0.15);">
          <button class="btn-outline btn-sm w-full py-8 text-xxs" style="border-color: rgba(239,68,68,0.4); color: var(--red);" onclick="App.toggleDrawer(false); App.logoutUser();">
            <i class="bi bi-box-arrow-left me-1"></i> Sign Out
          </button>
        </div>
      `;
      document.getElementById('screen-viewport').appendChild(drawer);
    }

    const show = (forceState !== undefined) ? forceState : !drawer.classList.contains('active');
    if (show) {
      drawer.classList.add('active');
      drawer.style.transform = 'translateX(0)';
    } else {
      drawer.classList.remove('active');
      drawer.style.transform = 'translateX(-100%)';
    }
  },

  /* ── Horoscope Interaction ────────────────────────────────── */
  selectHoroscopeSign(sign, returnScreen = 'home') {
    STATE.selectedHoroscopeSign = sign;
    if (returnScreen === 'horoscope') {
      Router.replace('horoscope');
    } else {
      Router.replace('home');
    }
  },

  /* ── Filter / Search Lists ────────────────────────────────── */
  filterConsultCategory(catId) {
    STATE.storeCategory = catId;
    Router.replace('consult');
  },

  filterAstrosList(val) {
    const list = document.getElementById('astrologers-list-container');
    if (!list) return;

    const term = val.toLowerCase().trim();
    const items = list.querySelectorAll('.astro-card');

    items.forEach(card => {
      const name = card.querySelector('h4').innerText.toLowerCase();
      const title = card.querySelector('p').innerText.toLowerCase();
      if (name.includes(term) || title.includes(term)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  },

  openAstroProfile(astroId) {
    Router.go('astro-profile', { id: astroId });
  },

  toggleSaveAstro(astroId) {
    const index = DATA.savedAstrologers.indexOf(astroId);
    if (index > -1) {
      DATA.savedAstrologers.splice(index, 1);
      App.showToast("Removed from favourites");
    } else {
      DATA.savedAstrologers.push(astroId);
      App.showToast("Saved to favourites!");
    }
    Router.replace('astro-profile', { id: astroId });
  },

  /* ── Bookings Filter Listing ──────────────────────────────── */
  filterBookings(filter) {
    document.querySelectorAll('.filter-tabs .filter-tab').forEach(el => el.classList.remove('active'));
    const clickedTab = document.getElementById(`book-tab-${filter}`);
    if (clickedTab) clickedTab.classList.add('active');
    
    const container = document.getElementById('bookings-list-scroll');
    if (container) {
      container.innerHTML = this.renderBookingsListMarkup(filter);
    }
  },

  renderBookingsListMarkup(filter) {
    const filtered = filter === 'all'
      ? DATA.bookings
      : DATA.bookings.filter(b => b.status === filter);

    if (filtered.length === 0) {
      return `
        <div class="text-center text-secondary py-32">
          <i class="bi bi-calendar2-x" style="font-size:3rem; opacity:0.5;"></i>
          <p class="text-sm mt-8">No consultations found</p>
        </div>
      `;
    }

    return filtered.map(b => `
      <div class="v2-booking-card mb-16">
        <div class="flex-start gap-12 align-items-start">
          <div class="avatar-ring-purple shrink-0" style="padding: 2px;">
            <img src="${b.astrologerAvatar}" style="width:58px; height:58px; border-radius:50%; object-fit:cover;">
            <span class="dot-online" style="width:12px; height:12px; bottom:2px; right:4px;"></span>
          </div>
          
          <div style="flex:1;">
            <div class="flex-between">
              <h4 class="text-white text-sm fw-600">${b.astrologerName} <i class="bi bi-patch-check-fill text-purple text-xs"></i></h4>
              <span class="v2-status-pill ${b.status}">${b.status === 'upcoming' ? 'Confirmed' : b.status === 'completed' ? 'Completed' : 'Cancelled'}</span>
            </div>
            
            <p class="text-gold text-xs mt-4">${b.type === 'Video' ? 'Vedic Astrology • Tarot' : 'Vedic Astrology • Numerology'}</p>
            
            <div class="flex-between mt-12 align-items-end">
              <div>
                <p class="text-secondary text-xs mb-4"><i class="bi bi-calendar-event me-2"></i> ${b.date}</p>
                <p class="text-secondary text-xs mb-4"><i class="bi bi-clock me-2"></i> ${b.time}</p>
                <p class="text-secondary text-xs"><i class="bi bi-camera-video me-2"></i> ${b.type} Call</p>
              </div>
              
              <div class="text-right">
                ${b.status === 'upcoming' 
                  ? `<p class="text-secondary text-xs mb-8" style="font-size:0.6rem;">Booking ID<br>${b.id} <i class="bi bi-files text-xxs"></i></p>
                     <button class="btn-purple-sm px-12" onclick="Router.go('booking-detail', { id: '${b.id}' })"><i class="bi bi-camera-video-fill"></i> Join Now</button>`
                  : `<div class="stars mb-8"><i class="bi bi-star-fill"></i> <span class="rating-text fw-600">4.8</span></div>
                     <button class="btn-outline-sm px-12" onclick="Router.go('booking-detail', { id: '${b.id}' })">View Details</button>`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  },

  startBookingConsultation(bookingId) {
    const booking = DATA.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    booking.status = 'completed'; // Update state
    if (booking.type === 'Chat') {
      Router.go('chat', { id: booking.astrologerId });
    } else {
      Router.go('audio-call', { id: booking.astrologerId });
    }
  },

  /* ── Wallet top up selections ─────────────────────────────── */
  selectTopupAmount(amount) {
    document.querySelectorAll('.topup-grid .topup-amount').forEach(el => el.classList.remove('selected'));
    const btn = document.getElementById(`topup-amt-${amount}`);
    if (btn) btn.classList.add('selected');
    
    document.getElementById('topup-custom-input').value = amount;
    STATE.selectedTopup = amount;
    
    const payBtn = document.getElementById('btn-wallet-pay');
    if (payBtn) payBtn.innerText = `Recharge ₹${amount} Now`;
  },

  updateCustomTopup(val) {
    const amount = parseInt(val) || 0;
    STATE.selectedTopup = amount;
    
    document.querySelectorAll('.topup-grid .topup-amount').forEach(el => el.classList.remove('selected'));
    const btn = document.getElementById(`topup-amt-${amount}`);
    if (btn) btn.classList.add('selected');

    const payBtn = document.getElementById('btn-wallet-pay');
    if (payBtn) payBtn.innerText = `Recharge ₹${amount} Now`;
  },

  selectPaymentMethod(method) {
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    
    const upi = document.getElementById(`pay-${method}`) || document.getElementById(`chk-pay-${method}`);
    if (upi) upi.classList.add('selected');
  },

  executeWalletPayment() {
    const amount = STATE.selectedTopup || 500;
    STATE.walletBalance += amount;
    
    // Add success transaction ledger
    DATA.transactions.unshift({
      id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
      date: "Today",
      time: "Just Now",
      type: "topup",
      method: "UPI",
      title: "Wallet Top Up",
      amount: amount,
      isCredit: true,
      status: "Success"
    });

    Router.go('transactions');
    App.showToast(`₹${amount} added to wallet balance successfully!`);
  },

  /* ── Intake form modal dialogs ────────────────────────────── */
  showIntakeModal(astroId, consultType) {
    const astro = DATA.astrologers.find(a => a.id === astroId);
    if (!astro) return;

    let modal = document.getElementById('intake-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'intake-modal';
    modal.style = `
      position: absolute; inset: 0; background: rgba(5,3,15,0.85);
      z-index: 1000; display: flex; align-items: flex-end; animation: fadeIn 0.2s ease;
    `;

    const price = consultType === 'Chat' ? astro.chatPrice : astro.audioPrice;
    
    modal.innerHTML = `
      <div class="card-glass flex-column w-full" style="
        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
        border-width: 1px 0 0 0; background: #0c0824; max-height: 90%;
        overflow-y: auto; padding: 20px 16px 30px; animation: slideUp 0.3s cubic-bezier(0.1, 1, 0.1, 1);
      ">
        <div class="flex-between mb-16">
          <div>
            <span class="badge badge-gold mb-6">${consultType.toUpperCase()} INTAKE</span>
            <h4 class="text-white text-xs fw-800">${astro.name}</h4>
          </div>
          <button class="header-icon-btn" style="width:30px; height:30px;" onclick="App.closeIntakeModal()"><i class="bi bi-x"></i></button>
        </div>

        <p class="text-secondary text-xxs line-height-1.3 mb-16">Please confirm birth details for the kundli review. Astrologer requires this before initiating consultation.</p>
        
        <label class="input-label">Select Birth Details</label>
        <div class="card-glass mb-12 py-10 px-12" style="background: rgba(22, 17, 48, 0.4); border-color: rgba(139, 92, 246, 0.15);">
          <div class="flex-between">
            <span class="text-white text-xs fw-700">${DATA.currentUser.name}</span>
            <span class="text-gold text-xxs fw-600">Gemini</span>
          </div>
          <p class="text-muted text-xxs mt-4">${DATA.currentUser.dob} at ${DATA.currentUser.birthTime}</p>
          <p class="text-muted text-xxs mt-2">${DATA.currentUser.birthPlace}</p>
        </div>

        <label class="input-label">Consultation Topic</label>
        <select class="input-field mb-12" id="intake-topic">
          <option>Career Guidance</option>
          <option>Love & Relationship</option>
          <option>Marriage Compatibility</option>
          <option>Finance & Wealth</option>
          <option>Health & Wellness</option>
        </select>

        <label class="input-label">Questions/Notes (Optional)</label>
        <textarea class="input-field mb-16" id="intake-note" style="height: 60px; resize:none;" placeholder="Enter details about your query..."></textarea>

        <div class="flex-between py-8 px-4 mb-16">
          <span class="text-muted text-xs">Total Estimated Rate:</span>
          <span class="text-gold text-sm fw-800">₹${price}/Min</span>
        </div>

        <button class="btn-primary w-full" onclick="App.confirmConsultationOrder('${astro.id}', '${consultType}', ${price})">
          Start Session (Pay from Wallet) <i class="bi bi-wallet2 ms-2"></i>
        </button>
      </div>
    `;

    document.getElementById('screen-viewport').appendChild(modal);
  },

  closeIntakeModal() {
    const modal = document.getElementById('intake-modal');
    if (modal) modal.remove();
  },

  confirmConsultationOrder(astroId, type, rate) {
    this.closeIntakeModal();
    
    // Check wallet balance
    const minRequired = rate * 5;
    if (STATE.walletBalance < minRequired) {
      Router.go('wallet-topup');
      App.showToast(`Insufficient balance. Minimum ₹${minRequired} balance required to call/chat.`);
      return;
    }

    // Deduct minimum 5 min balance for simulation
    const charge = rate * 5;
    STATE.walletBalance -= charge;

    // Create a simulation booking transaction ledger entry
    DATA.transactions.unshift({
      id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
      date: "Today",
      time: "Just Now",
      type: type === 'Chat' ? 'chat' : 'call',
      title: `${type} Consultation`,
      amount: charge,
      isCredit: false,
      status: "Completed"
    });

    if (type === 'Chat') {
      Router.go('chat', { id: astroId });
    } else {
      Router.go('audio-call', { id: astroId });
    }
  },

  /* ── Live Chat Session Logic ──────────────────────────────── */
  initChatSession(astroId) {
    const astro = DATA.astrologers.find(a => a.id === astroId);
    if (!astro) return;

    STATE.chatMessages = [];
    
    // Start session timer
    let sec = 0;
    const timerText = document.getElementById('chat-timer');
    this.chatTimerInterval = setInterval(() => {
      sec++;
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (timerText) timerText.innerText = `${mm}:${ss}`;
    }, 1000);
  },

  sendChatMessage() {
    const input = document.getElementById('chat-input');
    if (!input || !input.value.trim()) return;

    const val = input.value.trim();
    input.value = '';

    const list = document.getElementById('chat-messages-scroll');
    if (!list) return;

    // Append user bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble-user animate-fadeIn';
    userBubble.innerHTML = `
      ${val}
      <div class="chat-time">Just Now</div>
    `;
    list.appendChild(userBubble);
    list.scrollTop = list.scrollHeight;

    // Sim typing indicator
    const typing = document.createElement('div');
    typing.className = 'typing-dots mt-8';
    typing.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    
    setTimeout(() => {
      list.appendChild(typing);
      list.scrollTop = list.scrollHeight;
    }, 800);

    // Astro response sim
    setTimeout(() => {
      typing.remove();
      const reply = document.createElement('div');
      reply.className = 'chat-bubble-astro animate-fadeIn';
      
      let answerText = "Yes, child. I am reviewing your 10th house planetary degrees. Shani is transiting your career house. Focus on remedies like offering mustard oil lamp on Saturday.";
      
      if (val.toLowerCase().includes('job') || val.toLowerCase().includes('career')) {
        answerText = "Your Mahadasha of Guru is active until 2035. This supports professional growth. Between August and October 2025, Rahu's aspect shifts, easing job hurdles.";
      } else if (val.toLowerCase().includes('marriage') || val.toLowerCase().includes('love')) {
        answerText = "Venus is aspecting your 7th house from Leo sign. Romantic stability will strengthen starting October. Chant Durga Chalisa daily.";
      }

      reply.innerHTML = `
        ${answerText}
        <div class="chat-time chat-time-astro">Just Now</div>
      `;
      list.appendChild(reply);
      list.scrollTop = list.scrollHeight;
    }, 2200);
  },

  endChatConsultation(astroId) {
    clearInterval(this.chatTimerInterval);
    Router.go('home');
    App.showToast("Consultation session ended.");
  },

  /* ── Audio Call Logic ─────────────────────────────────────── */
  initAudioCallSession(astroId) {
    let sec = 0;
    STATE.callActive = true;
    
    const display = document.getElementById('call-timer-display');
    this.callTimerInterval = setInterval(() => {
      sec++;
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (display) display.innerText = `${mm}:${ss}`;
    }, 1000);
  },

  toggleMute() {
    const btn = document.getElementById('btn-mute');
    if (!btn) return;
    const isMute = btn.classList.toggle('active');
    btn.style.background = isMute ? 'rgba(239, 68, 68, 0.25)' : '';
    btn.style.borderColor = isMute ? 'var(--red)' : '';
    btn.style.color = isMute ? 'var(--red)' : '';
    App.showToast(isMute ? "Mic Muted" : "Mic Unmuted");
  },

  toggleSpeaker() {
    const btn = document.getElementById('btn-speaker');
    if (!btn) return;
    const isSpeaker = btn.classList.toggle('active');
    btn.style.background = isSpeaker ? 'rgba(124, 58, 237, 0.25)' : '';
    btn.style.borderColor = isSpeaker ? 'var(--purple-mid)' : '';
    btn.style.color = isSpeaker ? 'var(--purple-light)' : '';
    App.showToast(isSpeaker ? "Speakerphone Active" : "Speakerphone Off");
  },

  endAudioCallConsultation(astroId) {
    clearInterval(this.callTimerInterval);
    STATE.callActive = false;
    Router.go('home');
    App.showToast("Voice Consultation ended.");
  },

  /* ── Astro AI Assistant Chat simulation ───────────────────── */
  initAISession() {
    // Scroll bottom
    const list = document.getElementById('ai-messages-scroll');
    if (list) list.scrollTop = list.scrollHeight;
  },

  askAI(topicKey) {
    const data = DATA.astroAIResponses[topicKey];
    if (!data) return;

    const list = document.getElementById('ai-messages-scroll');
    if (!list) return;

    // Append Question
    const qBubble = document.createElement('div');
    qBubble.className = 'chat-bubble-user animate-fadeIn mt-8';
    qBubble.innerHTML = `
      ${data.question}
      <div class="chat-time">Just Now</div>
    `;
    list.appendChild(qBubble);
    list.scrollTop = list.scrollHeight;

    // Typing
    const typing = document.createElement('div');
    typing.className = 'typing-dots mt-8';
    typing.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    
    setTimeout(() => {
      list.appendChild(typing);
      list.scrollTop = list.scrollHeight;
    }, 600);

    // AI Answer
    setTimeout(() => {
      typing.remove();
      const aiBubble = document.createElement('div');
      aiBubble.className = 'chat-bubble-astro animate-fadeIn';
      aiBubble.innerHTML = `
        ${data.response}
        <div class="chat-time chat-time-astro">Just Now</div>
      `;
      list.appendChild(aiBubble);
      list.scrollTop = list.scrollHeight;
    }, 1800);
  },

  sendAIMessage() {
    const input = document.getElementById('ai-input');
    if (!input || !input.value.trim()) return;

    const val = input.value.trim().toLowerCase();
    input.value = '';

    const list = document.getElementById('ai-messages-scroll');
    if (!list) return;

    const qBubble = document.createElement('div');
    qBubble.className = 'chat-bubble-user animate-fadeIn mt-8';
    qBubble.innerHTML = `
      ${val}
      <div class="chat-time">Just Now</div>
    `;
    list.appendChild(qBubble);
    list.scrollTop = list.scrollHeight;

    const typing = document.createElement('div');
    typing.className = 'typing-dots mt-8';
    typing.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    
    setTimeout(() => {
      list.appendChild(typing);
      list.scrollTop = list.scrollHeight;
    }, 600);

    setTimeout(() => {
      typing.remove();
      const aiBubble = document.createElement('div');
      aiBubble.className = 'chat-bubble-astro animate-fadeIn';
      
      let resText = "I am calculating planet placements. For accurate advice, choose one of the quick topic chips or ask about career, health, or moon sign.";
      if (val.includes('career') || val.includes('job') || val.includes('promotion')) {
        resText = DATA.astroAIResponses.career.response;
      } else if (val.includes('love') || val.includes('relationship') || val.includes('compatibility')) {
        resText = DATA.astroAIResponses.love.response;
      } else if (val.includes('money') || val.includes('invest') || val.includes('finance')) {
        resText = DATA.astroAIResponses.finance.response;
      } else if (val.includes('marry') || val.includes('marriage')) {
        resText = DATA.astroAIResponses.marriage.response;
      } else if (val.includes('moon') || val.includes('scorpio')) {
        resText = DATA.astroAIResponses.moon.response;
      }

      aiBubble.innerHTML = `
        ${resText}
        <div class="chat-time chat-time-astro">Just Now</div>
      `;
      list.appendChild(aiBubble);
      list.scrollTop = list.scrollHeight;
    }, 1800);
  },

  /* ── North Indian Kundli chart Generator (SVG Layout) ─────── */
  generateNorthIndianKundliSVG(chartGrid) {
    // Generate simple SVG diamond shape chart layout
    const svgWidth = 280;
    const svgHeight = 280;
    
    // Position of planetary values in SVG based on house key
    const houseCoords = {
      1:  { x: 140, y: 90  },
      2:  { x: 75,  y: 45  },
      3:  { x: 45,  y: 75  },
      4:  { x: 90,  y: 140 },
      5:  { x: 45,  y: 205 },
      6:  { x: 75,  y: 235 },
      7:  { x: 140, y: 190 },
      8:  { x: 205, y: 235 },
      9:  { x: 235, y: 205 },
      10: { x: 190, y: 140 },
      11: { x: 235, y: 75  },
      12: { x: 205, y: 45  }
    };

    // Draw lines and output
    let elements = `
      <!-- Outline Border -->
      <rect x="5" y="5" width="270" height="270" fill="none" stroke="var(--gold)" stroke-width="1.5" />
      
      <!-- Big Cross lines -->
      <line x1="5" y1="5" x2="275" y2="275" stroke="rgba(234, 179, 8, 0.4)" stroke-width="1" />
      <line x1="275" y1="5" x2="5" y2="275" stroke="rgba(234, 179, 8, 0.4)" stroke-width="1" />
      
      <!-- Inner Diamond box -->
      <polygon points="140,5 5,140 140,275 275,140" fill="none" stroke="var(--gold)" stroke-width="1.2" />
    `;

    // Add house number labels (grey/small)
    const labelCoords = {
      1:  { x: 140, y: 115 },
      2:  { x: 90,  y: 65  },
      3:  { x: 65,  y: 90  },
      4:  { x: 115, y: 140 },
      5:  { x: 65,  y: 190 },
      6:  { x: 90,  y: 215 },
      7:  { x: 140, y: 165 },
      8:  { x: 190, y: 215 },
      9:  { x: 215, y: 190 },
      10: { x: 165, y: 140 },
      11: { x: 215, y: 90  },
      12: { x: 190, y: 65  }
    };
    
    // Jaipur Birth Chart starts Virgo (6) as 1st house
    const houseSigns = { 1: "6", 2: "7", 3: "8", 4: "9", 5: "10", 6: "11", 7: "12", 8: "1", 9: "2", 10: "3", 11: "4", 12: "5" };

    for (let h = 1; h <= 12; h++) {
      const c = labelCoords[h];
      elements += `<text x="${c.x}" y="${c.y}" fill="rgba(255,255,255,0.3)" font-size="9" text-anchor="middle" font-family="var(--font-secondary)">${houseSigns[h]}</text>`;
    }

    // Add planetary coordinates strings
    for (let h = 1; h <= 12; h++) {
      const planets = chartGrid[h] || [];
      if (planets.length > 0) {
        const c = houseCoords[h];
        elements += `<text x="${c.x}" y="${c.y}" fill="#fff" font-size="11" font-weight="700" text-anchor="middle" font-family="var(--font-primary)">${planets.join(', ')}</text>`;
      }
    }

    return `
      <svg class="kundli-chart-svg" viewBox="0 0 280 280">
        ${elements}
      </svg>
    `;
  },

  /* ── Store E-commerce Logic ───────────────────────────────── */
  filterStoreCategory(catId) {
    STATE.storeCategory = catId;
    Router.replace('store');
  },

  filterProductsList(val) {
    const grid = document.getElementById('products-list-grid');
    if (!grid) return;

    const term = val.toLowerCase().trim();
    const cards = grid.querySelectorAll('.product-card');

    cards.forEach(card => {
      const name = card.querySelector('.product-name').innerText.toLowerCase();
      if (name.includes(term)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  },

  addToCart(prodId) {
    const item = STATE.cartItems.find(c => c.id === prodId);
    if (item) {
      item.qty++;
    } else {
      STATE.cartItems.push({ id: prodId, qty: 1 });
    }
    
    // Update badge dot dynamically if exists
    const badge = document.querySelector('.header-icon-btn .badge-dot');
    if (badge) {
      badge.innerText = STATE.cartItems.length;
      badge.style.display = '';
    }

    App.showToast("Product added to cart!");
  },

  updateCartQty(prodId, delta) {
    const item = STATE.cartItems.find(c => c.id === prodId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      STATE.cartItems = STATE.cartItems.filter(c => c.id !== prodId);
    }
    Router.replace('cart');
  },

  buyNow(prodId) {
    this.addToCart(prodId);
    Router.go('cart');
  },

  executeStoreOrder(amount) {
    STATE.cartItems = []; // Clear Cart
    
    // Add success transaction ledger
    DATA.transactions.unshift({
      id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
      date: "Today",
      time: "Just Now",
      type: "store",
      title: "Store Remedy Order",
      amount: amount,
      isCredit: false,
      status: "Completed"
    });

    // Add order tracking detail
    DATA.orders.unshift({
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: "Today",
      item: "Natural Amethyst Crystal Bracelet",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=100&auto=format&fit=crop&q=80",
      amount: amount,
      status: "in_transit",
      paymentStatus: "Paid",
      expectedDelivery: "In 3 Days",
      trackingId: `BLUEDART${Math.floor(100000 + Math.random() * 900000)}`
    });

    Router.go('my-orders');
    App.showToast("Order placed successfully! Remedy dispatch initialized.");
  },

  /* ── Astrologer Side Live Consultation Request ───────────── */
  toggleAstroOnline(isChecked) {
    DATA.currentAstrologer.isOnline = isChecked;
    App.showToast(isChecked ? "You are now ONLINE to clients" : "You are now OFFLINE");
  },

  rejectAstroRequest(btn) {
    const card = btn.closest('.request-card');
    if (card) {
      card.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => {
        card.remove();
        const container = document.getElementById('incoming-requests-container');
        if (container && container.children.length === 0) {
          container.innerHTML = `
            <div class="text-center text-secondary py-12">
              <p class="text-xxs">No incoming requests</p>
            </div>
          `;
        }
      }, 300);
    }
  },

  acceptAstroRequest(bookingId) {
    Router.go('astro-consult-live', { id: bookingId });
  },

  filterAstroConsults(filter) {
    document.querySelectorAll('.filter-tabs .filter-tab').forEach(el => el.classList.remove('active'));
    const clickedTab = document.getElementById(`astro-con-tab-${filter}`);
    if (clickedTab) clickedTab.classList.add('active');
    
    const container = document.getElementById('astro-consults-list-scroll');
    if (container) {
      container.innerHTML = this.renderAstroConsultsListMarkup(filter);
    }
  },

  renderAstroConsultsListMarkup(filter) {
    const filtered = filter === 'all'
      ? DATA.astroConsultations
      : DATA.astroConsultations.filter(b => b.status === filter);

    if (filtered.length === 0) {
      return `
        <div class="text-center text-secondary py-16">
          <i class="bi bi-calendar2-x text-xl"></i>
          <p class="text-xs mt-4">No client sessions found</p>
        </div>
      `;
    }

    return filtered.map(b => `
      <div class="card-glass py-12 px-12 mb-12" onclick="Router.go('astro-consult-detail', { id: '${b.id}' })">
        <div class="flex-between">
          <div class="flex-start gap-8">
            <span class="badge badge-gold" style="font-size:0.58rem;">${b.id}</span>
            <span class="text-muted text-xxs">${b.date}</span>
          </div>
          <span class="badge badge-status ${b.status === 'upcoming' ? 'badge-upcoming' : 'badge-completed'}">
            ${b.status.toUpperCase()}
          </span>
        </div>
        <div class="flex-between mt-12">
          <div class="flex-start gap-12">
            <img src="${b.clientAvatar}" class="rounded-full" style="width: 40px; height: 40px; object-fit: cover;">
            <div>
              <h4 class="text-white text-xs fw-700">${b.clientName}</h4>
              <p class="text-muted text-xxs mt-2">${b.type} Session • ${b.duration}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-green text-xs fw-800">+₹${b.amount}</p>
            ${b.status === 'upcoming' ? `<span class="text-purple text-xxs fw-700 mt-4 d-inline-block">Join Chat <i class="bi bi-arrow-right"></i></span>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  },

  startAstroLiveConsultation(bookingId) {
    Router.go('astro-consult-live', { id: bookingId });
  },

  initAstroLiveSession(bookingId) {
    const list = document.getElementById('astro-live-messages-scroll');
    if (list) list.scrollTop = list.scrollHeight;

    // Timer countdown
    let minutes = 30;
    let seconds = 0;
    const timerText = document.getElementById('astro-live-timer');
    
    this.chatTimerInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.chatTimerInterval);
          App.endAstroLiveSession(bookingId);
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      if (timerText) timerText.innerText = `${mm}:${ss}`;
    }, 1000);
  },

  sendAstroLiveMessage() {
    const input = document.getElementById('astro-live-input');
    if (!input || !input.value.trim()) return;

    const val = input.value.trim();
    input.value = '';

    const list = document.getElementById('astro-live-messages-scroll');
    if (!list) return;

    // Append Astro/AstroTalkz bubble (aligned right for current sender view)
    const reply = document.createElement('div');
    reply.className = 'chat-bubble-astro animate-fadeIn mt-8';
    reply.style.alignSelf = 'flex-end';
    reply.style.background = 'var(--purple-primary)';
    reply.style.borderColor = 'transparent';
    reply.innerHTML = `
      ${val}
      <div class="chat-time text-right" style="color: rgba(255,255,255,0.5);">Just Now</div>
    `;
    list.appendChild(reply);
    list.scrollTop = list.scrollHeight;

    // Simulate auto response from customer Priya in 2s
    setTimeout(() => {
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble-user animate-fadeIn mt-8';
      userBubble.style.alignSelf = 'flex-start';
      userBubble.style.background = 'rgba(22, 16, 48, 0.90)';
      userBubble.style.border = '1px solid rgba(139, 92, 246, 0.18)';
      userBubble.style.color = '#fff';
      
      userBubble.innerHTML = `
        Thank you pandit ji for this remedy explanation. I will perform this Vastu layout shift this weekend.
        <div class="chat-time chat-time-astro" style="text-align:left;">Just Now</div>
      `;
      list.appendChild(userBubble);
      list.scrollTop = list.scrollHeight;
    }, 2000);
  },

  endAstroLiveSession(bookingId) {
    clearInterval(this.chatTimerInterval);
    
    // Complete the session
    const booking = DATA.astroConsultations.find(c => c.id === bookingId);
    if (booking) {
      booking.status = 'completed';
      booking.clientRating = 5.0;
    }

    Router.go('astro-dashboard');
    App.showToast("Session closed successfully. Payout added to ledger.");
  }
};
