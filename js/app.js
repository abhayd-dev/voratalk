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
      if (STATE.role === 'astrologer') {
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
  },

  /* ── Core Rendering & Lifecycle ───────────────────────────── */
  render(screenId, params = {}) {
    const viewport = document.getElementById('screen-viewport');
    if (!viewport) return;

    STATE.currentScreen = screenId;

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
    document.querySelectorAll('.screen-body').forEach(b => b.scrollTop = 0);

    if (screenId === 'chat') {
      this.initChatSession(params && params.id);
    } else if (screenId === 'audio-call') {
      this.initAudioCallSession(params && params.id);
    } else if (screenId === 'astro-consult-live') {
      this.initAstroLiveSession(params && params.id);
    }
    
    // Auto scroll chat containers
    const msgs = document.getElementById('chat-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  },

  /* ── Role Management ──────────────────────────────────────── */
  switchRole(role) {
    STATE.role = role;
    
    document.querySelectorAll('.demo-pills .demo-pill').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`btn-${role}`);
    if (btn) btn.classList.add('active');

    if (role === 'user') {
      Router.reset('home');
      App.showToast('Switched to User View');
    } else if (role === 'astrologer') {
      Router.reset('astro-dashboard');
      App.showToast('Switched to Expert View');
    }
  },

  /* ── Toast Overlay Creator ────────────────────────────────── */
  showToast(message) {
    let existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    
    const viewport = document.getElementById('screen-viewport');
    if (viewport) {
      viewport.appendChild(toast);
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 2600);
    }
  },

  /* ── Auth Service ─────────────────────────────────────────── */
  AuthService: {
    handlePhoneSubmit() {
      const input = document.getElementById('phone-input');
      const val = input ? input.value.trim().replace(/\D/g, '') : '';
      if (val.length !== 10) {
        App.showToast('Please enter a valid 10-digit mobile number');
        return;
      }
      DATA.currentUser.phone = `+91 ${val.slice(0,5)} ${val.slice(5)}`;
      Storage.saveState();
      Router.go('otp-verify');
    },

    handleOtpInput(input, index) {
      input.value = input.value.replace(/\D/g, '');
      if (input.value.length === 1 && index < 6) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    },

    verifyOtp() {
      let entered = '';
      for (let i = 1; i <= 6; i++) {
        const box = document.getElementById(`otp-${i}`);
        entered += (box ? box.value : '');
      }
      if (entered === '123456' || entered.length === 6) {
        DATA.currentUser.isLoggedIn = true;
        Storage.saveState();
        if (DATA.currentUser.profileCompleted) {
          Router.reset('home');
          App.showToast('Welcome back, ' + DATA.currentUser.name.split(' ')[0] + '!');
        } else {
          Router.go('onboarding-name');
        }
      } else {
        App.showToast('Invalid OTP. Demo OTP is 123456');
      }
    },

    resendOtp() {
      App.showToast('Demo OTP 123456 resent to ' + DATA.currentUser.phone);
    },

    googleLogin() {
      App.showToast('Authenticating with Google...');
      setTimeout(() => {
        DATA.currentUser.isLoggedIn = true;
        Storage.saveState();
        Router.reset('home');
        App.showToast('Welcome to AstroTalkz!');
      }, 700);
    },

    saveOnboardingName() {
      const nameInput = document.getElementById('ob-name');
      if (nameInput && nameInput.value.trim()) {
        DATA.currentUser.name = nameInput.value.trim();
        Storage.saveState();
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
      DATA.currentUser.profileCompleted = true;
      DATA.currentUser.isLoggedIn = true;
      Storage.saveState();
      Router.reset('home');
      App.showToast('Welcome ' + DATA.currentUser.name.split(' ')[0] + '! Profile setup completed.');
    },

    logout() {
      DATA.currentUser.isLoggedIn = false;
      Storage.saveState();
      Router.reset('user-login');
      App.showToast('Signed out successfully');
    }
  },

  /* ── Astrologer & Discovery Service ───────────────────────── */
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
      Storage.saveState();
      App.render(STATE.currentScreen, Router.current() ? Router.current().params : {});
    },

    isFavourite(id) {
      return DATA.favourites.includes(id);
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
      STATE.consultTypeFilter = type;
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
      STATE.selectedAstrologerId = astrologerId || "AST-001";
      STATE.selectedConsultationType = type === 'call' ? 'call' : 'chat';
      STATE.selectedDuration = 15;
      STATE.appliedCoupon = null;
      Router.go('booking-checkout');
    },

    setDuration(mins) {
      STATE.selectedDuration = mins;
      App.render('booking-checkout');
    },

    setDate(d) {
      STATE.selectedDate = d;
      App.render('booking-checkout');
    },

    setTime(t) {
      STATE.selectedTime = t;
      App.render('booking-checkout');
    },

    applyCouponCode(code) {
      const coupon = DATA.offers.find(o => o.code.toUpperCase() === (code || '').toUpperCase().trim());
      if (!coupon) {
        App.showToast('Invalid Coupon Code');
        return;
      }
      STATE.appliedCoupon = coupon;
      App.showToast('Coupon ' + coupon.code + ' applied successfully! 🎉');
      App.render('booking-checkout');
    },

    calculateBookingTotal(astro, type, duration) {
      const rate = type === 'call' ? astro.callRate : astro.chatRate;
      const subtotal = rate * duration;
      let discount = 0;
      if (STATE.appliedCoupon) {
        if (STATE.appliedCoupon.type === 'fixed') {
          discount = STATE.appliedCoupon.discount;
        } else if (STATE.appliedCoupon.type === 'percent') {
          discount = Math.min(Math.round((subtotal * STATE.appliedCoupon.discount) / 100), STATE.appliedCoupon.maxDiscount || 999);
        }
      }
      const total = Math.max(0, subtotal - discount);
      return { rate, subtotal, discount, total };
    },

    executeBooking() {
      const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
      const { total, rate } = this.calculateBookingTotal(astro, STATE.selectedConsultationType, STATE.selectedDuration);
      
      if (DATA.currentUser.walletBalance < total) {
        App.pendingCheckoutReturn = true;
        App.showToast('Insufficient wallet balance (₹' + DATA.currentUser.walletBalance + '). Please recharge.');
        Router.go('wallet-topup');
        return;
      }

      // Deduct wallet
      DATA.currentUser.walletBalance -= total;
      
      // Create transaction
      const txnId = 'TXN-' + Math.floor(1000 + Math.random() * 9000);
      DATA.transactions.unshift({
        id: txnId,
        date: "Today",
        time: new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'}),
        type: STATE.selectedConsultationType,
        title: (STATE.selectedConsultationType === 'call' ? 'Audio Call: ' : 'Chat: ') + astro.name,
        amount: total,
        isCredit: false,
        status: "Success"
      });

      // Create Booking
      const bId = 'BK-' + Math.floor(100000 + Math.random() * 900000);
      const newBooking = {
        id: bId,
        astrologerId: astro.id,
        astrologerName: astro.name,
        astrologerTitle: astro.title,
        astrologerAvatar: astro.avatar,
        type: STATE.selectedConsultationType === 'call' ? 'Audio Call' : 'Chat',
        date: STATE.selectedDate,
        time: STATE.selectedTime,
        duration: STATE.selectedDuration + ' Minutes',
        amount: total,
        ratePerMin: rate,
        topic: STATE.selectedBookingTopic || "Life & Career Guidance",
        userNote: (document.getElementById('booking-notes') ? document.getElementById('booking-notes').value : '') || "Astrological consultation session.",
        status: "upcoming",
        paymentStatus: "Paid",
        bookedOn: "Today"
      };
      DATA.bookings.unshift(newBooking);

      // Add Notification
      DATA.notifications.unshift({
        id: 'NOTIF-' + Date.now(),
        title: 'Booking Confirmed!',
        message: `Your ${newBooking.type} with ${astro.name} is booked for ${STATE.selectedDate} at ${STATE.selectedTime}.`,
        time: 'Just Now',
        read: false,
        type: 'booking'
      });

      Storage.saveState();
      Router.go('booking-success', { bookingId: bId });
    },

    cancelBooking(bookingId) {
      const b = DATA.bookings.find(x => x.id === bookingId);
      if (!b) return;
      b.status = 'cancelled';
      b.refundStatus = 'Refunded to Wallet';
      DATA.currentUser.walletBalance += b.amount;
      
      DATA.transactions.unshift({
        id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
        date: "Today",
        time: "Just Now",
        type: "refund",
        method: "Wallet",
        title: "Refund: Cancelled Session " + b.id,
        amount: b.amount,
        isCredit: true,
        status: "Success"
      });

      Storage.saveState();
      App.showToast(`Booking cancelled. ₹${b.amount} refunded to wallet.`);
      App.render('bookings');
    }
  },

  /* ── Wallet Service ───────────────────────────────────────── */
  WalletService: {
    selectPreset(amt) {
      STATE.selectedTopup = amt;
      const input = document.getElementById('topup-custom-input');
      if (input) input.value = amt;
      document.querySelectorAll('.topup-option').forEach(el => {
        if (el.innerText.includes(amt)) el.classList.add('selected');
        else el.classList.remove('selected');
      });
      const btn = document.getElementById('btn-pay-wallet');
      if (btn) btn.innerText = `Recharge ₹${amt} via UPI`;
    },

    processRecharge() {
      const input = document.getElementById('topup-custom-input');
      const amt = input ? (parseInt(input.value) || STATE.selectedTopup || 500) : 500;
      
      const btn = document.getElementById('btn-pay-wallet');
      if (btn) btn.innerHTML = '<i class="bi bi-arrow-repeat spin me-2"></i> Processing UPI Payment...';
      
      setTimeout(() => {
        DATA.currentUser.walletBalance += amt;
        
        DATA.transactions.unshift({
          id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
          date: "Today",
          time: new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'}),
          type: "topup",
          method: "UPI",
          title: "Wallet Recharge",
          amount: amt,
          isCredit: true,
          status: "Success"
        });

        DATA.notifications.unshift({
          id: 'NOTIF-' + Date.now(),
          title: 'Wallet Recharge Successful',
          message: `₹${amt} has been credited to your VoraTalk balance.`,
          time: 'Just Now',
          read: false,
          type: 'wallet'
        });

        Storage.saveState();
        App.showToast(`₹${amt} added to wallet successfully! 🎉`);
        
        if (App.pendingCheckoutReturn) {
          App.pendingCheckoutReturn = false;
          Router.go('booking-checkout');
        } else {
          Router.go('wallet-topup');
        }
      }, 1000);
    }
  },

  /* ── Consultation Session (Chat & Audio Call) ──────────────── */
  ConsultationService: {
    startChat(astroId) {
      const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
      if (DATA.currentUser.walletBalance < astro.chatRate * 5) {
        App.showToast(`Minimum ₹${astro.chatRate * 5} balance required. Please recharge.`);
        Router.go('wallet-topup');
        return;
      }
      Router.go('chat', { id: astro.id });
    },

    startAudioCall(astroId) {
      const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
      if (DATA.currentUser.walletBalance < astro.callRate * 5) {
        App.showToast(`Minimum ₹${astro.callRate * 5} balance required. Please recharge.`);
        Router.go('wallet-topup');
        return;
      }
      Router.go('audio-call', { id: astro.id });
    }
  },

  /* ── Live Chat Logic ──────────────────────────────────────── */
  initChatSession(astroId) {
    const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
    STATE.selectedAstrologerId = astro.id;
    
    // Ensure chat messages list exists
    if (!DATA.chatMessages[astro.id]) {
      DATA.chatMessages[astro.id] = [
        { id: 1, sender: "astrologer", text: `Namaste Priya ji! I am ${astro.name}. I am reviewing your birth chart. Please share what you would like guidance on today.`, time: "Just Now" }
      ];
    }

    // Live timer countdown
    STATE.chatSecondsRemaining = 900; // 15 mins
    clearInterval(this.chatTimerInterval);
    const timerDisplay = document.getElementById('chat-timer-display');
    const spentDisplay = document.getElementById('chat-spent-display');
    
    let elapsedSec = 0;
    this.chatTimerInterval = setInterval(() => {
      elapsedSec++;
      STATE.chatSecondsRemaining--;
      const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
      const ss = String(elapsedSec % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.innerText = `${mm}:${ss}`;
      
      const spent = Math.ceil(elapsedSec / 60) * astro.chatRate;
      if (spentDisplay) spentDisplay.innerText = `₹${spent}`;
    }, 1000);
  },

  sendChatMessage() {
    const input = document.getElementById('chat-input-field');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    input.value = '';

    const astroId = STATE.selectedAstrologerId || "AST-001";
    const timeStr = new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'});

    if (!DATA.chatMessages[astroId]) DATA.chatMessages[astroId] = [];
    DATA.chatMessages[astroId].push({
      id: Date.now(),
      sender: "user",
      text: text,
      time: timeStr
    });

    const msgsContainer = document.getElementById('chat-messages-container');
    if (msgsContainer) {
      const bubble = document.createElement('div');
      bubble.className = 'chat-msg-user';
      bubble.style = "align-self:flex-end; max-width:80%; background:linear-gradient(135deg,#5b21b6,#7c3aed); color:white; padding:10px 14px; border-radius:14px 14px 2px 14px; font-size:0.8rem; margin-bottom:8px;";
      bubble.innerHTML = `${text} <div style="font-size:0.6rem; color:rgba(255,255,255,0.6); text-align:right; margin-top:2px;">${timeStr} ✓✓</div>`;
      msgsContainer.appendChild(bubble);
      msgsContainer.scrollTop = msgsContainer.scrollHeight;
    }

    // Simulated astrologer response
    setTimeout(() => {
      let replyText = "I have noted your query. Based on your Gemini Lagna and Mars placement, your current period is transitioning into a fruitful phase. Let's do a simple Surya Arghya remedy daily.";
      const low = text.toLowerCase();
      if (low.includes('career') || low.includes('job') || low.includes('promotion')) {
        replyText = "Your 10th house of career shows Jupiter's beneficial aspect. The months between October and December 2026 bring a stellar promotion opportunity. Maintain focus.";
      } else if (low.includes('love') || low.includes('marriage') || low.includes('relationship')) {
        replyText = "Venus is in your 10th house moving into 11th. Relationship harmony is deeply favored. Any misunderstandings will dissolve in the coming 3 weeks.";
      } else if (low.includes('finance') || low.includes('money')) {
        replyText = "Your 2nd house has Rahu in Gemini, indicating rapid wealth gains with careful expense control. Wearing an Emerald on Wednesday will enhance stability.";
      }

      DATA.chatMessages[astroId].push({
        id: Date.now() + 1,
        sender: "astrologer",
        text: replyText,
        time: new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})
      });
      Storage.saveState();

      if (msgsContainer) {
        const astroBubble = document.createElement('div');
        astroBubble.className = 'chat-msg-astro';
        astroBubble.style = "align-self:flex-start; max-width:80%; background:#160d33; border:1px solid rgba(139,92,246,0.3); color:white; padding:10px 14px; border-radius:14px 14px 14px 2px; font-size:0.8rem; margin-bottom:8px;";
        astroBubble.innerHTML = `${replyText} <div style="font-size:0.6rem; color:#9ca3af; margin-top:2px;">${new Date().toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})}</div>`;
        msgsContainer.appendChild(astroBubble);
        msgsContainer.scrollTop = msgsContainer.scrollHeight;
      }
    }, 1200);
  },

  sendQuickChat(text) {
    const input = document.getElementById('chat-input-field');
    if (input) {
      input.value = text;
      this.sendChatMessage();
    }
  },

  endChatConsultation() {
    clearInterval(this.chatTimerInterval);
    const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
    const spent = astro.chatRate * 5;
    DATA.currentUser.walletBalance = Math.max(0, DATA.currentUser.walletBalance - spent);
    
    DATA.transactions.unshift({
      id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
      date: "Today",
      time: "Just Now",
      type: "chat",
      title: "Live Chat: " + astro.name,
      amount: spent,
      isCredit: false,
      status: "Success"
    });

    Storage.saveState();
    App.showToast(`Chat ended. ₹${spent} deducted from wallet.`);
    Router.go('consult-summary', { astroId: astro.id, type: 'Chat', amount: spent });
  },

  /* ── Live Audio Call Logic ────────────────────────────────── */
  initAudioCallSession(astroId) {
    const astro = DATA.astrologers.find(a => a.id === astroId) || DATA.astrologers[0];
    STATE.selectedAstrologerId = astro.id;
    STATE.isMuted = false;
    STATE.isSpeaker = false;
    
    let sec = 0;
    clearInterval(this.callTimerInterval);
    const timerDisplay = document.getElementById('audio-timer-display');
    const spentDisplay = document.getElementById('audio-spent-display');

    this.callTimerInterval = setInterval(() => {
      sec++;
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      if (timerDisplay) timerDisplay.innerText = `${mm}:${ss}`;
      
      const spent = Math.ceil(sec / 60) * astro.callRate;
      if (spentDisplay) spentDisplay.innerText = `₹${spent} (₹${astro.callRate}/min)`;
    }, 1000);
  },

  toggleMute() {
    STATE.isMuted = !STATE.isMuted;
    const btn = document.getElementById('btn-mute-toggle');
    if (btn) {
      btn.style.background = STATE.isMuted ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)';
      btn.style.color = STATE.isMuted ? '#f87171' : 'white';
    }
    App.showToast(STATE.isMuted ? 'Microphone Muted 🔇' : 'Microphone Unmuted 🎙️');
  },

  toggleSpeaker() {
    STATE.isSpeaker = !STATE.isSpeaker;
    const btn = document.getElementById('btn-speaker-toggle');
    if (btn) {
      btn.style.background = STATE.isSpeaker ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)';
      btn.style.color = STATE.isSpeaker ? '#4ade80' : 'white';
    }
    App.showToast(STATE.isSpeaker ? 'Speakerphone Active 🔊' : 'Earphone Mode 🔈');
  },

  endAudioCallConsultation() {
    clearInterval(this.callTimerInterval);
    const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
    const spent = astro.callRate * 5;
    DATA.currentUser.walletBalance = Math.max(0, DATA.currentUser.walletBalance - spent);

    DATA.transactions.unshift({
      id: 'TXN-' + Math.floor(1000 + Math.random() * 9000),
      date: "Today",
      time: "Just Now",
      type: "call",
      title: "Audio Call: " + astro.name,
      amount: spent,
      isCredit: false,
      status: "Success"
    });

    Storage.saveState();
    App.showToast(`Call ended. ₹${spent} deducted from wallet.`);
    Router.go('consult-summary', { astroId: astro.id, type: 'Audio Call', amount: spent });
  },

  /* ── Notifications ────────────────────────────────────────── */
  markAllNotificationsRead() {
    DATA.notifications.forEach(n => n.read = true);
    Storage.saveState();
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
      Storage.saveState();
      App.showToast(`You are now ${DATA.currentAstrologer.isOnline ? 'ONLINE to users ✓' : 'OFFLINE'}`);
      App.render('astro-dashboard');
    },

    acceptRequest(reqId) {
      const req = DATA.astroConsultations.find(r => r.id === reqId) || DATA.astroConsultations[0];
      req.status = 'active';
      Storage.saveState();
      Router.go('astro-consult-live', { id: req.id });
    },

    declineRequest(reqId) {
      const idx = DATA.astroConsultations.findIndex(r => r.id === reqId);
      if (idx > -1) {
        DATA.astroConsultations.splice(idx, 1);
        Storage.saveState();
        App.showToast('Request dismissed');
        App.render('astro-dashboard');
      }
    },

    endLiveSession(reqId) {
      const req = DATA.astroConsultations.find(r => r.id === reqId) || DATA.astroConsultations[0];
      req.status = 'completed';
      DATA.currentAstrologer.todayStats.earnings += req.amount;
      Storage.saveState();
      App.showToast(`Consultation completed! +₹${req.amount} added to earnings.`);
      Router.go('astro-dashboard');
    }
  },

  /* ── Reset Demo ───────────────────────────────────────────── */
  resetDemoData() {
    Storage.resetDemo();
    App.showToast('Demo data successfully reset to initial state!');
    Router.reset('home');
  }
};
