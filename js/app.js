/* ============================================================
   AstroTalkz by vorabion — Main App Controller & Services
   Manages central state, consultation sessions, wallet, bookings
   STRICTLY NO VIDEO CALLS (Only Chat and Audio Call).
   ============================================================ */

const App = {
  chatTimerInterval: null,
  callTimerInterval: null,
  pendingCheckoutReturn: false,

  /* ── Initialization ───────────────────────────────────────── */
  init() {
    console.log("AstroTalkz initializing with state persistence...");
    
    // Check initial route
    if (DATA.currentUser && DATA.currentUser.isLoggedIn) {
      if (STATE.currentRole === 'astrologer') {
        Router.reset('astro-dashboard');
      } else {
        Router.reset('home');
      }
    } else {
      Router.reset('user-login');
    }
    
    // Global event listeners
    document.addEventListener('click', (e) => {
      const drawer = document.getElementById('app-drawer');
      if (drawer && drawer.classList.contains('active') && !drawer.contains(e.target) && !e.target.closest('.header-btn')) {
        App.toggleDrawer(false);
      }
    });

    // Escape key listener for modal/bottomsheet closing
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        BottomSheet.close();
        ConfirmDialog.close();
        document.querySelectorAll('.modal-backdrop').forEach(m => m.remove());
      }
    });
  },

  /* ── Core Rendering & Lifecycle ───────────────────────────── */
  render(screenId, params = {}) {
    const viewport = document.getElementById('screen-viewport');
    if (!viewport) return;

    STATE.activeScreen = screenId;

    // Clear active timers when switching screens
    if (screenId !== 'chat' && screenId !== 'astro-consult-live') {
      clearInterval(this.chatTimerInterval);
    }
    if (screenId !== 'audio-call') {
      clearInterval(this.callTimerInterval);
    }

    // Call screen generator template
    if (typeof Screens[screenId] === 'function') {
      viewport.innerHTML = Screens[screenId](params);
      this.afterRender(screenId, params);
      this.updateGlobalNavigation(screenId);
    } else {
      console.warn(`Screen '${screenId}' not found. Falling back to home.`);
      Router.reset('home');
    }
  },

  updateGlobalNavigation(screenId) {
    const userNav = document.getElementById('bottom-nav');
    const astroNav = document.getElementById('astro-bottom-nav');
    if (!userNav || !astroNav) return;
    
    userNav.style.display = 'none';
    astroNav.style.display = 'none';
    
    userNav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    astroNav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));

    if (STATE.currentRole === 'user') {
      const mainScreens = ['home', 'consult', 'horoscope', 'bookings', 'profile'];
      if (mainScreens.includes(screenId)) {
        userNav.style.display = 'flex';
        const idMap = { home:'nav-home', consult:'nav-consult', horoscope:'nav-horoscope', bookings:'nav-bookings', profile:'nav-profile' };
        const activeEl = document.getElementById(idMap[screenId]);
        if (activeEl) activeEl.classList.add('active');
      }
    } else {
      const mainScreens = ['astro-dashboard', 'astro-consults', 'astro-earnings', 'astro-profile-expert'];
      if (mainScreens.includes(screenId)) {
        astroNav.style.display = 'flex';
        const idMap = { 'astro-dashboard':'anav-dashboard', 'astro-consults':'anav-consults', 'astro-earnings':'anav-earnings', 'astro-profile-expert':'anav-profile' };
        const activeEl = document.getElementById(idMap[screenId]);
        if (activeEl) activeEl.classList.add('active');
      }
    }
  },

  afterRender(screenId, params) {
    document.querySelectorAll('.screen-body').forEach(b => b.scrollTop = 0);

    if (screenId === 'chat') {
      this.initChatSession(params && params.id);
    } else if (screenId === 'audio-call') {
      this.initAudioCallSession(params && params.id);
    } else if (screenId === 'astro-consult-live') {
      this.initAstroLiveSession(params && params.id);
    }
    
    // Auto scroll chat containers
    const msgs = document.getElementById('chat-messages-container');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  },

  /* ── Role Management ──────────────────────────────────────── */
  switchRole(role) {
    STATE.currentRole = role;
    
    document.querySelectorAll('.demo-pills .demo-pill').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`btn-${role}`);
    if (btn) btn.classList.add('active');

    if (role === 'user') {
      Router.reset('home');
      App.showToast('Switched to User View');
    } else if (role === 'astrologer') {
      Router.reset('astro-dashboard');
      App.showToast('Switched to Astrologer Partner View');
    }
  },

  /* ── Toast Notifications ──────────────────────────────────── */
  showToast(message, duration = 2400) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'global-toast';
      (document.querySelector('.iphone-bezel') || document.body).appendChild(toast);
    }
    toast.innerHTML = `<span>${message}</span>`;
    toast.classList.add('show');
    
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  },

  /* ── Authentication Service ───────────────────────────────── */
  AuthService: {
    handlePhoneSubmit() {
      const input = document.getElementById('phone-input');
      const phone = input ? input.value.trim() : '9876543210';
      if (!phone || phone.length < 10) {
        App.showToast('Please enter a valid 10-digit mobile number');
        return;
      }
      DATA.currentUser.phone = `+91 ${phone}`;
      Storage.saveState(DATA);
      App.showToast('OTP sent to ' + DATA.currentUser.phone + ' (Demo: 123456)');
      Router.go('otp-verify');
    },

    handleOtpInput(input, index) {
      if (input.value.length === 1 && index < 6) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    },

    verifyOtp() {
      let otp = '';
      for (let i = 1; i <= 6; i++) {
        const el = document.getElementById(`otp-${i}`);
        if (el) otp += el.value;
      }
      if (otp === '123456' || otp.length === 6) {
        DATA.currentUser.isLoggedIn = true;
        Storage.saveState(DATA);
        App.showToast('Login Successful! Welcome to AstroTalkz.');
        if (!DATA.currentUser.name || DATA.currentUser.name === 'User') {
          Router.go('onboarding-name');
        } else {
          Router.reset('home');
        }
      } else {
        App.showToast('Invalid OTP. Demo OTP is 123456');
      }
    },

    googleLogin() {
      App.showToast('Authenticating with Google...');
      setTimeout(() => {
        DATA.currentUser.isLoggedIn = true;
        Storage.saveState(DATA);
        Router.reset('home');
        App.showToast('Welcome to AstroTalkz!');
      }, 700);
    },

    saveOnboardingName() {
      const nameInput = document.getElementById('ob-name');
      if (nameInput && nameInput.value.trim()) {
        DATA.currentUser.name = nameInput.value.trim();
        Storage.saveState(DATA);
      }
      Router.go('onboarding-dob');
    },

    completeOnboarding() {
      const dob = document.getElementById('ob-dob');
      const time = document.getElementById('ob-time');
      const place = document.getElementById('ob-place');
      if (dob && dob.value) DATA.currentUser.dob = dob.value;
      if (time && time.value) DATA.currentUser.birthTime = time.value;
      if (place && place.value) DATA.currentUser.birthPlace = place.value;
      DATA.currentUser.isLoggedIn = true;
      Storage.saveState(DATA);
      Router.reset('home');
      App.showToast('Welcome ' + DATA.currentUser.name.split(' ')[0] + '! Profile setup completed.');
    },

    logout() {
      DATA.currentUser.isLoggedIn = false;
      Storage.saveState(DATA);
      Router.reset('user-login');
      App.showToast('Signed out successfully');
    }
  },

  /* ── Astrologer Discovery & Filtering ─────────────────────── */
  AstrologerService: {
    getFilteredList() {
      let list = [...DATA.astrologers];
      const q = (STATE.consultSearchQuery || '').toLowerCase().trim();
      if (q) {
        list = list.filter(a => 
          a.name.toLowerCase().includes(q) ||
          a.title.toLowerCase().includes(q) ||
          a.expertise.some(e => e.toLowerCase().includes(q)) ||
          a.languages.some(l => l.toLowerCase().includes(q))
        );
      }
      if (STATE.consultCategoryFilter && STATE.consultCategoryFilter !== 'All') {
        list = list.filter(a => a.expertise.some(e => e.toLowerCase().includes(STATE.consultCategoryFilter.toLowerCase())));
      }
      if (STATE.consultTypeFilter === 'chat') {
        list = list.filter(a => a.chatRate > 0);
      } else if (STATE.consultTypeFilter === 'call') {
        list = list.filter(a => a.callRate > 0);
      }
      if (STATE.consultSortBy === 'rating') {
        list.sort((a,b) => b.rating - a.rating);
      } else if (STATE.consultSortBy === 'price-asc') {
        list.sort((a,b) => a.chatRate - b.chatRate);
      } else if (STATE.consultSortBy === 'experience') {
        list.sort((a,b) => parseInt(b.experience) - parseInt(a.experience));
      }
      return list;
    },

    toggleFavourite(id, event) {
      if (event) event.stopPropagation();
      const idx = DATA.favourites.indexOf(id);
      if (idx > -1) {
        DATA.favourites.splice(idx, 1);
        App.showToast('Removed from favourites');
      } else {
        DATA.favourites.push(id);
        App.showToast('Added to favourites ❤️');
      }
      Storage.saveState(DATA);
      App.render(STATE.activeScreen, Router.current() ? Router.current().params : {});
    },

    setSearch(val) {
      STATE.consultSearchQuery = val;
      const listContainer = document.getElementById('consult-astros-list');
      if (listContainer) {
        listContainer.innerHTML = Screens.renderAstrologerCards(this.getFilteredList());
      }
    },

    setCategory(cat) {
      STATE.consultCategoryFilter = cat;
      App.render('consult');
    },

    setTypeFilter(type) {
      STATE.consultTypeFilter = STATE.consultTypeFilter === type ? 'All' : type;
      App.render('consult');
    },

    setSort(sort) {
      STATE.consultSortBy = sort;
      App.render('consult');
    }
  },

  /* ── Booking & Checkout Service ───────────────────────────── */
  BookingService: {
    startBookingFlow(astrologerId, type) {
      const astro = DATA.astrologers.find(a => a.id === astrologerId) || DATA.astrologers[0];
      STATE.selectedAstrologerId = astro.id;
      STATE.selectedConsultationType = type === 'call' ? 'call' : 'chat';
      
      if (type === 'call') {
        Router.go('audio-call', { id: astro.id });
      } else {
        Router.go('chat', { id: astro.id });
      }
    },

    cancelBooking(bookingId) {
      const b = DATA.bookings.find(x => x.id === bookingId);
      if (!b) return;
      b.status = 'cancelled';
      DATA.currentUser.walletBalance += b.amount;
      
      DATA.transactions.unshift({
        id: 'tx_' + Date.now(),
        title: "Refund for " + b.id,
        method: "Wallet",
        date: "Today",
        time: "Just Now",
        amount: b.amount,
        isCredit: true,
        status: "Success"
      });

      Storage.saveState(DATA);
      App.showToast(`Booking cancelled. ₹${b.amount} refunded to your wallet.`);
      App.render('bookings');
    }
  },

  /* ── Wallet & Recharge Service ────────────────────────────── */
  WalletService: {
    selectPreset(amt) {
      STATE.selectedTopup = amt || 500;
      const btn = document.getElementById('btn-pay-wallet');
      if (btn) btn.innerHTML = `🔒 Proceed to Pay ₹ ${STATE.selectedTopup}`;
      App.render('wallet-topup');
    },

    processRecharge(method = 'UPI') {
      const amt = STATE.selectedTopup || 500;
      const btn = document.getElementById('btn-pay-wallet');
      if (btn) btn.innerHTML = '<i class="bi bi-arrow-repeat spin me-2"></i> Processing payment...';

      setTimeout(() => {
        DATA.currentUser.walletBalance += amt;
        
        DATA.transactions.unshift({
          id: 'tx_' + Date.now(),
          title: "Wallet Top Up",
          method: method,
          date: "Today",
          time: new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'}),
          amount: amt,
          isCredit: true,
          status: "Success"
        });

        DATA.notifications.unshift({
          id: 'notif_' + Date.now(),
          title: "Wallet Top Up Successful 🎉",
          message: `₹ ${amt} has been credited to your AstroTalkz wallet via ${method}.`,
          time: "Just Now",
          read: false
        });

        Storage.saveState(DATA);
        App.showToast(`₹ ${amt} added to wallet successfully! 🎉`);
        Router.go('wallet-topup');
      }, 750);
    }
  },

  /* ── Live Chat Logic ──────────────────────────────────────── */
  initChatSession(astroId) {
    const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
    STATE.selectedAstrologerId = astro.id;
    
    if (!DATA.chatMessages[astro.id]) {
      DATA.chatMessages[astro.id] = [
        { id: "m1", sender: "user", text: "Namaste! I want to know about my career growth and future opportunities.", time: "09:30 AM" },
        { id: "m2", sender: "astrologer", text: "Namaste! 🙏\nSure, I will analyze your career path and future opportunities. Please share your birth details to get started.", time: "09:31 AM" }
      ];
    }

    clearInterval(this.chatTimerInterval);
    let sec = 504; // 00:08:24
    const timerDisplay = document.getElementById('chat-timer-display');
    const spentDisplay = document.getElementById('chat-spent-display');

    this.chatTimerInterval = setInterval(() => {
      sec++;
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.innerText = `${mm}:${ss}`;
      
      const spent = Math.ceil(sec / 60) * astro.chatRate;
      if (spentDisplay) spentDisplay.innerText = `₹ ${spent} (₹${astro.chatRate}/m)`;
    }, 1000);
  },

  sendChatMessage() {
    const input = document.getElementById('chat-input-field');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    input.value = '';

    const astroId = STATE.selectedAstrologerId || "astro_01";
    const timeStr = new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'});

    if (!DATA.chatMessages[astroId]) DATA.chatMessages[astroId] = [];
    DATA.chatMessages[astroId].push({
      id: "usr_" + Date.now(),
      sender: "user",
      text: text,
      time: timeStr
    });

    const msgsContainer = document.getElementById('chat-messages-container');
    if (msgsContainer) {
      const bubble = document.createElement('div');
      bubble.style = "display:flex; gap:8px; align-self:flex-end; max-width:82%; margin-bottom:8px;";
      bubble.innerHTML = `
        <div style="background:linear-gradient(135deg,#5b21b6,#7c3aed); color:white; padding:10px 14px; border-radius:16px 16px 2px 16px; font-size:0.78rem; line-height:1.4;">
          ${text}
          <div style="font-size:0.58rem; color:rgba(255,255,255,0.6); text-align:right; margin-top:4px;">${timeStr} ✓✓</div>
        </div>
      `;
      msgsContainer.appendChild(bubble);
      msgsContainer.scrollTop = msgsContainer.scrollHeight;
    }

    // Simulated astrologer response
    setTimeout(() => {
      let replyText = "I have noted your query. Based on your Gemini Lagna and Jupiter's transit in your 10th house, your current period is transitioning into a fruitful phase. Let's do a simple Surya Arghya remedy daily.";
      const low = text.toLowerCase();
      if (low.includes('career') || low.includes('job') || low.includes('promotion')) {
        replyText = "Your 10th house of career shows Jupiter's beneficial aspect. The months between August and November 2026 bring a stellar promotion opportunity. Maintain focus.";
      } else if (low.includes('love') || low.includes('marriage') || low.includes('relationship')) {
        replyText = "Venus is in your 7th house moving into 11th. Relationship harmony is deeply favored. Any misunderstandings will dissolve in the coming 3 weeks.";
      } else if (low.includes('finance') || low.includes('money')) {
        replyText = "Your 2nd house has strong planetary support, indicating rapid wealth gains with careful expense control. Wearing a Ruby or chanting Gayatri Mantra will enhance stability.";
      }

      DATA.chatMessages[astroId].push({
        id: "astro_" + Date.now(),
        sender: "astrologer",
        text: replyText,
        time: new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})
      });
      Storage.saveState(DATA);

      if (msgsContainer) {
        const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
        const astroBubble = document.createElement('div');
        astroBubble.style = "display:flex; gap:8px; align-self:flex-start; max-width:82%; margin-bottom:8px;";
        astroBubble.innerHTML = `
          <img src="${astro.avatar}" style="width:28px; height:28px; border-radius:50%; object-fit:cover; margin-top:2px;">
          <div style="background:#160d33; border:1px solid rgba(139,92,246,0.25); color:white; padding:10px 14px; border-radius:16px 16px 16px 2px; font-size:0.78rem; line-height:1.4;">
            ${replyText}
            <div style="font-size:0.58rem; color:#9ca3af; text-align:left; margin-top:4px;">${new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})}</div>
          </div>
        `;
        msgsContainer.appendChild(astroBubble);
        msgsContainer.scrollTop = msgsContainer.scrollHeight;
      }
    }, 1200);
  },

  endChatConsultation() {
    clearInterval(this.chatTimerInterval);
    const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
    const spent = astro.chatRate * 8;
    DATA.currentUser.walletBalance = Math.max(0, DATA.currentUser.walletBalance - spent);

    DATA.transactions.unshift({
      id: "tx_" + Date.now(),
      title: "Chat Consultation",
      astrologer: astro.name,
      date: "Today",
      time: "Just Now",
      amount: spent,
      isCredit: false,
      status: "Completed"
    });

    Storage.saveState(DATA);
    App.showToast(`Chat ended. ₹ ${spent} deducted from wallet.`);
    Router.go('home');
  },

  /* ── Simulated Audio Call ─────────────────────────────────── */
  initAudioCallSession(astroId) {
    const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
    STATE.selectedAstrologerId = astro.id;
    
    let sec = 166; // 00:02:46
    clearInterval(this.callTimerInterval);
    const timerDisplay = document.getElementById('audio-timer-display');

    this.callTimerInterval = setInterval(() => {
      sec++;
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.innerText = `${mm}:${ss}`;
    }, 1000);
  },

  toggleMute() {
    STATE.isMuted = !STATE.isMuted;
    const btn = document.getElementById('btn-mute-toggle');
    if (btn) {
      btn.style.background = STATE.isMuted ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.08)';
      btn.style.color = STATE.isMuted ? '#f87171' : 'white';
    }
    App.showToast(STATE.isMuted ? 'Microphone Muted 🔇' : 'Microphone Unmuted 🎙️');
  },

  toggleSpeaker() {
    STATE.isSpeakerOn = !STATE.isSpeakerOn;
    const btn = document.getElementById('btn-speaker-toggle');
    if (btn) {
      btn.style.background = STATE.isSpeakerOn ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.08)';
      btn.style.color = STATE.isSpeakerOn ? '#4ade80' : 'white';
    }
    App.showToast(STATE.isSpeakerOn ? 'Speakerphone ON 🔊' : 'Earphone Mode 🔈');
  },

  endAudioCallConsultation() {
    clearInterval(this.callTimerInterval);
    const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
    const spent = astro.callRate * 3;
    DATA.currentUser.walletBalance = Math.max(0, DATA.currentUser.walletBalance - spent);

    DATA.transactions.unshift({
      id: 'tx_' + Date.now(),
      title: "Audio Call Consultation",
      astrologer: astro.name,
      date: "Today",
      time: "Just Now",
      amount: spent,
      isCredit: false,
      status: "Completed"
    });

    Storage.saveState(DATA);
    App.showToast(`Call ended. ₹ ${spent} deducted from wallet.`);
    Router.go('home');
  },

  /* ── Filter Helpers ───────────────────────────────────────── */
  filterBookings(tab) {
    document.querySelectorAll('.filter-tabs .filter-tab').forEach(b => {
      if (b.innerText.toLowerCase().includes(tab.toLowerCase())) b.classList.add('active');
      else b.classList.remove('active');
    });
    App.showToast(`Showing ${tab} bookings`);
  },

  filterTransactions(tab) {
    document.querySelectorAll('.filter-tabs .filter-tab').forEach(b => {
      if (b.innerText.toLowerCase().includes(tab.toLowerCase())) b.classList.add('active');
      else b.classList.remove('active');
    });
    App.showToast(`Showing ${tab} transactions`);
  },

  /* ── Modals (Zodiac Picker, Filters, Profile Edit) ─────────── */
  showZodiacPickerModal() {
    const signs = [
      { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19" },
      { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20" },
      { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20" },
      { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22" },
      { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22" },
      { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22" },
      { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22" },
      { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21" },
      { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21" },
      { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19" },
      { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18" },
      { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20" }
    ];

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:999; display:flex; align-items:flex-end; justify-content:center;";
    modal.innerHTML = `
      <div style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:24px 24px 0 0; width:100%; max-width:440px; padding:20px; max-height:80vh; overflow-y:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.1rem; font-weight:700; color:white;">Select Zodiac Sign</h3>
          <button style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer;" onclick="this.closest('.modal-backdrop').remove()">✕</button>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;">
          ${signs.map(s => `
            <div onclick="STATE.selectedHoroscopeSign='${s.name}'; App.render('horoscope'); this.closest('.modal-backdrop').remove();" style="background:${STATE.selectedHoroscopeSign===s.name?'rgba(124,58,237,0.35)':'#160e35'}; border:1px solid ${STATE.selectedHoroscopeSign===s.name?'#7c3aed':'rgba(255,255,255,0.08)'}; border-radius:12px; padding:12px 6px; text-align:center; cursor:pointer;">
              <span style="font-size:1.6rem; display:block; margin-bottom:4px;">${s.symbol}</span>
              <p style="font-size:0.8rem; font-weight:700; color:white;">${s.name}</p>
              <p style="font-size:0.55rem; color:#9ca3af; margin-top:2px;">${s.dates}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(modal);
  },

  toggleConsultFilterModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:999; display:flex; align-items:flex-end; justify-content:center;";
    modal.innerHTML = `
      <div style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:24px 24px 0 0; width:100%; max-width:440px; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.1rem; font-weight:700; color:white;">Filter &amp; Sort Astrologers</h3>
          <button style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer;" onclick="this.closest('.modal-backdrop').remove()">✕</button>
        </div>

        <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:8px;">Sort By</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
          <button onclick="App.AstrologerService.setSort('recommended'); this.closest('.modal-backdrop').remove();" class="filter-tab ${STATE.consultSortBy==='recommended'?'active':''}">Recommended</button>
          <button onclick="App.AstrologerService.setSort('rating'); this.closest('.modal-backdrop').remove();" class="filter-tab ${STATE.consultSortBy==='rating'?'active':''}">Highest Rated ★</button>
          <button onclick="App.AstrologerService.setSort('price-asc'); this.closest('.modal-backdrop').remove();" class="filter-tab ${STATE.consultSortBy==='price-asc'?'active':''}">Rate: Low to High</button>
          <button onclick="App.AstrologerService.setSort('experience'); this.closest('.modal-backdrop').remove();" class="filter-tab ${STATE.consultSortBy==='experience'?'active':''}">Experience</button>
        </div>

        <button class="btn-primary w-full" style="padding:12px; border-radius:12px; font-weight:700;" onclick="this.closest('.modal-backdrop').remove()">
          Apply Filters
        </button>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(modal);
  },

  showEditProfileModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:999; display:flex; align-items:flex-end; justify-content:center;";
    modal.innerHTML = `
      <div style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:24px 24px 0 0; width:100%; max-width:440px; padding:20px; max-height:85vh; overflow-y:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.1rem; font-weight:700; color:white;">Edit Profile &amp; Birth Details</h3>
          <button style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer;" onclick="this.closest('.modal-backdrop').remove()">✕</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          <div>
            <label style="font-size:0.7rem; color:#9ca3af;">Full Name</label>
            <input type="text" id="edit-name" value="${DATA.currentUser.name}" class="input-field" style="background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:8px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.7rem; color:#9ca3af;">Email</label>
            <input type="email" id="edit-email" value="${DATA.currentUser.email}" class="input-field" style="background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:8px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.7rem; color:#9ca3af;">Date of Birth</label>
            <input type="date" id="edit-dob" value="${DATA.currentUser.dob}" class="input-field" style="background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:8px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.7rem; color:#9ca3af;">Time of Birth</label>
            <input type="time" id="edit-time" value="${DATA.currentUser.birthTime}" class="input-field" style="background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:8px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.7rem; color:#9ca3af;">Place of Birth</label>
            <input type="text" id="edit-place" value="${DATA.currentUser.birthPlace}" class="input-field" style="background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:8px 12px; color:white; width:100%;">
          </div>
        </div>

        <button class="btn-primary w-full" style="margin-top:18px; padding:12px; border-radius:12px; font-weight:700;" onclick="
          const n = document.getElementById('edit-name').value;
          const e = document.getElementById('edit-email').value;
          const d = document.getElementById('edit-dob').value;
          const t = document.getElementById('edit-time').value;
          const p = document.getElementById('edit-place').value;
          if (n) DATA.currentUser.name = n;
          if (e) DATA.currentUser.email = e;
          if (d) DATA.currentUser.dob = d;
          if (t) DATA.currentUser.birthTime = t;
          if (p) DATA.currentUser.birthPlace = p;
          Storage.saveState(DATA);
          App.showToast('Profile updated successfully ✓');
          App.render('profile');
          this.closest('.modal-backdrop').remove();
        ">
          Save Changes
        </button>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(modal);
  },

  showPromoCodeModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:999; display:flex; align-items:flex-end; justify-content:center;";
    modal.innerHTML = `
      <div style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:24px 24px 0 0; width:100%; max-width:440px; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.1rem; font-weight:700; color:white;">Available Coupons</h3>
          <button style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer;" onclick="this.closest('.modal-backdrop').remove()">✕</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${DATA.offers.map(o => `
            <div style="background:#160e35; border:1px dashed #7c3aed; border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <span style="font-size:0.85rem; font-weight:800; color:var(--gold); letter-spacing:0.04em;">${o.code}</span>
                <p style="font-size:0.68rem; color:white; margin-top:2px;">${o.title}</p>
                <p style="font-size:0.58rem; color:#9ca3af;">Min recharge ₹${o.minAmount}</p>
              </div>
              <button class="btn-primary btn-sm" style="padding:4px 12px; font-size:0.68rem; border-radius:8px;" onclick="
                STATE.appliedCoupon = '${o.code}';
                App.showToast('Coupon ${o.code} applied successfully! 🎉');
                this.closest('.modal-backdrop').remove();
              ">
                Apply
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(modal);
  },

  /* ── Notifications ────────────────────────────────────────── */
  markAllNotificationsRead() {
    DATA.notifications.forEach(n => n.read = true);
    Storage.saveState(DATA);
    App.showToast('All notifications marked as read ✓');
    App.render('notifications');
  },

  /* ── Drawer & Modals ──────────────────────────────────────── */
  toggleDrawer(force) {
    const d = document.getElementById('app-drawer-overlay');
    if (d) {
      if (force !== undefined) {
        d.style.display = force ? 'flex' : 'none';
      } else {
        d.style.display = d.style.display === 'none' ? 'flex' : 'none';
      }
    }
  },

  /* ── Expert Panel Controls ────────────────────────────────── */
  ExpertService: {
    toggleOnline() {
      DATA.currentAstrologer.isOnline = !DATA.currentAstrologer.isOnline;
      DATA.astrologers[0].isOnline = DATA.currentAstrologer.isOnline;
      Storage.saveState(DATA);
      App.showToast(`You are now ${DATA.currentAstrologer.isOnline ? 'ONLINE to users ✓' : 'OFFLINE'}`);
      App.render('astro-dashboard');
    },

    acceptRequest(reqId) {
      const req = DATA.astroConsultations.find(r => r.id === reqId) || DATA.astroConsultations[0];
      req.status = 'active';
      Storage.saveState(DATA);
      Router.go('astro-consult-live', { id: req.id });
    },

    endLiveSession(reqId) {
      const req = DATA.astroConsultations.find(r => r.id === reqId) || DATA.astroConsultations[0];
      req.status = 'completed';
      DATA.currentAstrologer.todayStats.earnings += req.amount;
      Storage.saveState(DATA);
      App.showToast(`Consultation completed! +₹${req.amount} added to earnings.`);
      Router.go('astro-dashboard');
    }
  },

  sendAstroLiveMessage() {
    const input = document.getElementById('astro-live-input');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    input.value = '';

    const container = document.getElementById('astro-live-messages-scroll');
    if (container) {
      const bubble = document.createElement('div');
      bubble.style = "align-self:flex-end; max-width:82%; background:#22c55e; color:white; padding:10px 14px; border-radius:14px 14px 2px 14px; font-size:0.78rem; margin-top:8px;";
      bubble.innerHTML = `${text} <div style="font-size:0.58rem; color:rgba(255,255,255,0.7); text-align:right; margin-top:2px;">Just Now ✓✓</div>`;
      container.appendChild(bubble);
      container.scrollTop = container.scrollHeight;
    }
  },

  /* ── Reset Demo ───────────────────────────────────────────── */
  resetDemoData() {
    Storage.resetDemo();
    App.showToast('Demo data successfully reset to initial state!');
    Router.reset('home');
  }
};


/* ── Centralized Modal & Bottom Sheet System ──────────────── */
const BottomSheet = {
  open(contentHtml, title = '') {
    this.close();
    const overlay = document.createElement('div');
    overlay.className = 'bottom-sheet-overlay active';
    overlay.id = 'global-bottom-sheet';
    overlay.onclick = (e) => {
      if (e.target === overlay) BottomSheet.close();
    };
    overlay.innerHTML = `
      <div class="bottom-sheet-container">
        <div class="sheet-handle" style="width:36px; height:4px; border-radius:2px; background:rgba(255,255,255,0.25); margin:8px auto 12px;"></div>
        ${title ? `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:0 16px 12px; border-bottom:1px solid rgba(255,255,255,0.06);">
            <h3 style="font-size:1.05rem; font-weight:700; color:white;">${title}</h3>
            <button style="background:none; border:none; color:#9ca3af; font-size:1.1rem; cursor:pointer;" onclick="BottomSheet.close()">✕</button>
          </div>
        ` : ''}
        <div class="sheet-body" style="padding:16px; max-height:75vh; overflow-y:auto;">
          ${contentHtml}
        </div>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(overlay);
  },

  close() {
    const existing = document.getElementById('global-bottom-sheet');
    if (existing) {
      existing.classList.remove('active');
      setTimeout(() => existing.remove(), 200);
    }
  }
};

const ConfirmDialog = {
  open({ title = 'Are you sure?', message = '', confirmText = 'Confirm', cancelText = 'Cancel', onConfirm = null }) {
    this.close();
    const overlay = document.createElement('div');
    overlay.className = 'confirm-dialog-overlay active';
    overlay.id = 'global-confirm-dialog';
    overlay.onclick = (e) => {
      if (e.target === overlay) ConfirmDialog.close();
    };
    overlay.innerHTML = `
      <div class="confirm-dialog-card" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:20px; padding:20px; width:90%; max-width:340px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.9);">
        <div style="width:48px; height:48px; border-radius:50%; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.3); display:flex; align-items:center; justify-content:center; color:#f87171; font-size:1.3rem; margin:0 auto 10px;">
          <i class="bi bi-exclamation-triangle-fill"></i>
        </div>
        <h3 style="font-size:1rem; font-weight:700; color:white; margin-bottom:4px;">${title}</h3>
        <p style="font-size:0.72rem; color:#9ca3af; line-height:1.4; margin-bottom:16px;">${message}</p>
        <div style="display:flex; gap:10px;">
          <button class="btn-outline flex-1" style="padding:10px; border-radius:10px; font-size:0.75rem; font-weight:600;" onclick="ConfirmDialog.close()">${cancelText}</button>
          <button class="btn-primary flex-1" id="btn-dialog-confirm-action" style="background:#ef4444; border-color:#ef4444; padding:10px; border-radius:10px; font-size:0.75rem; font-weight:700;">${confirmText}</button>
        </div>
      </div>
    `;
    (document.querySelector('.iphone-bezel') || document.body).appendChild(overlay);
    const confirmBtn = document.getElementById('btn-dialog-confirm-action');
    if (confirmBtn) {
      confirmBtn.onclick = () => {
        ConfirmDialog.close();
        if (typeof onConfirm === 'function') onConfirm();
      };
    }
  },

  close() {
    const existing = document.getElementById('global-confirm-dialog');
    if (existing) existing.remove();
  }
};

const ExpertNavigation = {
  openMore() {
    const astro = DATA.currentAstrologer;
    const html = `
      <div class="expert-more-menu">
        <!-- Astrologer Summary Strip -->
        <div style="display:flex; gap:12px; align-items:center; background:#160e35; border:1px solid rgba(139,92,246,0.3); border-radius:14px; padding:12px; margin-bottom:14px; cursor:pointer;" onclick="ExpertNavigation.navigate('astro-profile-expert')">
          <div style="position:relative;">
            <img src="${astro.avatar}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
            <div class="${astro.isOnline?'online-dot':'offline-dot'}" style="width:11px; height:11px; border:2px solid #0f0a1e;"></div>
          </div>
          <div style="flex:1;">
            <h4 style="font-size:0.95rem; font-weight:700; color:white;">${astro.fullName}</h4>
            <p style="font-size:0.65rem; color:var(--gold);">${astro.title}</p>
            <p style="font-size:0.6rem; color:#4ade80;">⭐ ${astro.rating} (${astro.reviewsCount} Reviews)</p>
          </div>
          <i class="bi bi-chevron-right" style="color:#a78bfa;"></i>
        </div>

        <!-- Menu Actions List -->
        <div class="menu-group mb-12">
          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-calendar')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-calendar-check-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Consultation Calendar</p><p class="menu-row-sub">Upcoming &amp; daily slots</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-availability')">
            <div class="menu-row-icon icon-green"><i class="bi bi-clock-history"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Working Hours &amp; Slots</p><p class="menu-row-sub">${astro.isOnline?'Currently Online':'Offline'} · Mon-Sat</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-reviews')">
            <div class="menu-row-icon icon-gold"><i class="bi bi-star-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Client Reviews &amp; Ratings</p><p class="menu-row-sub">${astro.rating} ★ (${astro.reviewsCount} Verified)</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-notifications')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-bell-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Expert Notifications</p><p class="menu-row-sub">New requests &amp; alerts</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-payout')">
            <div class="menu-row-icon icon-green"><i class="bi bi-bank2"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Payout &amp; Bank Details</p><p class="menu-row-sub">HDFC Bank · Primary</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-verification')">
            <div class="menu-row-icon icon-teal"><i class="bi bi-shield-check"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Verification &amp; KYC</p><p class="menu-row-sub">100% Verified Partner</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-notification-settings')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-sliders"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Notification Preferences</p><p class="menu-row-sub">Alert sound &amp; reminders</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-support')">
            <div class="menu-row-icon icon-gold"><i class="bi bi-headset"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Astrologer Helpdesk</p><p class="menu-row-sub">24/7 Priority Partner Support</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>

          <div class="menu-row" onclick="ExpertNavigation.navigate('astro-settings')">
            <div class="menu-row-icon" style="background:rgba(107,114,128,0.4);"><i class="bi bi-gear-fill" style="color:white;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Partner Settings</p><p class="menu-row-sub">Account &amp; preferences</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>

        <!-- Logout CTA -->
        <button class="btn-outline w-full mb-8" style="padding:12px; border-radius:12px; border-color:rgba(239,68,68,0.4); color:#f87171; font-weight:700; font-size:0.8rem;" onclick="
          ExpertNavigation.closeMore();
          ConfirmDialog.open({
            title: 'Logout of Partner Portal?',
            message: 'You will be logged out of your astrologer session. Do you wish to continue?',
            confirmText: 'Logout',
            onConfirm: () => App.AuthService.logout()
          });
        ">
          <i class="bi bi-box-arrow-right me-2"></i> Logout Partner Session
        </button>
      </div>
    `;
    BottomSheet.open(html, '✦ Expert Menu ✦');
  },

  closeMore() {
    BottomSheet.close();
  },

  navigate(screenId, params = {}) {
    BottomSheet.close();
    Router.go(screenId, params);
  }
};
