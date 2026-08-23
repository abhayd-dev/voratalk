/* ============================================================
   AstroTalkz — Screen Templates (Pixel-Perfect Reference Match)
   ============================================================ */

const Screens = {

  /* ── SPLASH ─────────────────────────────────────────────── */
  splash: () => `
    <div class="screen cosmic-bg flex-center" style="flex-direction:column; background: radial-gradient(ellipse at 50% 20%, #2a0d5e 0%, #0f0630 50%, #080313 100%);">
      <div class="animate-fadeIn" style="display:flex; flex-direction:column; align-items:center; gap:12px;">
        <!-- Sun-Moon Logo SVG -->
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(234,179,8,0.15)" stroke-width="1"/>
          <!-- Sun rays -->
          <circle cx="50" cy="50" r="22" fill="#eab308" opacity="0.9"/>
          <g stroke="#eab308" stroke-width="2.5" stroke-linecap="round">
            <line x1="50" y1="4" x2="50" y2="14"/>
            <line x1="50" y1="86" x2="50" y2="96"/>
            <line x1="4" y1="50" x2="14" y2="50"/>
            <line x1="86" y1="50" x2="96" y2="50"/>
            <line x1="17" y1="17" x2="24" y2="24"/>
            <line x1="76" y1="76" x2="83" y2="83"/>
            <line x1="83" y1="17" x2="76" y2="24"/>
            <line x1="17" y1="83" x2="24" y2="76"/>
          </g>
          <!-- Moon overlay -->
          <path d="M58 35 Q72 50 58 65 Q45 52 50 50 Q45 48 58 35Z" fill="#0f0630"/>
          <circle cx="54" cy="50" r="14" fill="#1a0a40"/>
          <!-- Face -->
          <circle cx="58" cy="44" r="2" fill="#eab308" opacity="0.7"/>
          <path d="M54 52 Q58 56 62 52" stroke="#eab308" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>
        </svg>

        <h1 style="font-family:'Playfair Display',serif; font-size:2.2rem; font-weight:700; color:white; letter-spacing:-0.02em; margin-top:8px;">
          Astro<span style="color:#eab308;">Talkz</span>
        </h1>
        <p style="font-size:0.75rem; color:#a78bfa; letter-spacing:0.1em; margin-top:-8px;">by vorabion</p>
        <div style="width:60px; height:1px; background:linear-gradient(90deg, transparent, #eab308, transparent); margin:4px 0;"></div>
        <p style="font-size:0.8rem; color:#9ca3af; text-align:center; max-width:200px; line-height:1.5;">Your trusted guide to astrology &amp; a better tomorrow</p>
      </div>
      <div style="position:absolute; bottom:50px; width:100%; padding:0 24px;">
        <button class="btn-primary w-full" onclick="Router.go('user-login')" style="font-size:1rem;">
          Get Started <i class="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  `,

  /* ── USER LOGIN ──────────────────────────────────────────── */
  'user-login': () => `
    <div class="screen" style="background: radial-gradient(ellipse at 50% 10%, #2a0d5e 0%, #150630 45%, #080313 100%); display:flex; flex-direction:column; overflow-y:auto; overflow-x:hidden; -webkit-overflow-scrolling:touch; scrollbar-width:none;">
      <!-- Hero Section -->
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:28px 20px 16px; text-align:center; flex-shrink:0;">
        <!-- Sun-Moon Logo -->
        <div style="margin-bottom:16px;">
          <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(234,179,8,0.2)" stroke-width="1"/>
            <g stroke="#eab308" stroke-width="2.5" stroke-linecap="round">
              <line x1="50" y1="6" x2="50" y2="16"/>
              <line x1="50" y1="84" x2="50" y2="94"/>
              <line x1="6" y1="50" x2="16" y2="50"/>
              <line x1="84" y1="50" x2="94" y2="50"/>
              <line x1="18" y1="18" x2="25" y2="25"/>
              <line x1="75" y1="75" x2="82" y2="82"/>
              <line x1="82" y1="18" x2="75" y2="25"/>
              <line x1="18" y1="82" x2="25" y2="75"/>
            </g>
            <circle cx="50" cy="50" r="20" fill="#d97706"/>
            <circle cx="50" cy="50" r="16" fill="#eab308"/>
            <!-- Face on sun -->
            <circle cx="46" cy="47" r="2" fill="#92400e"/>
            <circle cx="54" cy="47" r="2" fill="#92400e"/>
            <path d="M44 54 Q50 58 56 54" stroke="#92400e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <!-- Moon crescent overlay -->
            <path d="M62 34 Q76 50 62 66 Q48 52 54 50 Q48 48 62 34Z" fill="#150630"/>
            <circle cx="58" cy="50" r="14" fill="#1a0a40"/>
          </svg>
        </div>

        <h1 style="font-family:'Playfair Display',serif; font-size:2.2rem; font-weight:700; color:white; letter-spacing:-0.02em; line-height:1.1;">
          Astro<span style="color:#eab308;">Talkz</span>
        </h1>
        <p style="font-size:0.78rem; color:#eab308; letter-spacing:0.08em; margin-top:4px;">by vorabion</p>

        <div style="display:flex; align-items:center; gap:10px; margin:10px 0 8px;">
          <div style="width:30px; height:1px; background:#eab308; opacity:0.5;"></div>
          <span style="color:#eab308; font-size:0.9rem;">✦</span>
          <div style="width:30px; height:1px; background:#eab308; opacity:0.5;"></div>
        </div>

        <h2 style="font-size:1.05rem; font-weight:700; color:white; margin-bottom:5px;">Welcome to AstroTalkz</h2>
        <p style="font-size:0.72rem; color:#9ca3af; line-height:1.5; max-width:220px;">Your trusted guide to astrology, insights and a better tomorrow.</p>
      </div>

      <!-- Login Card (white) -->
      <div class="login-card" style="flex-shrink:0; margin-bottom:0; border-bottom-left-radius:0; border-bottom-right-radius:0; padding-bottom:28px;">
        <!-- Mobile Login header -->
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
          <div style="width:40px; height:40px; border-radius:50%; background:rgba(108,43,217,0.1); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-phone" style="color:#7c3aed; font-size:1.1rem;"></i>
          </div>
          <div>
            <p style="font-size:0.9rem; font-weight:700; color:#111827;">Login / Sign Up</p>
            <p style="font-size:0.72rem; color:#6b7280;">Enter your mobile number to continue</p>
          </div>
        </div>

        <!-- Phone Input -->
        <div class="phone-input-group">
          <div class="phone-country">
            <span>🇮🇳</span>
            <span>+91</span>
            <i class="bi bi-chevron-down" style="font-size:0.65rem; color:#6b7280;"></i>
          </div>
          <input class="phone-number-input" type="tel" id="phone-input" placeholder="Enter mobile number" maxlength="10">
        </div>

        <!-- Continue button -->
        <button class="btn-primary w-full" style="border-radius:12px; margin-bottom:14px;" onclick="Router.go('otp-verify')">
          Continue with Mobile <i class="bi bi-arrow-right ms-2"></i>
        </button>

        <div style="text-align:center; margin-bottom:14px;">
          <span style="font-size:0.72rem; color:#9ca3af;">or continue with</span>
        </div>

        <!-- Google Button -->
        <button class="btn-google w-full" style="margin-bottom:16px;" onclick="App.showToast('Authenticating...'); setTimeout(() => Router.go('home'), 800)">
          <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
          Continue with Google
        </button>

        <!-- Features Row -->
        <div class="feature-icons-row">
          <div class="feature-icon-item">
            <div class="feature-icon-bubble"><i class="bi bi-shield-check"></i></div>
            <p style="font-size:0.65rem; font-weight:600; color:#111827;">Secure &amp; Safe</p>
            <p style="font-size:0.6rem; color:#6b7280;">100% Secure Login</p>
          </div>
          <div class="feature-icon-item">
            <div class="feature-icon-bubble" style="background:rgba(234,179,8,0.1);"><i class="bi bi-lightning-charge" style="color:#d97706;"></i></div>
            <p style="font-size:0.65rem; font-weight:600; color:#111827;">Quick &amp; Easy</p>
            <p style="font-size:0.6rem; color:#6b7280;">Login in seconds</p>
          </div>
          <div class="feature-icon-item">
            <div class="feature-icon-bubble" style="background:rgba(59,130,246,0.1);"><i class="bi bi-person-check" style="color:#3b82f6;"></i></div>
            <p style="font-size:0.65rem; font-weight:600; color:#111827;">Personalized</p>
            <p style="font-size:0.6rem; color:#6b7280;">For you, always</p>
          </div>
        </div>

        <!-- Terms -->
        <p style="text-align:center; font-size:0.62rem; color:#6b7280; margin-top:14px; line-height:1.5;">
          By continuing, you agree to our<br>
          <a href="#" style="color:#7c3aed;" onclick="Router.go('legal-doc')">Terms of Use</a>
          &nbsp;&amp;&nbsp;
          <a href="#" style="color:#7c3aed;" onclick="Router.go('legal-doc')">Privacy Policy</a>
        </p>

        <!-- Astrologer link -->
        <p style="text-align:center; margin-top:12px; font-size:0.75rem; color:#6b7280;">
          Are you an astrologer? <a href="#" style="color:#7c3aed; font-weight:700;" onclick="App.switchRole('astrologer')">Astrologer Login</a>
        </p>
      </div>
    </div>
  `,

  /* ── OTP VERIFY ──────────────────────────────────────────── */
  'otp-verify': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div class="header-title">Verify OTP</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <p style="color:#9ca3af; font-size:0.85rem; margin-bottom:24px;">Enter the 6-digit OTP sent to <strong style="color:white;">+91 98765 43210</strong></p>
        <div style="display:flex; gap:10px; justify-content:center; margin-bottom:24px;">
          ${[1,2,3,4,5,6].map(i => `<input type="text" maxlength="1" class="input-field" style="width:44px; height:52px; text-align:center; font-size:1.2rem; font-weight:700; padding:0;" id="otp-${i}">`).join('')}
        </div>
        <button class="btn-primary w-full" onclick="Router.go('onboarding-name')">Verify &amp; Continue</button>
        <p style="text-align:center; margin-top:16px; font-size:0.8rem; color:#9ca3af;">
          Didn't receive OTP? <a href="#" style="color:#a78bfa;" onclick="App.showToast('OTP resent!')">Resend</a>
        </p>
      </div>
    </div>
  `,

  /* ── ONBOARDING NAME ─────────────────────────────────────── */
  'onboarding-name': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.8rem; color:#9ca3af;">Step 1 of 3</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <h2 style="font-size:1.5rem; font-weight:700; color:white; margin-bottom:6px;">What's your name?</h2>
        <p style="color:#9ca3af; font-size:0.82rem; margin-bottom:24px;">Let the stars know you</p>
        <input type="text" class="input-field" id="ob-name" placeholder="E.g., Priya Sharma" value="Priya Sharma">
        <div style="height:16px;"></div>
        <button class="btn-primary w-full" onclick="Router.go('onboarding-dob')">Continue <i class="bi bi-arrow-right ms-2"></i></button>
      </div>
    </div>
  `,

  /* ── ONBOARDING DOB ──────────────────────────────────────── */
  'onboarding-dob': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.8rem; color:#9ca3af;">Step 2 of 3</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <h2 style="font-size:1.5rem; font-weight:700; color:white; margin-bottom:6px;">Your birth details</h2>
        <p style="color:#9ca3af; font-size:0.82rem; margin-bottom:24px;">Used for accurate astrological readings</p>
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div>
            <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Date of Birth</p>
            <input type="date" class="input-field" id="ob-dob" value="1995-05-24">
          </div>
          <div>
            <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Time of Birth</p>
            <input type="time" class="input-field" id="ob-time" value="10:30">
          </div>
          <div>
            <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Place of Birth</p>
            <input type="text" class="input-field" id="ob-place" placeholder="City, State" value="Jaipur, Rajasthan">
          </div>
          <div>
            <p style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Gender</p>
            <div style="display:flex; gap:10px;">
              ${['Female','Male','Other'].map((g,i) => `<button onclick="App.selectGender(this)" class="filter-tab ${i===0?'active':''}" style="flex:1; justify-content:center;">${g}</button>`).join('')}
            </div>
          </div>
        </div>
        <button class="btn-primary w-full" style="margin-top:24px;" onclick="Router.go('home')">Complete Setup <i class="bi bi-stars ms-2"></i></button>
      </div>
    </div>
  `,

  /* ── HOME ────────────────────────────────────────────────── */
  home: () => `
    <div class="screen" style="display:flex; flex-direction:column; background:#08031a; overflow:hidden;">
      <!-- Hero Background Area -->
      <div class="home-hero-bg" style="flex-shrink:0; position:relative; height:280px; overflow:hidden;">
        <!-- Cosmic zodiac wheel SVG background -->
        <div style="position:absolute; right:-30px; top:-30px; width:280px; height:280px; opacity:0.35;">
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="140" r="135" stroke="#eab308" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6"/>
            <circle cx="140" cy="140" r="105" stroke="#7c3aed" stroke-width="0.8" opacity="0.4"/>
            <circle cx="140" cy="140" r="75" stroke="#eab308" stroke-width="0.8" opacity="0.3"/>
            <circle cx="140" cy="140" r="40" fill="rgba(234,179,8,0.2)"/>
            <circle cx="140" cy="140" r="28" fill="rgba(234,179,8,0.4)"/>
            <!-- Zodiac symbols around the wheel -->
            <text x="138" y="20" fill="#eab308" font-size="12" opacity="0.8">♈</text>
            <text x="213" y="48" fill="#eab308" font-size="12" opacity="0.8">♉</text>
            <text x="248" y="135" fill="#eab308" font-size="12" opacity="0.8">♊</text>
            <text x="215" y="220" fill="#eab308" font-size="12" opacity="0.8">♋</text>
            <text x="136" y="258" fill="#eab308" font-size="12" opacity="0.8">♌</text>
            <text x="52" y="220" fill="#eab308" font-size="12" opacity="0.8">♍</text>
            <text x="18" y="135" fill="#eab308" font-size="12" opacity="0.8">♎</text>
            <text x="48" y="50" fill="#eab308" font-size="12" opacity="0.8">♏</text>
            <!-- Saturn ring planet -->
            <ellipse cx="200" cy="60" rx="18" ry="7" stroke="#a78bfa" stroke-width="1" fill="none" transform="rotate(-20 200 60)"/>
            <circle cx="200" cy="60" r="8" fill="#7c3aed" opacity="0.8"/>
          </svg>
        </div>
        <!-- Purple glow -->
        <div style="position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:200px; height:100px; background:radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%);"></div>

        <!-- Header -->
        <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 16px; position:relative; z-index:10;">
          <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list" style="font-size:1.3rem;"></i></button>
          <div style="text-align:center;">
            <p style="font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:700; color:white; letter-spacing:0.02em;">AstroTalkz</p>
            <p style="font-size:0.62rem; color:#eab308; letter-spacing:0.06em;">✦ by vorabion ✦</p>
          </div>
          <div style="position:relative;">
            <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
            <span class="badge-dot" style="top:4px; right:4px;"></span>
          </div>
        </div>

        <!-- Greeting + Headline -->
        <div style="padding:8px 20px; position:relative; z-index:10;">
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.85);">Hello, ${DATA.currentUser.name.split(' ')[0]} ✦</p>
          <h2 style="font-size:1.75rem; font-weight:700; color:white; line-height:1.15; margin-top:4px;">
            Find Guidance,<br><span style="color:#eab308;">Find Clarity</span>
          </h2>
          <div style="display:flex; align-items:center; gap:8px; margin:8px 0;">
            <div style="width:24px; height:1px; background:#eab308; opacity:0.7;"></div>
            <span style="color:#eab308; font-size:0.7rem;">✦</span>
            <div style="width:24px; height:1px; background:#eab308; opacity:0.7;"></div>
          </div>
          <p style="font-size:0.72rem; color:#9ca3af; max-width:200px; line-height:1.5;">Connect with verified astrologers and get answers to life's important questions.</p>
        </div>
      </div>

      <!-- Bottom Sheet -->
      <div class="bottom-sheet">
        <div class="sheet-handle"></div>

        <!-- Profile + Wallet Row -->
        <div class="profile-pill" onclick="Router.go('profile')" style="cursor:pointer;">
          <div class="flex-start gap-12">
            <div style="width:44px; height:44px; border-radius:50%; background:rgba(108,43,217,0.2); border:2px solid rgba(139,92,246,0.4); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-stars" style="color:#eab308; font-size:1.1rem;"></i>
            </div>
            <div>
              <p style="font-size:0.88rem; font-weight:700; color:white;">${DATA.currentUser.name}</p>
              <p style="font-size:0.68rem; color:#9ca3af; margin-top:2px;">View your profile &gt;</p>
            </div>
          </div>
          <div class="wallet-pill" onclick="event.stopPropagation(); Router.go('wallet-topup')">
            <i class="bi bi-wallet2" style="color:#eab308;"></i>
            <span>₹ ${DATA.currentUser.walletBalance}.00</span>
            <div style="width:20px; height:20px; border-radius:50%; background:rgba(234,179,8,0.2); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-plus" style="color:#eab308; font-size:0.75rem;"></i>
            </div>
          </div>
        </div>

        <!-- Scrollable content -->
        <div style="flex:1; overflow-y:auto; padding-bottom:12px;" class="screen-body">
          <!-- DISCOVER Section -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">Discover</p>
          <div class="menu-group" style="margin-bottom:16px;">
            <div class="menu-row" onclick="Router.go('consult')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-chat-text-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Consult Astrologers</p>
                <p class="menu-row-sub">Chat or Voice Call</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('horoscope')">
              <div class="menu-row-icon icon-blue"><i class="bi bi-compass-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Daily Horoscope</p>
                <p class="menu-row-sub">Check your daily predictions</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('kundali')">
              <div class="menu-row-icon icon-teal"><i class="bi bi-grid-3x3-gap-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Kundli</p>
                <p class="menu-row-sub">View your birth chart</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('matchmaking')">
              <div class="menu-row-icon icon-pink"><i class="bi bi-heart-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Match Making</p>
                <p class="menu-row-sub">Find your perfect match</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('pooja-remedies')">
              <div class="menu-row-icon icon-gold"><i class="bi bi-lamp-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Pooja &amp; Remedies</p>
                <p class="menu-row-sub">Book puja and get remedies</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
          </div>

          <!-- ACCOUNT Section -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">Account</p>
          <div class="menu-group">
            <div class="menu-row" onclick="Router.go('bookings')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-calendar2-check-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">My Bookings</p>
                <p class="menu-row-sub">View your past and upcoming sessions</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('wallet-topup')">
              <div class="menu-row-icon icon-green"><i class="bi bi-wallet-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Wallet &amp; Transactions</p>
                <p class="menu-row-sub">Manage payments and history</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('settings')">
              <div class="menu-row-icon" style="background:rgba(107,114,128,0.4);"><i class="bi bi-gear-fill" style="color:white;"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Settings</p>
                <p class="menu-row-sub">Account, privacy and help</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── CONSULT ─────────────────────────────────────────────── */
  consult: () => {
    const astros = DATA.astrologers;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header -->
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div class="flex-center flex-col gap-2">
          <div style="display:flex; align-items:center; gap:6px;">
            <i class="bi bi-stars" style="color:var(--gold);"></i>
            <span style="font-size:1.1rem; font-weight:700; color:white;">Consult Astrologer</span>
          </div>
          <p style="font-size:0.65rem; color:#9ca3af;">Connect with verified astrologers</p>
        </div>
        <div style="position:relative;">
          <button class="header-btn"><i class="bi bi-bell"></i></button>
          <span class="badge-dot"></span>
        </div>
      </div>

      <div class="screen-body pb-nav">
        <!-- Search Bar -->
        <div style="padding:0 16px 12px; display:flex; gap:10px;">
          <div style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.08); border-radius:12px; display:flex; align-items:center; padding:10px 14px; gap:10px;">
            <i class="bi bi-search" style="color:#6b7280; font-size:0.9rem;"></i>
            <input type="text" placeholder="Search astrologers, expertise or topics..." style="background:none; border:none; outline:none; color:white; font-size:0.8rem; flex:1; font-family:inherit;" placeholder="Search astrologers, expertise or topics...">
          </div>
          <button style="width:44px; height:44px; border-radius:12px; background:linear-gradient(135deg,#5b21b6,#7c3aed); display:flex; align-items:center; justify-content:center; color:white; font-size:1rem; flex-shrink:0;">
            <i class="bi bi-funnel-fill"></i>
          </button>
        </div>

        <!-- Removed Hero Banner to match reference design -->

        <!-- Categories -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:10px;">
          <p style="font-size:0.88rem; font-weight:700; color:white;">Categories</p>
          <button style="font-size:0.72rem; color:#a78bfa; background:none; border:none; cursor:pointer;">View All &gt;</button>
        </div>
        <div class="category-scroll" style="margin-bottom:16px;">
          ${[
            {icon:'bi bi-star-fill', label:'All', active:true},
            {icon:'bi bi-heart-fill', label:'Love & Relationship'},
            {icon:'bi bi-briefcase-fill', label:'Career'},
            {icon:'bi bi-coin', label:'Finance'},
            {icon:'bi bi-ring', label:'Marriage'},
            {icon:'bi bi-flower1', label:'Health'},
          ].map(c => `
            <div class="cat-chip ${c.active?'active':''}">
              <div class="cat-chip-icon"><i class="${c.icon}"></i></div>
              <span class="cat-chip-label">${c.label}</span>
            </div>
          `).join('')}
        </div>

        <!-- Top Astrologers -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:12px;">
          <p style="font-size:0.88rem; font-weight:700; color:white;">Top Astrologers</p>
          <button style="font-size:0.72rem; color:#a78bfa; background:none; border:none; cursor:pointer;">View All &gt;</button>
        </div>

        ${astros.map(a => `
          <div class="astro-card" onclick="Router.go('astrologer-profile', {id:'${a.id}'})">
            <div class="astro-avatar-wrap">
              <img src="${a.avatar}" class="astro-avatar" alt="${a.name}">
              <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}"></div>
            </div>
            <div class="astro-card-info">
              <div class="astro-name">
                ${a.name}
                <i class="bi bi-patch-check-fill verified" style="color:#a78bfa; font-size:0.8rem;"></i>
              </div>
              <div class="astro-rating">
                <i class="bi bi-star-fill" style="color:#eab308; font-size:0.7rem;"></i>
                ${a.rating} (${a.reviews} Reviews) &nbsp;|&nbsp;
                <i class="bi bi-shield-check"></i> ${a.experience}
              </div>
              <div class="astro-specialty">${a.expertise.slice(0,2).join(' · ')}</div>
              <div class="astro-tags">
                ${a.expertise.slice(0,3).map(e => `<span class="astro-tag">${e}</span>`).join('')}
                ${a.expertise.length > 3 ? `<span class="astro-tag">+${a.expertise.length-3}</span>` : ''}
              </div>
              <div class="astro-lang"><i class="bi bi-globe"></i> ${a.languages.join(', ')}</div>
            </div>
            <div class="astro-card-right">
              <span class="astro-status-badge ${a.isOnline ? 'astro-status-available' : 'astro-status-offline'}">
                ${a.isOnline ? '● Available Now' : 'Offline'}
              </span>
              <div class="astro-prices">
                <span><i class="bi bi-chat" style="color:#a78bfa;"></i> <span class="astro-price-val">₹ ${a.chatRate}</span> /min</span>
                <span><i class="bi bi-telephone" style="color:#4ade80;"></i> <span class="astro-price-val">₹ ${a.callRate}</span> /min</span>
                
              </div>
              ${a.isOnline
                ? `<button class="btn-consult-now" onclick="event.stopPropagation(); Router.go('astrologer-profile', {id:'${a.id}'})">Consult Now</button>`
                : `<button class="btn-view-profile" onclick="event.stopPropagation(); Router.go('astrologer-profile', {id:'${a.id}'})">View Profile</button>`
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    `;
  },

  /* ── ASTROLOGER PROFILE ──────────────────────────────────── */
  'astro-profile': (params) => {
    const a = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header -->
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308; font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem; font-weight:700; color:white;">Astrologer Profile</span>
          <span style="color:#eab308; font-size:0.8rem;">✦——</span>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="header-btn" onclick="App.showToast('Copied to clipboard ✓')"><i class="bi bi-box-arrow-up"></i></button>
          <button class="header-btn" onclick="App.showToast('Added to your favorites ❤️')"><i class="bi bi-heart"></i></button>
        </div>
      </div>

      <div class="screen-body" style="padding-bottom:90px;">
        <!-- Profile Hero -->
        <div style="padding:16px; display:flex; gap:16px; align-items:flex-start; position:relative;">
          <div style="position:absolute; right:0; top:0; width:180px; height:180px; opacity:0.2;">
            <svg viewBox="0 0 180 180" fill="none">
              <circle cx="90" cy="90" r="85" stroke="#eab308" stroke-width="0.8" stroke-dasharray="3 3"/>
              <circle cx="90" cy="90" r="60" stroke="#7c3aed" stroke-width="0.8"/>
              <circle cx="90" cy="90" r="35" fill="rgba(234,179,8,0.3)"/>
              <!-- Temple silhouette -->
              <rect x="70" y="100" width="40" height="50" fill="rgba(139,92,246,0.4)" rx="2"/>
              <polygon points="90,70 70,100 110,100" fill="rgba(139,92,246,0.4)"/>
            </svg>
          </div>
          <div class="astro-avatar-wrap">
            <img src="${a.avatar}" style="width:90px; height:90px; border-radius:50%; object-fit:cover; border:3px solid rgba(139,92,246,0.5);">
            <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}" style="width:14px; height:14px; border-width:3px;"></div>
          </div>
          <div style="flex:1;">
            <div style="background:${a.isOnline ? 'rgba(34,197,94,0.15)' : 'rgba(107,114,128,0.15)'}; border:1px solid ${a.isOnline ? 'rgba(34,197,94,0.3)' : 'rgba(107,114,128,0.3)'}; color:${a.isOnline ? '#4ade80' : '#9ca3af'}; font-size:0.65rem; font-weight:600; padding:3px 10px; border-radius:6px; display:inline-block; margin-bottom:6px;">
              ${a.isOnline ? '● Available Now' : 'Offline'}
            </div>
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
              <h2 style="font-size:1rem; font-weight:700; color:white;">${a.name}</h2>
              <i class="bi bi-patch-check-fill" style="color:#a78bfa; font-size:0.85rem;"></i>
            </div>
            <div style="font-size:0.68rem; color:#9ca3af; margin-bottom:4px;">
              <i class="bi bi-star-fill" style="color:#eab308;"></i>
              ${a.rating} (${a.reviews} Reviews) &nbsp;|&nbsp; <i class="bi bi-shield-check"></i> Verified
            </div>
            <div style="font-size:0.72rem; color:#eab308; margin-bottom:6px;">${a.expertise.slice(0,2).join(' · ')}</div>
            <div style="font-size:0.68rem; color:#9ca3af; margin-bottom:3px;"><i class="bi bi-briefcase me-1"></i>${a.experience} Experience</div>
            <div style="font-size:0.68rem; color:#9ca3af;"><i class="bi bi-globe me-1"></i>${a.languages.join(', ')}</div>
          </div>
        </div>

        <!-- Stats Row -->
        <div style="display:grid; grid-template-columns:repeat(4,1fr); margin:0 16px 16px; background:#0f0a1e; border:1px solid rgba(255,255,255,0.06); border-radius:14px; overflow:hidden;">
          ${[
            {icon:'bi bi-people', val:a.totalConsultations, label:'Consultations', color:'#a78bfa'},
            {icon:'bi bi-star', val:a.rating, label:'Rating', color:'#eab308'},
            {icon:'bi bi-chat-square-text', val:a.reviews, label:'Reviews', color:'#a78bfa'},
            {icon:'bi bi-clock', val:a.experience.replace(/[^0-9+]/g,''), label:'Yrs Exp.', color:'#a78bfa'},
          ].map(s => `
            <div style="padding:12px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
              <i class="${s.icon}" style="color:${s.color}; font-size:1rem; display:block; margin-bottom:4px;"></i>
              <p style="font-size:0.95rem; font-weight:700; color:white;">${s.val}</p>
              <p style="font-size:0.58rem; color:#9ca3af;">${s.label}</p>
            </div>
          `).join('')}
        </div>

        <!-- About -->
        <div style="margin:0 16px 16px;" class="card">
          <p style="font-size:0.85rem; font-weight:700; color:white; margin-bottom:8px;">About Astrologer</p>
          <p style="font-size:0.75rem; color:#9ca3af; line-height:1.6;">${a.name} is a trusted name in Vedic Astrology and Numerology with ${a.experience} of experience. He specializes in Love, Career, Finance, Marriage and Health related solutions.</p>
          <button style="color:#a78bfa; font-size:0.72rem; margin-top:8px; display:flex; align-items:center; gap:4px; background:none; border:none; cursor:pointer;">
            Read More <i class="bi bi-chevron-down" style="font-size:0.65rem;"></i>
          </button>
        </div>

        <!-- Expertise Tags -->
        <div style="margin:0 16px 16px;">
          <p style="font-size:0.85rem; font-weight:700; color:white; margin-bottom:10px;">Areas of Expertise</p>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${a.expertise.map(e => `
              <span style="background:rgba(10,6,24,0.8); border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:7px 12px; font-size:0.7rem; color:white; display:flex; align-items:center; gap:6px;">
                <i class="bi bi-heart" style="color:#a78bfa; font-size:0.7rem;"></i> ${e}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Consultation Services -->
        <div style="margin:0 16px 16px;">
          <p style="font-size:0.85rem; font-weight:700; color:white; margin-bottom:10px;">Consultation Services</p>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;">
            <div class="card" style="text-align:center; padding:14px 10px; border-top:3px solid rgba(139,92,246,0.6);">
              <i class="bi bi-chat-fill" style="color:#a78bfa; font-size:1.2rem; margin-bottom:6px; display:block;"></i>
              <p style="font-size:0.75rem; font-weight:600; color:white;">Chat</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:4px 0 10px; line-height:1.4;">Get answers to your questions</p>
              <p style="font-size:0.9rem; font-weight:700; color:#4ade80;">₹ ${a.chatRate} <span style="font-size:0.6rem; color:#9ca3af;">/min</span></p>
            </div>
            <div class="card" style="text-align:center; padding:14px 10px; border-top:3px solid rgba(34,197,94,0.5);">
              <i class="bi bi-telephone-fill" style="color:#4ade80; font-size:1.2rem; margin-bottom:6px; display:block;"></i>
              <p style="font-size:0.75rem; font-weight:600; color:white;">Audio Call</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:4px 0 10px; line-height:1.4;">Speak directly with astrologer</p>
              <p style="font-size:0.9rem; font-weight:700; color:#4ade80;">₹ ${a.callRate} <span style="font-size:0.6rem; color:#9ca3af;">/min</span></p>
            </div>
            <div class="card" style="text-align:center; padding:14px 10px; border-top:3px solid rgba(59,130,246,0.5);">
              <i class="bi bi-camera-video-fill" style="color:#60a5fa; font-size:1.2rem; margin-bottom:6px; display:block;"></i>
              <p style="font-size:0.75rem; font-weight:600; color:white;">Video Call</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:4px 0 10px; line-height:1.4;">Face to face consultation</p>
              <p style="font-size:0.9rem; font-weight:700; color:#4ade80;">₹ ${a.videoRate} <span style="font-size:0.6rem; color:#9ca3af;">/min</span></p>
            </div>
          </div>
        </div>

        <!-- Availability -->
        <div style="margin:0 16px 16px;">
          <div class="flex-between" style="margin-bottom:10px;">
            <p style="font-size:0.85rem; font-weight:700; color:white;">Availability</p>
            <button style="font-size:0.7rem; color:#a78bfa; background:none; border:none; cursor:pointer;"><i class="bi bi-calendar3 me-1"></i>View Calendar &gt;</button>
          </div>
          <div style="display:flex; gap:8px; overflow-x:auto; scrollbar-width:none;">
            ${[
              {day:'Today',date:'24 May',avail:true,active:true},
              {day:'Sat',date:'25 May',avail:true},
              {day:'Sun',date:'26 May',avail:true},
              {day:'Mon',date:'27 May',avail:true},
              {day:'Tue',date:'28 May',avail:true},
              {day:'More',icon:'bi bi-arrow-right'},
            ].map(d => `
              <div style="flex-shrink:0; min-width:56px; background:${d.active ? 'linear-gradient(135deg,#5b21b6,#7c3aed)' : '#0f0a1e'}; border:1px solid ${d.active ? 'transparent' : 'rgba(255,255,255,0.06)'}; border-radius:12px; padding:10px 6px; text-align:center; cursor:pointer;">
                <p style="font-size:0.65rem; font-weight:600; color:${d.active ? 'white' : '#9ca3af'};">${d.icon ? '' : d.day}</p>
                <p style="font-size:0.65rem; color:${d.active ? 'rgba(255,255,255,0.8)' : '#6b7280'}; margin:3px 0;">${d.date || ''}</p>
                ${d.avail ? `<p style="font-size:0.58rem; color:${d.active ? '#a5f3fc' : '#4ade80'};">Available</p>` : ''}
                ${d.icon ? `<i class="${d.icon}" style="color:#6b7280;"></i>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Reviews -->
        <div style="margin:0 16px 20px;">
          <div class="flex-between" style="margin-bottom:10px;">
            <p style="font-size:0.85rem; font-weight:700; color:white;">What People Say</p>
            <button style="font-size:0.7rem; color:#a78bfa; background:none; border:none; cursor:pointer;">View All Reviews &gt;</button>
          </div>
          <div class="card">
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="${DATA.currentUser.avatar}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
              <div style="flex:1;">
                <div class="stars">${'<i class="bi bi-star-fill star-filled"></i>'.repeat(5)}</div>
                <p style="font-size:0.75rem; color:#9ca3af; margin-top:4px; line-height:1.4;">Very accurate predictions and helpful guidance. Thank you so much!</p>
              </div>
              <div style="text-align:right; flex-shrink:0;">
                <p style="font-size:0.7rem; color:white; font-weight:600;">Priya S.</p>
                <p style="font-size:0.62rem; color:#6b7280;">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Bar -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.97); border-top:1px solid rgba(255,255,255,0.06); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; z-index:50;">
        <div>
          <p style="font-size:0.65rem; color:#9ca3af;">Consultation Charges</p>
          <p style="font-size:0.9rem; font-weight:700; color:white;">₹ ${a.chatRate} <span style="font-size:0.65rem; color:#9ca3af;">/min (Chat)</span></p>
        </div>
        <button class="btn-primary" style="padding:12px 20px;" onclick="Router.go('chat', {id:'${a.id}'})">
          <i class="bi bi-chat-fill me-2"></i> Start Chat
        </button>
      </div>
    </div>
    `;
  },


  /* ── HOROSCOPE ───────────────────────────────────────────── */
  horoscope: () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div class="flex-center flex-col gap-2">
          <div class="flex-center gap-6">
            <span style="color:#eab308;font-size:0.8rem;">——✦</span>
            <span style="font-size:1rem;font-weight:700;color:white;">Daily Horoscope</span>
            <span style="color:#eab308;font-size:0.8rem;">✦——</span>
          </div>
        </div>
        <div style="position:relative;"><button class="header-btn"><i class="bi bi-bell"></i></button><span class="badge-dot"></span></div>
      </div>
      <div class="screen-body pb-nav">
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:0 16px 14px;">
          <button class="header-btn" style="width:32px;height:32px;font-size:0.9rem;"><i class="bi bi-chevron-left"></i></button>
          <div style="flex:1;background:#0f0a1e;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:8px 14px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
            <i class="bi bi-calendar3" style="color:#a78bfa;font-size:0.85rem;"></i>
            <span style="font-size:0.82rem;color:white;font-weight:500;">24 May 2024, Friday</span>
            <i class="bi bi-chevron-down" style="color:#6b7280;font-size:0.7rem;"></i>
          </div>
          <button class="header-btn" style="width:32px;height:32px;font-size:0.9rem;"><i class="bi bi-chevron-right"></i></button>
        </div>
        <div style="margin:0 16px 14px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:52px;height:52px;border-radius:50%;border:2px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;">
              <span style="font-size:1.6rem;">♈</span>
            </div>
            <div>
              <p style="font-size:1rem;font-weight:700;color:white;">Aries</p>
              <p style="font-size:0.68rem;color:#9ca3af;">March 21 - April 19</p>
            </div>
          </div>
          <button style="background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;padding:7px 12px;border-radius:8px;font-size:0.7rem;cursor:pointer;display:flex;align-items:center;gap:5px;">
            <i class="bi bi-arrow-repeat"></i> Change Sign
          </button>
        </div>
        <div style="display:flex;gap:0;padding:0 16px;overflow-x:auto;scrollbar-width:none;margin-bottom:14px;">
          ${['Today','Tomorrow','This Week','This Month','This Year'].map((t,i)=>`
            <button style="flex-shrink:0;padding:8px 12px;font-size:0.72rem;font-weight:${i===0?'700':'500'};color:${i===0?'#a78bfa':'#9ca3af'};background:none;border:none;border-bottom:2px solid ${i===0?'#7c3aed':'transparent'};cursor:pointer;">${t}</button>
          `).join('')}
        </div>
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(46,29,82,0.8),rgba(20,10,45,0.9));border:1px solid rgba(139,92,246,0.2);border-radius:16px;padding:16px;">
          <div style="display:flex;gap:16px;align-items:center;margin-bottom:14px;">
            <div style="position:relative;width:90px;height:90px;flex-shrink:0;">
              <svg width="90" height="90" viewBox="0 0 90 90" style="transform:rotate(-90deg);position:absolute;">
                <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(139,92,246,0.2)" stroke-width="8"/>
                <circle cx="45" cy="45" r="38" fill="none" stroke="url(#scoreGrad)" stroke-width="8" stroke-dasharray="${2*Math.PI*38*0.78} ${2*Math.PI*38}" stroke-linecap="round"/>
                <defs><linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a855f7"/></linearGradient></defs>
              </svg>
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                <span style="font-size:1.3rem;font-weight:800;color:white;">78%</span>
                <span style="font-size:0.58rem;color:#9ca3af;">Overall</span>
              </div>
            </div>
            <div>
              <p style="font-size:0.9rem;font-weight:700;color:white;margin-bottom:5px;">A positive day ahead!</p>
              <p style="font-size:0.72rem;color:#9ca3af;line-height:1.5;">Today brings opportunities for growth and meaningful connections. Stay confident and focus on your goals.</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${[
              {icon:'bi bi-heart-fill',color:'#f87171',label:'Love',stars:4},
              {icon:'bi bi-briefcase-fill',color:'#60a5fa',label:'Career',stars:4},
              {icon:'bi bi-coin',color:'#eab308',label:'Money',stars:2.5},
              {icon:'bi bi-flower1',color:'#4ade80',label:'Health',stars:4},
            ].map(l=>`
              <div style="display:flex;align-items:center;gap:8px;">
                <i class="${l.icon}" style="color:${l.color};font-size:0.9rem;"></i>
                <span style="font-size:0.72rem;color:#9ca3af;min-width:40px;">${l.label}</span>
                <div style="display:flex;gap:1px;">${'★'.repeat(Math.floor(l.stars)).split('').map(()=>`<span style="color:#eab308;font-size:0.75rem;">★</span>`).join('')}${'☆'.repeat(5-Math.floor(l.stars)).split('').map(()=>`<span style="color:#374151;font-size:0.75rem;">★</span>`).join('')}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <i class="bi bi-file-text-fill" style="color:#a78bfa;"></i>
            <p style="font-size:0.85rem;font-weight:700;color:white;">Detailed Horoscope</p>
          </div>
          <p style="font-size:0.75rem;color:#9ca3af;line-height:1.6;">Your energy is high and motivation is strong. It's a great time to start new projects or take bold steps in your career. In relationships, communication will bring you closer to your loved ones. Take care of your health by balancing work and rest.</p>
          <button style="color:#a78bfa;font-size:0.72rem;margin-top:8px;display:flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;">Read More <i class="bi bi-chevron-down"></i></button>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <i class="bi bi-stars" style="color:#eab308;"></i>
            <p style="font-size:0.85rem;font-weight:700;color:white;">Lucky Guide</p>
          </div>
          <div class="lucky-grid">
            ${[
              {label:'Lucky Number',value:'9',color:'#a78bfa'},
              {label:'Lucky Color',value:'Red',color:'#f87171'},
              {label:'Lucky Time',value:'10:30 AM',color:'#60a5fa'},
              {label:'Lucky Gemstone',value:'Ruby',color:'#f472b6'},
            ].map(l=>`
              <div class="lucky-item">
                <p class="lucky-label">${l.label}</p>
                <p class="lucky-value" style="color:${l.color};">${l.value}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <i class="bi bi-flower2" style="color:#4ade80;"></i>
            <p style="font-size:0.85rem;font-weight:700;color:white;">Remedies for You</p>
          </div>
          ${['Offer water to the Sun God in the morning.','Chant "Om Surya Namah" 11 times daily.','Donate red lentils on Tuesday.'].map(r=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;align-items:center;gap:10px;">
                <i class="bi bi-sun" style="color:#eab308;font-size:0.9rem;"></i>
                <p style="font-size:0.75rem;color:#9ca3af;">${r}</p>
              </div>
              <i class="bi bi-chevron-right" style="color:#4b5563;font-size:0.8rem;"></i>
            </div>
          `).join('')}
        </div>
        <div style="margin:0 16px 20px;display:flex;gap:10px;align-items:center;">
          <button style="width:44px;height:44px;border-radius:50%;background:#0f0a1e;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:1rem;flex-shrink:0;cursor:pointer;">
            <i class="bi bi-share"></i>
          </button>
          <button class="btn-primary flex-1" onclick="Router.go('consult')">
            Consult Astrologer <i class="bi bi-arrow-right ms-1"></i>
          </button>
          <button style="width:44px;height:44px;border-radius:50%;background:#0f0a1e;border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:1rem;flex-shrink:0;cursor:pointer;">
            <i class="bi bi-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  `,

  /* ── BOOKINGS ────────────────────────────────────────────── */
  bookings: () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div class="flex-center flex-col gap-2">
          <div class="flex-center gap-6">
            <span style="color:#eab308;font-size:0.8rem;">——✦</span>
            <span style="font-size:1rem;font-weight:700;color:white;">My Bookings</span>
            <span style="color:#eab308;font-size:0.8rem;">✦——</span>
          </div>
          <p style="font-size:0.65rem;color:#9ca3af;">All your consultations at one place</p>
        </div>
        <div style="position:relative;"><button class="header-btn"><i class="bi bi-bell"></i></button><span class="badge-count">3</span></div>
      </div>
      <div class="screen-body pb-nav">
        <div class="filter-tabs" style="margin-bottom:14px;">
          <div class="filter-tab active"><i class="bi bi-grid-3x3-gap"></i> All</div>
          <div class="filter-tab"><i class="bi bi-calendar2-x"></i> Upcoming</div>
          <div class="filter-tab"><i class="bi bi-check-circle"></i> Completed</div>
          <div class="filter-tab"><i class="bi bi-x-circle"></i> Cancelled</div>
        </div>
        <div style="margin:0 16px 16px;background:linear-gradient(135deg,rgba(46,29,82,0.85),rgba(76,29,149,0.5));border:1px solid rgba(139,92,246,0.3);border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:center;overflow:hidden;position:relative;">
          <div style="position:absolute;right:-10px;top:-10px;opacity:0.2;">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <circle cx="45" cy="45" r="42" stroke="#eab308" stroke-width="0.8" stroke-dasharray="3 3"/>
              <circle cx="45" cy="45" r="25" fill="rgba(234,179,8,0.3)"/>
              <circle cx="45" cy="45" r="12" fill="rgba(139,92,246,0.5)"/>
            </svg>
          </div>
          <div>
            <p style="font-size:0.95rem;font-weight:700;color:white;margin-bottom:4px;">Need immediate guidance?</p>
            <p style="font-size:0.78rem;color:#eab308;font-weight:600;margin-bottom:12px;">Talk to an Astrologer Now</p>
            <button class="btn-primary btn-sm" onclick="Router.go('consult')">Consult Now <i class="bi bi-arrow-right ms-1"></i></button>
          </div>
        </div>
        <div class="flex-between" style="padding:0 16px;margin-bottom:10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Upcoming Bookings</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-calendar3 me-1"></i>View Calendar &gt;</button>
        </div>
        <div style="margin:0 16px 16px;" class="card" style="border:1px solid rgba(139,92,246,0.2);">
          <div style="display:flex;gap:12px;align-items:flex-start;">
            <div style="position:relative;">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(139,92,246,0.4);">
              <div style="position:absolute;bottom:1px;right:1px;width:12px;height:12px;border-radius:50%;background:#22c55e;border:2px solid #0f0a1e;"></div>
            </div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                <p style="font-size:0.88rem;font-weight:700;color:white;">Astro Arjun Sharma</p>
                <i class="bi bi-patch-check-fill" style="color:#a78bfa;font-size:0.75rem;"></i>
              </div>
              <p style="font-size:0.68rem;color:#eab308;margin-bottom:8px;">Vedic Astrology · Numerology</p>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:6px;font-size:0.68rem;color:#9ca3af;"><i class="bi bi-calendar3"></i> 24 May 2024, Fri</div>
                <div style="display:flex;align-items:center;gap:6px;font-size:0.68rem;color:#9ca3af;"><i class="bi bi-clock"></i> 10:30 AM</div>
                
              </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
              <span class="badge badge-confirmed">Confirmed</span>
              <div style="text-align:right;">
                <p style="font-size:0.6rem;color:#9ca3af;">Booking ID</p>
                <p style="font-size:0.7rem;color:white;font-weight:600;">BK123456 <i class="bi bi-copy" style="color:#a78bfa;font-size:0.65rem;cursor:pointer;"></i></p>
              </div>
              <button class="btn-primary btn-sm" style="font-size:0.68rem;" onclick="Router.go('booking-detail')">
                
              </button>
            </div>
          </div>
        </div>
        <div class="flex-between" style="padding:0 16px;margin-bottom:10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Completed Bookings</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View All &gt;</button>
        </div>
        ${[
          {name:'Astro Meera Iyer',spec:'Tarot · Vedic · Numerology',date:'18 May 2024, Sat',time:'04:00 PM',rating:4.8,avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',online:false},
          {name:'Astro Devdutt Ji',spec:'Vastu · Vedic Astrology',date:'10 May 2024, Fri',time:'11:00 AM',rating:4.7,avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',online:false},
          {name:'Astro Neha Kapoor',spec:'Palmistry · Numerology',date:'02 May 2024, Thu',time:'07:30 PM',rating:4.9,avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',online:true},
        ].map(b=>`
          <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:12px;display:flex;gap:10px;align-items:center;" onclick="Router.go('booking-detail')">
            <div style="position:relative;">
              <img src="${b.avatar}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
              <div style="position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;background:${b.online?'#22c55e':'#6b7280'};border:2px solid #0f0a1e;"></div>
            </div>
            <div style="flex:1;">
              <p style="font-size:0.82rem;font-weight:600;color:white;">${b.name}</p>
              <p style="font-size:0.65rem;color:#eab308;margin:2px 0;">${b.spec}</p>
              <p style="font-size:0.62rem;color:#9ca3af;">${b.date} · ${b.time}</p>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
              <span class="badge badge-green">Completed</span>
              <div style="display:flex;align-items:center;gap:2px;">
                <i class="bi bi-star-fill" style="color:#eab308;font-size:0.7rem;"></i>
                <span style="font-size:0.72rem;color:white;font-weight:600;">${b.rating}</span>
              </div>
              <button class="btn-outline" style="padding:4px 10px;font-size:0.65rem;border-radius:7px;">View Details</button>
            </div>
          </div>
        `).join('')}
        <div class="flex-between" style="padding:0 16px;margin:6px 0 10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Cancelled Bookings</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View All &gt;</button>
        </div>
        <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:12px;display:flex;gap:10px;align-items:center;">
          <div style="position:relative;">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
            <div style="position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;background:#6b7280;border:2px solid #0f0a1e;"></div>
          </div>
          <div style="flex:1;">
            <p style="font-size:0.82rem;font-weight:600;color:white;">Astro Raghav Verma</p>
            <p style="font-size:0.65rem;color:#eab308;margin:2px 0;">Vedic Astrology</p>
            <p style="font-size:0.62rem;color:#9ca3af;">05 May 2024, Sun · 09:00 AM</p>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
            <span class="badge badge-red">Cancelled</span>
            <button class="btn-outline" style="padding:4px 10px;font-size:0.65rem;border-radius:7px;">View Details</button>
          </div>
        </div>
        <div style="margin:0 16px 20px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:44px;height:44px;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;"><i class="bi bi-geo-alt" style="color:#a78bfa;font-size:1.1rem;"></i></div>
            <div>
              <p style="font-size:0.82rem;font-weight:600;color:white;">Book a Personal Visit</p>
              <p style="font-size:0.65rem;color:#9ca3af;">Visit astrologers in their office</p>
            </div>
          </div>
          <i class="bi bi-arrow-right" style="color:#a78bfa;"></i>
        </div>
      </div>
    </div>
  `,

  /* ── USER PROFILE ────────────────────────────────────────── */
  profile: () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('settings')"><i class="bi bi-gear"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308;font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem;font-weight:700;color:white;">My Profile</span>
          <span style="color:#eab308;font-size:0.8rem;">✦——</span>
        </div>
        <div style="position:relative;"><button class="header-btn"><i class="bi bi-bell"></i></button><span class="badge-count">2</span></div>
      </div>
      <div class="screen-body pb-nav">
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(46,29,82,0.7),rgba(20,10,45,0.9));border:1px solid rgba(139,92,246,0.2);border-radius:16px;padding:16px;position:relative;overflow:hidden;">
          <div style="position:absolute;right:-10px;top:-10px;opacity:0.15;">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="56" stroke="#eab308" stroke-width="0.8" stroke-dasharray="3 3"/>
              <circle cx="60" cy="60" r="36" fill="rgba(234,179,8,0.3)"/>
            </svg>
          </div>
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <div style="position:relative;">
              <img src="${DATA.currentUser.avatar}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid rgba(139,92,246,0.5);">
              <div style="position:absolute;bottom:-2px;right:-2px;width:24px;height:24px;border-radius:50%;background:#7c3aed;border:2px solid #080518;display:flex;align-items:center;justify-content:center;cursor:pointer;">
                <i class="bi bi-camera-fill" style="color:white;font-size:0.6rem;"></i>
              </div>
            </div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <h2 style="font-size:1rem;font-weight:700;color:white;">${DATA.currentUser.name}</h2>
                <button style="background:none;border:none;color:#a78bfa;font-size:0.8rem;cursor:pointer;"><i class="bi bi-pencil"></i></button>
              </div>
              <p style="font-size:0.7rem;color:#9ca3af;margin-bottom:2px;"><i class="bi bi-telephone me-1"></i>${DATA.currentUser.phone}</p>
              <p style="font-size:0.7rem;color:#9ca3af;margin-bottom:8px;"><i class="bi bi-envelope me-1"></i>${DATA.currentUser.email}</p>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);border-radius:20px;padding:3px 10px;">
                <i class="bi bi-star-fill" style="color:#eab308;font-size:0.65rem;"></i>
                <span style="font-size:0.68rem;color:#eab308;font-weight:600;">${DATA.currentUser.points} Points</span>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#5b21b6,#7c3aed);border-radius:8px;padding:4px 10px;text-align:center;flex-shrink:0;">
              <i class="bi bi-lightning-charge-fill" style="color:#eab308;font-size:0.7rem;"></i>
              <p style="font-size:0.6rem;color:white;font-weight:700;margin-top:1px;">Level ${DATA.currentUser.level}</p>
            </div>
          </div>
        </div>
        <div class="profile-stats-row">
          ${[
            {icon:'bi bi-star-fill',color:'#eab308',val:DATA.currentUser.points,label:'My Points'},
            {icon:'bi bi-wallet2',color:'#4ade80',val:`₹ ${DATA.currentUser.walletBalance}`,label:'Wallet'},
            {icon:'bi bi-ticket-perforated',color:'#a78bfa',val:`${DATA.currentUser.coupons} Available`,label:'Coupons'},
            {icon:'bi bi-heart-fill',color:'#f87171',val:DATA.currentUser.favourites,label:'Favourites'},
          ].map(s=>`
            <div class="profile-stat-item" onclick="Router.go('wallet-topup')">
              <i class="${s.icon}" style="color:${s.color};font-size:1rem;margin-bottom:4px;display:block;"></i>
              <p class="profile-stat-val">${s.val}</p>
              <p class="profile-stat-sub">${s.label}</p>
            </div>
          `).join('')}
        </div>
        <div class="flex-between" style="padding:0 16px;margin-bottom:8px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">My Details</p>
          <button style="font-size:0.72rem;color:#a78bfa;background:none;border:none;cursor:pointer;">Edit &gt;</button>
        </div>
        <div class="menu-group" style="margin-bottom:16px;">
          ${[
            {icon:'bi bi-person-fill',bg:'icon-purple',title:'Personal Information',sub:'Name, Date of Birth, Gender'},
            {icon:'bi bi-calendar2-event-fill',bg:'icon-blue',title:'Birth Details',sub:'Time, Place, City'},
            {icon:'bi bi-geo-alt-fill',bg:'icon-teal',title:'Address',sub:'Current Address'},
            {icon:'bi bi-shield-lock-fill',bg:'icon-orange',title:'Privacy & Security',sub:'Change Password, Manage Devices'},
          ].map(m=>`
            <div class="menu-row">
              <div class="menu-row-icon ${m.bg}"><i class="${m.icon}"></i></div>
              <div class="menu-row-text"><p class="menu-row-title">${m.title}</p><p class="menu-row-sub">${m.sub}</p></div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
          `).join('')}
        </div>
        <div class="flex-between" style="padding:0 16px;margin-bottom:10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Consultation History</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View All &gt;</button>
        </div>
        ${DATA.astrologers.slice(0,3).map((a,i)=>`
          <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:12px;display:flex;gap:10px;align-items:center;cursor:pointer;">
            <img src="${a.avatar}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
            <div style="flex:1;">
              <p style="font-size:0.82rem;font-weight:600;color:white;">${a.name}</p>
              <p style="font-size:0.65rem;color:#eab308;margin:2px 0;">${a.expertise.slice(0,2).join(' · ')}</p>
              <p style="font-size:0.62rem;color:#9ca3af;">${['24 May 2024','18 May 2024','10 May 2024'][i]} · 10:30 AM</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:0.82rem;font-weight:700;color:white;">₹ ${[600,500,400][i]}</p>
              <span class="badge badge-green" style="margin-top:4px;">Completed</span>
            </div>
            <i class="bi bi-chevron-right" style="color:#4b5563;"></i>
          </div>
        `).join('')}
        <div class="flex-between" style="padding:0 16px;margin:6px 0 10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Saved Astrologers</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View All &gt;</button>
        </div>
        <div style="display:flex;gap:12px;padding:0 16px;overflow-x:auto;scrollbar-width:none;margin-bottom:16px;">
          ${DATA.astrologers.slice(0,4).map(a=>`
            <div style="flex-shrink:0;text-align:center;cursor:pointer;" onclick="Router.go('astrologer-profile',{id:'${a.id}'})">
              <div style="position:relative;">
                <img src="${a.avatar}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(139,92,246,0.4);">
                <div style="position:absolute;bottom:0;right:0;width:18px;height:18px;border-radius:50%;background:#f43f5e;display:flex;align-items:center;justify-content:center;">
                  <i class="bi bi-heart-fill" style="color:white;font-size:0.55rem;"></i>
                </div>
              </div>
              <p style="font-size:0.6rem;color:white;margin-top:5px;max-width:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a.name.replace('Astro ','')}</p>
              <div style="display:flex;align-items:center;justify-content:center;gap:2px;margin-top:2px;">
                <i class="bi bi-star-fill" style="color:#eab308;font-size:0.58rem;"></i>
                <span style="font-size:0.6rem;color:#9ca3af;">${a.rating}</span>
              </div>
            </div>
          `).join('')}
          <div style="flex-shrink:0;text-align:center;cursor:pointer;" onclick="Router.go('consult')">
            <div style="width:56px;height:56px;border-radius:50%;border:1.5px dashed rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;">
              <i class="bi bi-plus" style="color:#a78bfa;font-size:1.2rem;"></i>
            </div>
            <p style="font-size:0.6rem;color:#9ca3af;margin-top:5px;">Add More</p>
          </div>
        </div>
        <div style="margin:0 16px 20px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;"><i class="bi bi-headset" style="color:#a78bfa;font-size:1rem;"></i></div>
            <div>
              <p style="font-size:0.82rem;font-weight:600;color:white;">Need Help?</p>
              <p style="font-size:0.65rem;color:#9ca3af;">Our support team is here for you</p>
            </div>
          </div>
          <button class="btn-outline" style="padding:8px 14px;font-size:0.7rem;border-radius:10px;" onclick="Router.go('contact-support')">
            <i class="bi bi-chat-dots me-1"></i> Contact Support
          </button>
        </div>
      </div>
    </div>
  `,

  /* ── CHAT ────────────────────────────────────────────────── */
  chat: (params) => {
    const a = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    return `
    <div class="screen" style="background:#080518;display:flex;flex-direction:column;">
      <div style="background:#0f0a1e;border-bottom:1px solid rgba(255,255,255,0.06);padding:12px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;">
        <button class="header-btn" style="flex-shrink:0;" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="position:relative;">
          <img src="${a.avatar}" style="width:42px;height:42px;border-radius:50%;object-fit:cover;border:2px solid rgba(139,92,246,0.4);">
          <div style="position:absolute;bottom:0;right:0;width:11px;height:11px;border-radius:50%;background:#22c55e;border:2px solid #0f0a1e;"></div>
        </div>
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:5px;">
            <p style="font-size:0.88rem;font-weight:700;color:white;">${a.name}</p>
            <i class="bi bi-patch-check-fill" style="color:#a78bfa;font-size:0.75rem;"></i>
          </div>
          <p style="font-size:0.65rem;color:#eab308;">${a.expertise.slice(0,2).join(' · ')}</p>
          <p style="font-size:0.62rem;color:#22c55e;"><i class="bi bi-circle-fill" style="font-size:0.45rem;margin-right:3px;"></i>Online</p>
        </div>
        <button class="btn-outline btn-sm" onclick="Router.go('astrologer-profile',{id:'${a.id}'})">View Profile</button>
        <button class="header-btn"><i class="bi bi-three-dots-vertical"></i></button>
      </div>
      <div class="security-banner">
        <i class="bi bi-shield-check" style="color:#a78bfa;font-size:1rem;flex-shrink:0;"></i>
        <p>This is a secure chat. Your messages are protected and never shared.</p>
        <button style="background:none;border:none;color:#6b7280;cursor:pointer;flex-shrink:0;"><i class="bi bi-x"></i></button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px;scrollbar-width:none;" id="chat-messages">
        <div class="chat-date-divider">— Today —</div>
        <div class="chat-msg-user">
          Namaste! I want to know about my career growth and future opportunities.
          <div class="chat-timestamp">09:30 AM ✓✓</div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <img src="${a.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro">
            Namaste! 🙏<br>Sure, I will analyze your career path and future opportunities. Please share your birth details to get started.
            <div class="chat-timestamp">09:31 AM</div>
          </div>
        </div>
        <div class="chat-msg-user">
          15 July 1995<br>10:30 AM<br>Delhi, India
          <div class="chat-timestamp">09:32 AM ✓✓</div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <img src="${a.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro">
            Thank you! Please give me a moment to analyze your chart.<br>I'll share the insights with you shortly.
            <div class="chat-timestamp">09:33 AM</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <img src="${a.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro">
            Based on your birth details, I can see that you have strong potential for growth in the next 2–3 years. Major opportunities are visible around mid 2026.
            <div class="chat-timestamp">09:36 AM</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-end;" id="typing-row">
          <img src="${a.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro" style="padding:12px 14px;">
            <div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>
          </div>
        </div>
      </div>
      <div class="chat-input-bar">
        <button style="color:#9ca3af;font-size:1.1rem;background:none;border:none;cursor:pointer;"><i class="bi bi-plus-lg"></i></button>
        <input class="chat-input" type="text" id="chat-text-input" placeholder="Type your message...">
        <button style="color:#9ca3af;font-size:1rem;background:none;border:none;cursor:pointer;"><i class="bi bi-emoji-smile"></i></button>
        <div class="chat-send-btn" onclick="App.sendChatMsg()"><i class="bi bi-send-fill"></i></div>
      </div>
      <div style="background:#080518;border-top:1px solid rgba(255,255,255,0.05);padding:10px 16px;display:flex;align-items:center;justify-content:space-around;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;"><i class="bi bi-clock" style="color:#a78bfa;font-size:0.85rem;"></i></div>
          <div><p style="font-size:0.62rem;color:#9ca3af;">Chat Duration</p><p style="font-size:0.85rem;font-weight:700;color:white;" id="chat-timer-display">00:00:00</p></div>
        </div>
        <div style="width:1px;height:30px;background:rgba(255,255,255,0.08);"></div>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;border-radius:50%;background:rgba(234,179,8,0.15);display:flex;align-items:center;justify-content:center;"><i class="bi bi-currency-rupee" style="color:#eab308;font-size:0.85rem;"></i></div>
          <div><p style="font-size:0.62rem;color:#9ca3af;">Charges</p><p style="font-size:0.85rem;font-weight:700;color:white;">₹ ${a.chatRate} / min</p></div>
        </div>
      </div>
    </div>
    `;
  },

  /* ── AUDIO CALL ──────────────────────────────────────────── */
  'audio-call': (params) => {
    const a = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    return `
    <div class="screen call-screen" style="display:flex;flex-direction:column;">
      <div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
        <button style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:white;cursor:pointer;border:none;"><i class="bi bi-chevron-down"></i></button>
        <div style="display:flex;align-items:center;gap:6px;">
          <i class="bi bi-shield-check" style="color:#a78bfa;font-size:0.8rem;"></i>
          <span style="font-size:0.72rem;color:#9ca3af;">Secure & Encrypted Call</span>
        </div>
        <button style="background:#ef4444;color:white;border:none;border-radius:20px;padding:8px 14px;font-size:0.72rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;" onclick="Router.back()">
          <i class="bi bi-telephone-x-fill"></i> End Call
        </button>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
          <div class="call-waveform">
            <div class="waveform-bar" style="height:10px;"></div>
            <div class="waveform-bar" style="height:20px;"></div>
            <div class="waveform-bar" style="height:30px;"></div>
            <div class="waveform-bar" style="height:22px;"></div>
            <div class="waveform-bar" style="height:14px;"></div>
          </div>
          <div class="call-avatar-ring">
            <img src="${a.avatar}" style="width:100%;height:100%;object-fit:cover;">
            <div style="position:absolute;bottom:8px;right:8px;width:16px;height:16px;border-radius:50%;background:#22c55e;border:3px solid rgba(8,5,24,0.8);"></div>
          </div>
          <div class="call-waveform">
            <div class="waveform-bar" style="height:14px;"></div>
            <div class="waveform-bar" style="height:22px;"></div>
            <div class="waveform-bar" style="height:30px;"></div>
            <div class="waveform-bar" style="height:20px;"></div>
            <div class="waveform-bar" style="height:10px;"></div>
          </div>
        </div>
        <h2 style="font-size:1.2rem;font-weight:700;color:white;display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          ${a.name} <i class="bi bi-patch-check-fill" style="color:#a78bfa;font-size:0.9rem;"></i>
        </h2>
        <p style="font-size:0.75rem;color:#eab308;margin-bottom:8px;">${a.expertise.slice(0,2).join(' · ')}</p>
        <div style="display:flex;align-items:center;gap:5px;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.3);border-radius:20px;padding:4px 12px;margin-bottom:20px;">
          <i class="bi bi-circle-fill" style="color:#22c55e;font-size:0.5rem;"></i>
          <span style="font-size:0.7rem;color:#4ade80;">Online</span>
        </div>
        <p style="font-size:0.72rem;color:#9ca3af;margin-bottom:6px;">Call Duration</p>
        <p style="font-size:2.4rem;font-weight:300;color:white;letter-spacing:0.05em;margin-bottom:24px;" id="call-timer-display">00:00:00</p>
        <div style="background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:16px;width:100%;display:grid;grid-template-columns:repeat(3,1fr);margin-bottom:20px;">
          <div style="text-align:center;">
            <i class="bi bi-clock" style="color:#a78bfa;font-size:1rem;margin-bottom:4px;display:block;"></i>
            <p style="font-size:0.62rem;color:#9ca3af;">Rate</p>
            <p style="font-size:0.82rem;font-weight:700;color:white;">₹ ${a.callRate} / min</p>
          </div>
          <div style="text-align:center;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);">
            <i class="bi bi-waveform" style="color:#a78bfa;font-size:1rem;margin-bottom:4px;display:block;"></i>
            <p style="font-size:0.62rem;color:#9ca3af;">Type</p>
            <p style="font-size:0.82rem;font-weight:700;color:white;">Audio Call</p>
          </div>
          <div style="text-align:center;">
            <i class="bi bi-shield-check" style="color:#4ade80;font-size:1rem;margin-bottom:4px;display:block;"></i>
            <p style="font-size:0.62rem;color:#9ca3af;">Secure</p>
            <p style="font-size:0.82rem;font-weight:700;color:white;">Encrypted</p>
          </div>
        </div>
        <div style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);border-radius:12px;padding:12px 14px;width:100%;display:flex;align-items:center;gap:10px;margin-bottom:24px;">
          <div style="width:36px;height:36px;border-radius:50%;background:rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="bi bi-person-fill" style="color:#a78bfa;"></i></div>
          <p style="font-size:0.72rem;color:#9ca3af;line-height:1.5;">Please speak clearly and in a quiet place. This helps astrologer provide you better guidance.</p>
        </div>
        <div style="display:flex;gap:24px;align-items:center;">
          <div style="text-align:center;">
            <div class="call-control-btn call-control-mute" onclick="App.showToast('Mic Muted 🔇')"><i class="bi bi-mic-fill"></i></div>
            <p style="font-size:0.62rem;color:#9ca3af;margin-top:6px;">Mute</p>
          </div>
          <div style="text-align:center;">
            <div class="call-control-btn call-control-end" style="width:68px;height:68px;" onclick="Router.back()"><i class="bi bi-telephone-x-fill" style="font-size:1.5rem;"></i></div>
            <p style="font-size:0.62rem;color:#9ca3af;margin-top:6px;">End Call</p>
          </div>
          <div style="text-align:center;">
            <div class="call-control-btn call-control-speaker" onclick="App.showToast('Speaker Active 🔊')"><i class="bi bi-volume-up-fill"></i></div>
            <p style="font-size:0.62rem;color:#9ca3af;margin-top:6px;">Speaker</p>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  /* ── BOOKING DETAIL ──────────────────────────────────────── */
  'booking-detail': () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308;font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem;font-weight:700;color:white;">Booking Details</span>
          <span style="color:#eab308;font-size:0.8rem;">✦——</span>
        </div>
        <button class="header-btn" onclick="App.showToast('Share link ready ✓')"><i class="bi bi-share"></i></button>
      </div>
      <div class="screen-body" style="padding-bottom:20px;">
        <div style="margin:0 16px 14px;background:#0f0a1e;border:1px solid rgba(139,92,246,0.2);border-radius:14px;padding:14px;">
          <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:12px;">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" style="width:60px;height:60px;border-radius:50%;object-fit:cover;border:2px solid rgba(139,92,246,0.4);">
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px;">
                <p style="font-size:0.9rem;font-weight:700;color:white;">Astro Arjun Sharma</p>
                <i class="bi bi-patch-check-fill" style="color:#a78bfa;font-size:0.8rem;"></i>
              </div>
              <p style="font-size:0.68rem;color:#eab308;margin-bottom:4px;">Vedic Astrology · Numerology</p>
              <div class="stars">${'<i class="bi bi-star-fill star-filled"></i>'.repeat(5)}</div>
              <p style="font-size:0.65rem;color:#9ca3af;margin-top:3px;">4.9 (125 Reviews) | 8 Years Exp.</p>
            </div>
            <span class="badge badge-confirmed">Confirmed</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.05);">
            <div style="font-size:0.7rem;color:#9ca3af;display:flex;align-items:center;gap:6px;"><i class="bi bi-calendar3 text-purple"></i> 24 May 2024, Friday</div>
            <div style="font-size:0.7rem;color:#9ca3af;display:flex;align-items:center;gap:6px;text-align:right;justify-content:flex-end;"><span style="font-size:0.62rem;color:#6b7280;">Booking ID</span> <span style="color:white;font-weight:600;">BK123456</span></div>
            <div style="font-size:0.7rem;color:#9ca3af;display:flex;align-items:center;gap:6px;"><i class="bi bi-clock text-purple"></i> 10:30 AM</div>
            <div></div>
            
          </div>
          <button class="btn-primary w-full" style="margin-top:12px;" onclick="Router.go('astro-call')">
            
          </button>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:14px;">Booking Status</p>
          <div style="display:flex;align-items:center;justify-content:space-between;position:relative;">
            <div style="position:absolute;top:18px;left:18px;right:18px;height:2px;background:rgba(34,197,94,0.4);z-index:0;"></div>
            ${['Booked','Payment\nConfirmed','Reminder\nSent','Upcoming'].map((s,i)=>`
              <div style="display:flex;flex-direction:column;align-items:center;gap:5px;z-index:1;">
                <div style="width:36px;height:36px;border-radius:50%;background:${i<3?'#1a3a1f':'#1a1333'};border:2px solid ${i<3?'#4ade80':'rgba(139,92,246,0.4)'};display:flex;align-items:center;justify-content:center;">
                  ${i<3?'<i class="bi bi-check-lg" style="color:#4ade80;font-size:0.85rem;"></i>':'<i class="bi bi-telephone" style="color:#a78bfa;font-size:0.75rem;"></i>'}
                </div>
                <p style="font-size:0.58rem;color:${i<3?'#9ca3af':'white'};text-align:center;white-space:pre-line;line-height:1.3;">${s}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:12px;">Consultation Details</p>
          ${[
            {icon:'bi bi-clock text-purple',label:'Duration',val:'30 Minutes'},
            {icon:'bi bi-currency-rupee text-gold',label:'Amount',val:'₹ 20 /min'},
            {icon:'bi bi-tag text-purple',label:'Total Paid',val:'₹ 600'},
            {icon:'bi bi-file-text text-purple',label:'Topic',val:'Career Guidance'},
          ].map(d=>`
            <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:6px;"><i class="${d.icon}" style="font-size:0.85rem;"></i><span style="font-size:0.75rem;color:#9ca3af;">${d.label}</span></div>
              <span style="font-size:0.75rem;color:white;font-weight:500;">${d.val}</span>
            </div>
          `).join('')}
          <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.05);">
            <p style="font-size:0.72rem;color:#9ca3af;margin-bottom:4px;"><i class="bi bi-file-text text-purple me-1"></i>Your Note</p>
            <p style="font-size:0.72rem;color:#9ca3af;line-height:1.5;background:rgba(255,255,255,0.03);border-radius:8px;padding:8px 10px;">I need guidance regarding career in data science and future opportunities.</p>
          </div>
        </div>
        <div style="margin:0 16px 20px;" class="card">
          <p style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:10px;">Before Your Session</p>
          ${['Ensure good internet connection','Find a quiet place without distractions','Keep your birth details handy for better guidance'].map(t=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;align-items:center;gap:8px;">
                <i class="bi bi-check-circle-fill" style="color:#a78bfa;font-size:0.9rem;flex-shrink:0;"></i>
                <p style="font-size:0.72rem;color:#9ca3af;">${t}</p>
              </div>
              <i class="bi bi-chevron-right" style="color:#4b5563;"></i>
            </div>
          `).join('')}
        </div>
        <div style="margin:0 16px 20px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:38px;height:38px;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;"><i class="bi bi-headset" style="color:#a78bfa;font-size:1rem;"></i></div>
            <div><p style="font-size:0.82rem;font-weight:600;color:white;">Need Help?</p><p style="font-size:0.65rem;color:#9ca3af;">Our support team is here for you</p></div>
          </div>
          <button class="btn-outline btn-sm" onclick="Router.go('contact-support')"><i class="bi bi-headset me-1"></i>Contact Support</button>
        </div>
      </div>
    </div>
  `,

  /* ── WALLET TOPUP ────────────────────────────────────────── */
  'wallet-topup': () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="text-align:center;">
          <p style="font-size:1rem;font-weight:700;color:white;">Wallet Top Up</p>
          <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-shield-check me-1" style="color:#a78bfa;"></i>Secure &amp; Safe Payments</p>
        </div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding-bottom:90px;">
        <div style="margin:0 16px 16px;background:linear-gradient(135deg,rgba(76,29,149,0.5),rgba(46,29,82,0.8));border:1px solid rgba(139,92,246,0.3);border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="font-size:0.7rem;color:#9ca3af;margin-bottom:5px;">Current Wallet Balance</p>
            <p style="font-size:2rem;font-weight:800;color:white;">₹ ${DATA.currentUser.walletBalance}</p>
            <p style="font-size:0.65rem;color:#9ca3af;margin-top:4px;"><i class="bi bi-info-circle me-1"></i>Use wallet balance to book consultations</p>
          </div>
          <div style="font-size:3rem;">💰</div>
        </div>
        <p style="font-size:0.88rem;font-weight:700;color:white;padding:0 16px;margin-bottom:10px;">Select Top Up Amount</p>
        <div class="topup-grid" style="margin-bottom:12px;">
          ${[
            {amt:'₹ 500',bonus:'Get ₹ 525',sel:true},
            {amt:'₹ 1,000',bonus:'Get ₹ 1,050'},
            {amt:'₹ 2,000',bonus:'Get ₹ 2,100'},
            {amt:'₹ 5,000',bonus:'Get ₹ 5,250'},
            {amt:'₹ 10,000',bonus:'Get ₹ 10,500'},
            {amt:'Custom Amount',bonus:'Enter amount',custom:true},
          ].map(o=>`
            <div class="topup-option ${o.sel?'selected':''}" onclick="App.selectTopup(this)">
              ${o.custom?`
                <p style="font-size:0.82rem;font-weight:600;color:white;">Custom Amount</p>
                <p style="font-size:0.62rem;color:#9ca3af;margin-top:3px;">Enter amount</p>
              `:`
                <p class="topup-option-amount">${o.amt}</p>
                <p class="topup-option-bonus">${o.bonus}</p>
              `}
              ${o.sel?'<i class="bi bi-check-circle-fill" style="color:#7c3aed;position:absolute;top:-6px;right:-6px;font-size:1rem;background:white;border-radius:50%;"></i>':''}
            </div>
          `).join('')}
        </div>
        <div style="margin:0 16px 16px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:10px;">
            <i class="bi bi-tag-fill" style="color:#a78bfa;font-size:1rem;"></i>
            <div>
              <p style="font-size:0.8rem;color:#a78bfa;font-weight:500;">Have a promo code?</p>
              <p style="font-size:0.65rem;color:#9ca3af;">Apply code to get extra discount</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:5px;color:#a78bfa;font-size:0.75rem;font-weight:500;cursor:pointer;">Apply <i class="bi bi-chevron-right"></i></div>
        </div>
        <p style="font-size:0.88rem;font-weight:700;color:white;padding:0 16px;margin-bottom:10px;">Select Payment Method</p>
        <div style="margin:0 16px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;">
          ${[
            {icon:'bi bi-phone',bg:'rgba(255,152,0,0.15)',label:'UPI',sub:'Pay using any UPI app',brands:'GPay · PhonePe · Paytm & more'},
            {icon:'bi bi-credit-card-2-front',bg:'rgba(59,130,246,0.15)',label:'Debit / Credit Card',sub:'Visa, Mastercard, Rupay',brands:'VISA · MC · RuPay & more'},
            {icon:'bi bi-bank',bg:'rgba(34,197,94,0.15)',label:'Net Banking',sub:'All major banks supported',brands:'SBI · HDFC · Axis & more'},
            {icon:'bi bi-wallet2',bg:'rgba(249,115,22,0.15)',label:'Wallets',sub:'Paytm, PhonePe, Amazon Pay & more',brands:'Paytm · PhonePe · Amazon'},
          ].map(p=>`
            <div class="payment-method-row" onclick="document.querySelectorAll('.payment-method-row').forEach(el=>el.style.borderColor='rgba(255,255,255,0.1)'); this.style.borderColor='var(--gold)';">
              <div style="width:40px;height:40px;border-radius:10px;background:${p.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${p.icon}" style="font-size:1.1rem;color:white;"></i>
              </div>
              <div style="flex:1;">
                <p style="font-size:0.8rem;font-weight:600;color:white;">${p.label}</p>
                <p style="font-size:0.62rem;color:#9ca3af;">${p.sub}</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:0.6rem;color:#9ca3af;">${p.brands}</p>
              </div>
              <i class="bi bi-chevron-right" style="color:#4b5563;flex-shrink:0;"></i>
            </div>
          `).join('')}
        </div>
        <div style="padding:14px 16px;text-align:center;">
          <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-shield-check me-1" style="color:#a78bfa;"></i>Your payments are 100% secure and encrypted. We do not store your card or UPI details.</p>
        </div>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 16px;background:rgba(8,5,24,0.97);border-top:1px solid rgba(255,255,255,0.06);">
        <button class="btn-primary w-full" onclick="this.innerHTML = '<i class=\'bi bi-arrow-repeat spin\'></i> Processing...'; setTimeout(() => { DATA.currentUser.walletBalance += 500; App.showToast('Payment Successful!'); Router.go('wallet-topup'); }, 1500)">
          <i class="bi bi-lock-fill me-2"></i> Proceed to Pay
        </button>
      </div>
    </div>
  `,

  /* ── ASTRO AI ─────────────────────────────────────────────── */
  'astro-ai': () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="text-align:center;">
          <p style="font-size:1rem;font-weight:700;color:white;">Astro AI ✨</p>
          <p style="font-size:0.62rem;color:#9ca3af;">Your Personal Astrology Assistant</p>
        </div>
        <div style="background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);border-radius:20px;padding:4px 10px;display:flex;align-items:center;gap:4px;">
          <span style="font-size:0.65rem;color:#a78bfa;font-weight:600;">3/3 ✨</span>
          <span style="font-size:0.58rem;color:#9ca3af;">Free questions left</span>
        </div>
      </div>
      <div class="screen-body pb-nav">
        <div style="padding:16px;display:flex;gap:12px;align-items:flex-start;margin-bottom:6px;">
          <div style="flex:1;">
            <h3 style="font-size:1.2rem;font-weight:700;color:#a78bfa;margin-bottom:6px;">Namaste! 🙏</h3>
            <p style="font-size:0.8rem;color:#9ca3af;line-height:1.6;">I'm Astro AI, here to guide you with the wisdom of the stars. Ask me anything about your life, planetary positions, or future.</p>
          </div>
          <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,rgba(76,29,149,0.5),rgba(139,92,246,0.3));border:2px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="bi bi-robot" style="font-size:2rem;color:#a78bfa;"></i>
          </div>
        </div>
        <div style="margin:0 16px 14px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;">
          <div class="flex-between" style="margin-bottom:10px;">
            <p style="font-size:0.82rem;font-weight:600;color:white;">What would you like to know?</p>
            <button style="font-size:0.68rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-clock me-1"></i>View History</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${[
              {icon:'bi bi-briefcase-fill',label:'How will my career be this year?'},
              {icon:'bi bi-heart-fill',color:'#f87171',label:'What about my love life?'},
              {icon:'bi bi-currency-rupee',color:'#eab308',label:'Is this a good time to invest money?'},
              {icon:'bi bi-ring',label:'When will I get married?'},
              {icon:'bi bi-moon-stars-fill',label:"What does my Moon sign mean?"},
              {icon:'bi bi-star-fill',color:'#eab308',label:'What are my strengths and weaknesses?'},
            ].map(q=>`
              <div onclick="App.simulateAIChat(this.innerText)" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:6px;">
                <div style="display:flex;align-items:center;gap:7px;">
                  <i class="${q.icon}" style="color:${q.color||'#a78bfa'};font-size:0.9rem;flex-shrink:0;"></i>
                  <p style="font-size:0.7rem;color:#9ca3af;line-height:1.4;">${q.label}</p>
                </div>
                <i class="bi bi-chevron-right" style="color:#4b5563;font-size:0.65rem;flex-shrink:0;"></i>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(76,29,149,0.4),rgba(46,29,82,0.7));border:1px solid rgba(139,92,246,0.3);border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px;">
          <div style="width:44px;height:44px;border-radius:50%;background:rgba(234,179,8,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="bi bi-crown-fill" style="color:#eab308;font-size:1.1rem;"></i></div>
          <div style="flex:1;">
            <p style="font-size:0.82rem;font-weight:600;color:#eab308;margin-bottom:4px;">Unlock Unlimited Astro AI</p>
            ${['Unlimited questions','In-depth personalized insights','Priority access'].map(f=>`<p style="font-size:0.65rem;color:#9ca3af;margin-bottom:2px;"><i class="bi bi-check-circle-fill me-1" style="color:#4ade80;"></i>${f}</p>`).join('')}
          </div>
          <button class="btn-primary btn-sm" onclick="Router.go('premium-upgrade')">Upgrade Now</button>
        </div>
        <div class="chat-date-divider" style="margin:0 16px 10px;">Today</div>
        <div style="margin:0 16px;display:flex;gap:8px;align-items:flex-end;">
          <div style="width:34px;height:34px;border-radius:50%;background:rgba(139,92,246,0.2);border:1px solid rgba(139,92,246,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="bi bi-robot" style="color:#a78bfa;font-size:0.9rem;"></i></div>
          <div class="chat-msg-astro" style="flex:1;">Hello! I'm Astro AI. How can I help you today?<div class="chat-timestamp">10:30 AM</div></div>
        </div>
      </div>
      <div class="chat-input-bar" style="background:#0f0a1e;">
        <input class="chat-input" type="text" placeholder="Ask anything about astrology...">
        <div class="chat-send-btn"><i class="bi bi-send-fill"></i></div>
      </div>
      <div style="text-align:center;padding:8px;background:#080518;flex-shrink:0;">
        <p style="font-size:0.62rem;color:#6b7280;"><i class="bi bi-shield-check me-1" style="color:#a78bfa;"></i>Your data is private and secure</p>
      </div>
    </div>
  `,


  /* ── ASTRO DASHBOARD ─────────────────────────────────────── */
  'astro-dashboard': () => {
    const a = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn"><i class="bi bi-list"></i></button>
        <div style="text-align:center;">
          <p style="font-size:0.9rem;font-weight:700;color:white;">AstroTalkz Expert</p>
          <p style="font-size:0.62rem;color:#eab308;">✦ by vorabion ✦</p>
        </div>
        <div style="position:relative;">
          <button class="header-btn"><i class="bi bi-bell"></i></button>
          <span class="badge-count">5</span>
        </div>
      </div>
      <div class="screen-body pb-nav">
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(20,8,50,0.95),rgba(46,29,82,0.8));border:1px solid rgba(234,179,8,0.25);border-radius:16px;padding:16px;position:relative;overflow:hidden;">
          <div style="position:absolute;right:-10px;top:-10px;opacity:0.15;">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="56" stroke="#eab308" stroke-width="0.8" stroke-dasharray="3 3"/>
              <circle cx="60" cy="60" r="36" fill="rgba(234,179,8,0.3)"/>
            </svg>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;">
            <div style="position:relative;">
              <img src="${a.avatar}" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid rgba(234,179,8,0.5);">
              <div style="position:absolute;bottom:-2px;right:-2px;width:20px;height:20px;border-radius:50%;background:#22c55e;border:3px solid rgba(8,5,24,0.8);"></div>
            </div>
            <div style="flex:1;">
              <p style="font-size:1rem;font-weight:700;color:white;margin-bottom:2px;">Namaste, ${a.name}! 🙏</p>
              <p style="font-size:0.7rem;color:#eab308;margin-bottom:4px;">${a.title}</p>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);border-radius:20px;padding:3px 10px;">
                <i class="bi bi-shield-check" style="color:#eab308;font-size:0.65rem;"></i>
                <span style="font-size:0.65rem;color:#eab308;font-weight:600;">${a.experience} Experience</span>
              </div>
            </div>
          </div>
          <div style="margin-top:14px;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <p style="font-size:0.7rem;font-weight:600;color:white;">You are ${a.isOnline?'Online':'Offline'}</p>
              <p style="font-size:0.62rem;color:#9ca3af;">${a.isOnline?'Available for new consultations':'Not accepting new requests'}</p>
            </div>
            <div style="width:48px;height:26px;border-radius:13px;background:${a.isOnline?'#22c55e':'#4b5563'};position:relative;cursor:pointer;transition:all 0.3s;" onclick="App.toggleAstroOnline()">
              <div style="position:absolute;top:3px;${a.isOnline?'right:3px':'left:3px'};width:20px;height:20px;border-radius:50%;background:white;box-shadow:0 1px 4px rgba(0,0,0,0.3);transition:all 0.3s;"></div>
            </div>
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:12px;">Today's Overview</p>
          <div class="stats-grid-4">
            ${[
              {label:'Total',val:a.todayStats.total,color:'#a78bfa',icon:'bi bi-people-fill'},
              {label:'Completed',val:a.todayStats.completed,color:'#4ade80',icon:'bi bi-check-circle-fill'},
              {label:'Upcoming',val:a.todayStats.upcoming,color:'#60a5fa',icon:'bi bi-calendar3'},
              {label:'Earnings',val:'₹'+a.todayStats.earnings.toLocaleString(),color:'#eab308',icon:'bi bi-currency-rupee'},
            ].map(s=>`
              <div class="stat-box">
                <i class="${s.icon}" style="color:${s.color};font-size:1rem;margin-bottom:4px;display:block;"></i>
                <p class="stat-box-value" style="color:${s.color};">${s.val}</p>
                <p class="stat-box-label">${s.label}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;">
          <div class="flex-between" style="margin-bottom:10px;">
            <p style="font-size:0.85rem;font-weight:700;color:white;">New Consultation Requests</p>
            <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-bell me-1"></i>Notify Me</button>
          </div>
          ${DATA.astroConsultations ? DATA.astroConsultations.slice(0,2).map(c=>`
            <div class="consult-request-card" style="margin-bottom:8px;">
              <img src="${c.clientAvatar||DATA.currentUser.avatar}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);flex-shrink:0;">
              <div style="flex:1;">
                <p style="font-size:0.82rem;font-weight:600;color:white;">${c.clientName}</p>
                <p style="font-size:0.65rem;color:#eab308;margin:2px 0;">${c.type}</p>
                <p style="font-size:0.62rem;color:#9ca3af;">${c.topic}</p>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
                <span style="font-size:0.7rem;font-weight:700;color:#eab308;">₹ ${c.chatRate}/min</span>
                <div style="display:flex;gap:6px;">
                  <button class="btn-danger" style="padding:5px 10px;font-size:0.62rem;" onclick="this.closest('.card').style.display = 'none'; App.showToast('Request dismissed')">Decline</button>
                  <button class="btn-success" style="padding:5px 10px;font-size:0.62rem;" onclick="Router.go('expert-call')">Accept</button>
                </div>
              </div>
            </div>
          `).join('') : `
            <div style="background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:20px;text-align:center;">
              <i class="bi bi-inbox" style="font-size:2rem;color:#4b5563;margin-bottom:8px;display:block;"></i>
              <p style="font-size:0.8rem;color:#9ca3af;">No new requests right now</p>
              <p style="font-size:0.68rem;color:#6b7280;margin-top:4px;">Requests will appear here when clients reach out</p>
            </div>
          `}
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between" style="margin-bottom:12px;">
            <p style="font-size:0.85rem;font-weight:700;color:white;">Today's Schedule</p>
            <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-calendar3 me-1"></i>View Calendar &gt;</button>
          </div>
          ${[
            {time:'10:30 AM',name:'Priya Sharma',type:'Chat',amount:'₹ 200',status:'upcoming'},
            {time:'12:00 PM',name:'Rahul Gupta',type:'Audio Call',amount:'₹ 450',status:'upcoming'},
            {time:'02:00 PM',name:'Sneha Patil',type:'Chat',amount:'₹ 320',status:'completed'},
            {time:'04:30 PM',name:'Ankit Verma',type:'Audio Call',amount:'₹ 600',status:'upcoming'},
          ].map(s=>`
            <div class="schedule-row">
              <div style="min-width:50px;text-align:center;flex-shrink:0;">
                <p style="font-size:0.7rem;font-weight:600;color:white;">${s.time}</p>
              </div>
              <div style="width:2px;height:32px;background:${s.status==='completed'?'rgba(34,197,94,0.4)':'rgba(139,92,246,0.4)'};border-radius:1px;flex-shrink:0;"></div>
              <div class="schedule-type-icon ${s.type.includes('Chat')?'type-chat':'type-call'}">
                <i class="${s.type.includes('Chat')?'bi bi-chat-fill':'bi bi-telephone-fill'}"></i>
              </div>
              <div style="flex:1;">
                <p style="font-size:0.78rem;font-weight:600;color:white;">${s.name}</p>
                <p style="font-size:0.62rem;color:#9ca3af;">${s.type}</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:0.78rem;font-weight:700;color:#4ade80;">${s.amount}</p>
                <span class="${s.status==='completed'?'badge badge-green':'badge badge-purple'}" style="font-size:0.58rem;">${s.status.charAt(0).toUpperCase()+s.status.slice(1)}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="margin:0 16px 20px;background:linear-gradient(135deg,rgba(76,29,149,0.4),rgba(46,29,82,0.7));border:1px solid rgba(139,92,246,0.3);border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px;cursor:pointer;">
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(234,179,8,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="bi bi-rocket-takeoff-fill" style="color:#eab308;font-size:1.2rem;"></i></div>
          <div style="flex:1;">
            <p style="font-size:0.82rem;font-weight:600;color:#eab308;margin-bottom:3px;">Boost Your Profile</p>
            <p style="font-size:0.65rem;color:#9ca3af;">Get 2x more consultation requests this week</p>
          </div>
          <button class="btn-primary btn-sm" onclick="Router.go('boost-profile')">Boost Now</button>
        </div>
      </div>
    </div>
    `;
  },

  /* ── ASTRO CONSULTS ──────────────────────────────────────── */
  'astro-consults': () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn"><i class="bi bi-list"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308;font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem;font-weight:700;color:white;">Consultations</span>
          <span style="color:#eab308;font-size:0.8rem;">✦——</span>
        </div>
        <button class="header-btn"><i class="bi bi-funnel"></i></button>
      </div>
      <div class="screen-body pb-nav">
        <div class="filter-tabs" style="margin-bottom:14px;">
          ${['All','Upcoming','Ongoing','Completed','Cancelled'].map((t,i)=>`<div class="filter-tab ${i===0?'active':''}">${t}</div>`).join('')}
        </div>
        <p style="font-size:0.72rem;font-weight:600;color:#9ca3af;letter-spacing:0.04em;text-transform:uppercase;padding:0 16px;margin-bottom:8px;">Today · 24 May 2024</p>
        ${[
          {client:'Priya Sharma',avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',type:'Chat',icon:'bi bi-chat-fill',iconColor:'#a78bfa',iconBg:'rgba(139,92,246,0.2)',time:'10:30 AM · 30 min',amount:'₹ 600',status:'Upcoming',badge:'badge-upcoming',topic:'Career Guidance'},
          {client:'Rahul Gupta',avatar:'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&auto=format&fit=crop&q=80',type:'Audio Call',icon:'bi bi-telephone-fill',iconColor:'#4ade80',iconBg:'rgba(34,197,94,0.2)',time:'12:00 PM · 45 min',amount:'₹ 900',status:'Upcoming',badge:'badge-upcoming',topic:'Marriage Timing'},
          {client:'Sneha Patil',avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',type:'Chat',icon:'bi bi-chat-fill',iconColor:'#a78bfa',iconBg:'rgba(139,92,246,0.2)',time:'02:00 PM · 20 min',amount:'₹ 400',status:'Completed',badge:'badge-green',topic:'Love & Relationship'},
        ].map(c=>`
          <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:12px;cursor:pointer;" onclick="Router.go('astro-consult-detail')">
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">
              <img src="${c.avatar}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <p style="font-size:0.85rem;font-weight:600;color:white;">${c.client}</p>
                  <span class="badge ${c.badge}" style="font-size:0.58rem;">${c.status}</span>
                </div>
                <p style="font-size:0.65rem;color:#eab308;margin-top:2px;">${c.topic}</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:0.88rem;font-weight:700;color:#4ade80;">${c.amount}</p>
              </div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;padding-top:8px;border-top:1px solid rgba(255,255,255,0.05);">
              <div style="width:32px;height:32px;border-radius:8px;background:${c.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${c.icon}" style="color:${c.iconColor};font-size:0.85rem;"></i>
              </div>
              <p style="font-size:0.7rem;color:white;font-weight:500;">${c.type}</p>
              <div style="width:4px;height:4px;border-radius:50%;background:#4b5563;"></div>
              <p style="font-size:0.7rem;color:#9ca3af;">${c.time}</p>
              ${c.status==='Upcoming'?`<button class="btn-success" style="margin-left:auto;padding:5px 12px;font-size:0.65rem;" onclick="event.stopPropagation();Router.go('astro-consult-live')">Start</button>`:''}
            </div>
          </div>
        `).join('')}
        <p style="font-size:0.72rem;font-weight:600;color:#9ca3af;letter-spacing:0.04em;text-transform:uppercase;padding:0 16px;margin:6px 0 8px;">Tomorrow · 25 May 2024</p>
        ${[
          {client:'Ankit Verma',avatar:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',type:'Audio Call',icon:'bi bi-telephone-fill',iconColor:'#4ade80',iconBg:'rgba(34,197,94,0.2)',time:'11:00 AM · 30 min',amount:'₹ 900',status:'Upcoming',badge:'badge-upcoming',topic:'Finance & Investment'},
          {client:'Meena Joshi',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',type:'Chat',icon:'bi bi-chat-fill',iconColor:'#a78bfa',iconBg:'rgba(139,92,246,0.2)',time:'03:30 PM · 25 min',amount:'₹ 500',status:'Upcoming',badge:'badge-upcoming',topic:'Health & Wellness'},
        ].map(c=>`
          <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:12px;cursor:pointer;" onclick="Router.go('astro-consult-detail')">
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">
              <img src="${c.avatar}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <p style="font-size:0.85rem;font-weight:600;color:white;">${c.client}</p>
                  <span class="badge ${c.badge}" style="font-size:0.58rem;">${c.status}</span>
                </div>
                <p style="font-size:0.65rem;color:#eab308;margin-top:2px;">${c.topic}</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:0.88rem;font-weight:700;color:#4ade80;">${c.amount}</p>
              </div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;padding-top:8px;border-top:1px solid rgba(255,255,255,0.05);">
              <div style="width:32px;height:32px;border-radius:8px;background:${c.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${c.icon}" style="color:${c.iconColor};font-size:0.85rem;"></i>
              </div>
              <p style="font-size:0.7rem;color:white;font-weight:500;">${c.type}</p>
              <div style="width:4px;height:4px;border-radius:50%;background:#4b5563;"></div>
              <p style="font-size:0.7rem;color:#9ca3af;">${c.time}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `,

  /* ── ASTRO CONSULT DETAIL ────────────────────────────────── */
  'astro-consult-detail': () => `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308;font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem;font-weight:700;color:white;">Consultation Details</span>
          <span style="color:#eab308;font-size:0.8rem;">✦——</span>
        </div>
        <button class="header-btn"><i class="bi bi-three-dots-vertical"></i></button>
      </div>
      <div class="screen-body" style="padding-bottom:90px;">
        <div style="margin:0 16px 10px;background:#0f0a1e;border:1px solid rgba(139,92,246,0.2);border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <p style="font-size:0.62rem;color:#9ca3af;">Consultation ID</p>
            <p style="font-size:0.82rem;font-weight:600;color:white;display:flex;align-items:center;gap:6px;">BK123456 <i class="bi bi-copy" style="color:#a78bfa;font-size:0.7rem;cursor:pointer;"></i></p>
          </div>
          <div style="text-align:right;">
            <p style="font-size:0.62rem;color:#9ca3af;">Booking Date</p>
            <p style="font-size:0.75rem;color:white;">24 May 2024</p>
          </div>
        </div>
        <div style="margin:0 16px 14px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;">
          <div style="display:flex;gap:12px;align-items:flex-start;">
            <div style="position:relative;">
              <img src="${DATA.currentUser.avatar}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.1);">
            </div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                <p style="font-size:0.9rem;font-weight:700;color:white;">${DATA.currentUser.name}</p>
                <span class="badge badge-blue">Returning</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:3px;">
                <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-calendar3 me-1 text-purple"></i>DOB: ${DATA.currentUser.dob}</p>
                <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-clock me-1 text-purple"></i>Time: ${DATA.currentUser.birthTime}</p>
                <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-geo-alt me-1 text-purple"></i>${DATA.currentUser.birthPlace}</p>
                <p style="font-size:0.65rem;color:#9ca3af;"><i class="bi bi-globe me-1 text-purple"></i>Hindi, English</p>
              </div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="header-btn" style="width:34px;height:34px;" onclick="Router.go('chat')"><i class="bi bi-chat-fill" style="color:#a78bfa;"></i></button>
              <button class="header-btn" style="width:34px;height:34px;" onclick="Router.go('audio-call')"><i class="bi bi-telephone-fill" style="color:#4ade80;"></i></button>
            </div>
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:12px;">Chat Consultation</p>
          ${[
            {icon:'bi bi-clock',label:'Duration',val:'30 Minutes'},
            {icon:'bi bi-calendar3',label:'Date & Time',val:'24 May 2024 · 10:30 AM'},
            {icon:'bi bi-currency-rupee',label:'Amount',val:'₹ 20 / min'},
            {icon:'bi bi-wallet2',label:'Total',val:'₹ 600'},
            {icon:'bi bi-check-circle',label:'Status',val:'Upcoming',color:'#a78bfa'},
          ].map(d=>`
            <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <i class="${d.icon}" style="color:#a78bfa;font-size:0.85rem;"></i>
                <span style="font-size:0.75rem;color:#9ca3af;">${d.label}</span>
              </div>
              <span style="font-size:0.75rem;color:${d.color||'white'};font-weight:500;">${d.val}</span>
            </div>
          `).join('')}
        </div>
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(76,29,149,0.4),rgba(46,29,82,0.7));border:1px solid rgba(139,92,246,0.3);border-radius:14px;padding:14px;text-align:center;">
          <p style="font-size:0.72rem;color:#9ca3af;margin-bottom:6px;">Consultation starts in</p>
          <p style="font-size:2rem;font-weight:800;color:white;margin-bottom:12px;" id="countdown-timer">00:42:15</p>
          <button class="btn-primary w-full" onclick="Router.go('astro-consult-live')">
            <i class="bi bi-chat-fill me-2"></i> Start Consultation
          </button>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between" style="margin-bottom:10px;">
            <p style="font-size:0.82rem;font-weight:700;color:white;">Birth Details</p>
            <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View Kundli &gt;</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
            ${[
              {label:'Zodiac Sign',val:'Gemini ♊'},
              {label:'Moon Sign',val:'Scorpio ♏'},
              {label:'Nakshatra',val:'Mrigashira'},
              {label:'Birth Time',val:DATA.currentUser.birthTime},
              {label:'Birth Place',val:DATA.currentUser.birthPlace},
              {label:'DOB',val:DATA.currentUser.dob},
            ].map(d=>`
              <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:8px 10px;">
                <p style="font-size:0.6rem;color:#9ca3af;margin-bottom:3px;">${d.label}</p>
                <p style="font-size:0.75rem;color:white;font-weight:600;">${d.val}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem;font-weight:700;color:white;margin-bottom:8px;">User's Question</p>
          <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 12px;">
            <p style="font-size:0.75rem;color:#9ca3af;line-height:1.6;">I need guidance regarding my career growth in data science and what opportunities are coming in the next 2-3 years.</p>
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between" style="margin-bottom:8px;">
            <p style="font-size:0.82rem;font-weight:700;color:white;">Your Notes</p>
            <button style="font-size:0.72rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-pencil me-1"></i>Edit</button>
          </div>
          <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 12px;min-height:60px;">
            <p style="font-size:0.72rem;color:#6b7280;font-style:italic;">Add your consultation notes here...</p>
          </div>
        </div>
        <div style="margin:0 16px 20px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          ${[
            {icon:'bi bi-calendar-x',label:'Reschedule',bg:'rgba(234,179,8,0.1)',border:'rgba(234,179,8,0.2)',color:'#eab308'},
            {icon:'bi bi-clock-history',label:'View History',bg:'rgba(139,92,246,0.1)',border:'rgba(139,92,246,0.2)',color:'#a78bfa'},
            {icon:'bi bi-x-circle',label:'Cancel',bg:'rgba(239,68,68,0.1)',border:'rgba(239,68,68,0.2)',color:'#f87171'},
            {icon:'bi bi-flag',label:'Report Issue',bg:'rgba(107,114,128,0.1)',border:'rgba(107,114,128,0.2)',color:'#9ca3af'},
          ].map(b=>`
            <div style="background:${b.bg};border:1px solid ${b.border};border-radius:12px;padding:12px;display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="App.showToast('Action: ' + '${b.label}')">
              <i class="${b.icon}" style="color:${b.color};font-size:1rem;"></i>
              <p style="font-size:0.75rem;color:${b.color};font-weight:500;">${b.label}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(8,5,24,0.97);border-top:1px solid rgba(255,255,255,0.06);padding:12px 16px;display:flex;gap:10px;z-index:50;">
        <button class="btn-outline flex-1" onclick="Router.go('chat')"><i class="bi bi-chat me-2"></i>Send Message</button>
        <button class="btn-primary flex-1" onclick="Router.go('audio-call')"><i class="bi bi-telephone me-2"></i>Start Audio Call</button>
      </div>
    </div>
  `,

  /* ── ASTRO CONSULT LIVE (Chat for Expert) ────────────────── */
  'astro-consult-live': () => {
    const a = DATA.currentAstrologer;
    return `
    <div class="screen" style="background:#080518;display:flex;flex-direction:column;">
      <div style="background:#0f0a1e;border-bottom:1px solid rgba(234,179,8,0.15);padding:12px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;">
        <button class="header-btn" style="flex-shrink:0;" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <img src="${DATA.currentUser.avatar}" style="width:42px;height:42px;border-radius:50%;object-fit:cover;border:2px solid rgba(234,179,8,0.4);">
        <div style="flex:1;">
          <p style="font-size:0.88rem;font-weight:700;color:white;">${DATA.currentUser.name}</p>
          <p style="font-size:0.65rem;color:#22c55e;"><i class="bi bi-circle-fill" style="font-size:0.45rem;margin-right:3px;"></i>Online · Gemini ♊</p>
        </div>
        <button class="btn-danger" style="padding:7px 14px;font-size:0.72rem;" onclick="Router.back()"><i class="bi bi-x-lg me-1"></i>End Session</button>
        <button class="header-btn"><i class="bi bi-three-dots-vertical"></i></button>
      </div>
      <div style="background:rgba(139,92,246,0.1);border-bottom:1px solid rgba(139,92,246,0.15);padding:8px 14px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:8px;">
          <i class="bi bi-clock" style="color:#a78bfa;font-size:0.85rem;"></i>
          <span style="font-size:0.72rem;color:#9ca3af;">Session Duration:</span>
          <span style="font-size:0.82rem;font-weight:700;color:white;" id="live-timer">00:05:32</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <i class="bi bi-currency-rupee" style="color:#eab308;font-size:0.85rem;"></i>
          <span style="font-size:0.82rem;font-weight:700;color:#4ade80;">₹ 110.40</span>
        </div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px;scrollbar-width:none;">
        <div class="chat-date-divider">— Today —</div>
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <img src="${DATA.currentUser.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro">
            Namaste! I need help understanding my career path and upcoming opportunities.
            <div class="chat-timestamp">10:30 AM</div>
          </div>
        </div>
        <div class="chat-msg-user" style="align-self:flex-end;">
          Namaste ${DATA.currentUser.name.split(' ')[0]}! 🙏 I've analyzed your birth chart. Your Saturn is in a strong position, indicating career growth from mid-2025 onward.
          <div class="chat-timestamp">10:31 AM ✓✓</div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <img src="${DATA.currentUser.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">
          <div class="chat-msg-astro">
            What specific field should I focus on? I'm currently in data science.
            <div class="chat-timestamp">10:33 AM</div>
          </div>
        </div>
        <div class="chat-msg-user" style="align-self:flex-end;">
          Based on your 3rd and 10th house placement, technology and analytics are very favorable for you. The period between Aug-Dec 2025 shows a major breakthrough opportunity.
          <div class="chat-timestamp">10:35 AM ✓✓</div>
        </div>
      </div>
      <div class="chat-input-bar">
        <button style="color:#9ca3af;font-size:1.1rem;background:none;border:none;cursor:pointer;"><i class="bi bi-plus-lg"></i></button>
        <input class="chat-input" type="text" placeholder="Type your message...">
        <button style="color:#9ca3af;font-size:1rem;background:none;border:none;cursor:pointer;"><i class="bi bi-emoji-smile"></i></button>
        <div class="chat-send-btn"><i class="bi bi-send-fill"></i></div>
      </div>
    </div>
    `;
  },

  /* ── ASTRO EARNINGS ──────────────────────────────────────── */
  'astro-earnings': () => {
    const a = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn"><i class="bi bi-list"></i></button>
        <div class="flex-center gap-6">
          <span style="color:#eab308;font-size:0.8rem;">——✦</span>
          <span style="font-size:1rem;font-weight:700;color:white;">Earnings</span>
          <span style="color:#eab308;font-size:0.8rem;">✦——</span>
        </div>
        <button style="background:#0f0a1e;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:6px 12px;color:white;font-size:0.72rem;display:flex;align-items:center;gap:5px;cursor:pointer;">
          May 2025 <i class="bi bi-chevron-down" style="font-size:0.65rem;"></i>
        </button>
      </div>
      <div class="screen-body pb-nav">
        <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(20,8,50,0.95),rgba(46,29,82,0.8));border:1px solid rgba(234,179,8,0.25);border-radius:16px;padding:16px;">
          <p style="font-size:0.72rem;color:#9ca3af;margin-bottom:4px;">Total Earnings This Month</p>
          <p style="font-size:2.2rem;font-weight:800;color:#4ade80;margin-bottom:10px;">₹ ${(a.todayStats.earnings * 7).toLocaleString()}</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${[
              {label:'Chat',val:'₹ 32,400',icon:'bi bi-chat-fill',color:'#a78bfa'},
              {label:'Audio Call',val:'₹ 18,900',icon:'bi bi-telephone-fill',color:'#4ade80'},
              {label:'Other',val:'₹ 14,850',icon:'bi bi-stars',color:'#eab308'},
            ].map(e=>`
              <div style="background:rgba(0,0,0,0.25);border-radius:10px;padding:10px 8px;text-align:center;">
                <i class="${e.icon}" style="color:${e.color};font-size:1rem;margin-bottom:4px;display:block;"></i>
                <p style="font-size:0.75rem;font-weight:700;color:white;">${e.val}</p>
                <p style="font-size:0.6rem;color:#9ca3af;">${e.label}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between" style="margin-bottom:12px;">
            <p style="font-size:0.85rem;font-weight:700;color:white;">Earnings Overview</p>
            <div style="display:flex;gap:4px;">
              ${['Week','Month','Year'].map((t,i)=>`<button class="filter-tab ${i===1?'active':''}" style="padding:4px 10px;font-size:0.65rem;">${t}</button>`).join('')}
            </div>
          </div>
          <div style="height:120px;position:relative;background:rgba(255,255,255,0.02);border-radius:10px;overflow:hidden;padding:10px;">
            <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(139,92,246,0.4)"/>
                  <stop offset="100%" stop-color="rgba(139,92,246,0)"/>
                </linearGradient>
              </defs>
              <path d="M 0 80 L 30 65 L 60 55 L 90 45 L 120 50 L 150 35 L 180 40 L 210 25 L 240 30 L 270 20 L 300 15" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M 0 80 L 30 65 L 60 55 L 90 45 L 120 50 L 150 35 L 180 40 L 210 25 L 240 30 L 270 20 L 300 15 L 300 100 L 0 100 Z" fill="url(#earningsGrad)"/>
            </svg>
            <div style="position:absolute;top:10px;left:10px;font-size:0.62rem;color:#9ca3af;">₹ 0</div>
            <div style="position:absolute;bottom:10px;right:10px;font-size:0.62rem;color:#9ca3af;">31 May</div>
          </div>
        </div>
        <div style="margin:0 16px 14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          ${[
            {label:'This Week',val:'₹ 18,750',icon:'bi bi-calendar-week',color:'#a78bfa',change:'+12%'},
            {label:'This Month',val:'₹ 66,150',icon:'bi bi-calendar-month',color:'#4ade80',change:'+8%'},
            {label:'This Year',val:'₹ 5,24,320',icon:'bi bi-calendar3',color:'#eab308',change:'+24%'},
            {label:'All Time',val:'₹ 12,48,600',icon:'bi bi-trophy',color:'#60a5fa',change:null},
          ].map(s=>`
            <div class="card">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <i class="${s.icon}" style="color:${s.color};font-size:1rem;"></i>
                ${s.change?`<span style="font-size:0.62rem;color:#4ade80;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:10px;padding:2px 7px;">${s.change}</span>`:''}
              </div>
              <p style="font-size:0.95rem;font-weight:700;color:white;">${s.val}</p>
              <p style="font-size:0.65rem;color:#9ca3af;margin-top:3px;">${s.label}</p>
            </div>
          `).join('')}
        </div>
        <div class="flex-between" style="padding:0 16px;margin-bottom:10px;">
          <p style="font-size:0.85rem;font-weight:700;color:white;">Recent Transactions</p>
          <button style="font-size:0.7rem;color:#a78bfa;background:none;border:none;cursor:pointer;">View All &gt;</button>
        </div>
        ${[
          {name:'Priya Sharma',type:'Chat · 30 min',date:'24 May · 10:30 AM',amount:'+₹ 600',icon:'bi bi-chat-fill',color:'#a78bfa'},
          {name:'Rahul Gupta',type:'Audio Call · 45 min',date:'24 May · 12:00 PM',amount:'+₹ 900',icon:'bi bi-telephone-fill',color:'#4ade80'},
          {name:'Sneha Patil',type:'Chat · 20 min',date:'23 May · 03:30 PM',amount:'+₹ 400',icon:'bi bi-chat-fill',color:'#a78bfa'},
          {name:'Ankit Verma',type:'Audio Call · 60 min',date:'23 May · 06:00 PM',amount:'+₹ 1,200',icon:'bi bi-telephone-fill',color:'#4ade80'},
        ].map(t=>`
          <div style="margin:0 16px 8px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center;">
            <div style="width:40px;height:40px;border-radius:50%;background:rgba(34,197,94,0.12);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <i class="${t.icon}" style="color:${t.color};font-size:0.9rem;"></i>
            </div>
            <div style="flex:1;">
              <p style="font-size:0.82rem;font-weight:600;color:white;">${t.name}</p>
              <p style="font-size:0.65rem;color:#9ca3af;margin-top:2px;">${t.type} · ${t.date}</p>
            </div>
            <p style="font-size:0.9rem;font-weight:700;color:#4ade80;">${t.amount}</p>
          </div>
        `).join('')}
        <div style="height:16px;"></div>
      </div>
    </div>
    `;
  },

  /* ── ASTRO PROFILE (Expert) ──────────────────────────────── */
  'astro-profile': (params) => {
    if (STATE && STATE.role === 'astrologer') {
      const a = DATA.currentAstrologer;
      return `
      <div class="screen cosmic-bg" style="display:flex;flex-direction:column;">
        <div class="screen-header">
          <button class="header-btn" onclick="Router.go('settings')"><i class="bi bi-gear"></i></button>
          <div class="flex-center gap-6">
            <span style="color:#eab308;font-size:0.8rem;">——✦</span>
            <span style="font-size:1rem;font-weight:700;color:white;">My Profile</span>
            <span style="color:#eab308;font-size:0.8rem;">✦——</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button class="header-btn" onclick="App.showToast('Share link ready ✓')"><i class="bi bi-box-arrow-up"></i></button>
          </div>
        </div>
        <div class="screen-body pb-nav">
          <div style="margin:0 16px 14px;background:linear-gradient(135deg,rgba(20,8,50,0.95),rgba(46,29,82,0.8));border:1px solid rgba(234,179,8,0.25);border-radius:16px;padding:16px;position:relative;overflow:hidden;">
            <div style="position:absolute;right:-10px;top:-10px;opacity:0.15;"><svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="56" stroke="#eab308" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="60" cy="60" r="36" fill="rgba(234,179,8,0.3)"/></svg></div>
            <div style="display:flex;gap:14px;align-items:flex-start;">
              <div style="position:relative;">
                <img src="${a.avatar}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid rgba(234,179,8,0.5);">
                <div style="position:absolute;bottom:-2px;right:-2px;width:22px;height:22px;border-radius:50%;background:#7c3aed;border:2px solid #080518;display:flex;align-items:center;justify-content:center;cursor:pointer;"><i class="bi bi-camera-fill" style="color:white;font-size:0.6rem;"></i></div>
              </div>
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                  <h2 style="font-size:1rem;font-weight:700;color:white;">${a.fullName}</h2>
                  <i class="bi bi-patch-check-fill" style="color:#a78bfa;font-size:0.85rem;"></i>
                </div>
                <p style="font-size:0.72rem;color:#eab308;margin-bottom:3px;">${a.title}</p>
                <div style="display:flex;align-items:center;gap:4px;margin-bottom:6px;">
                  <i class="bi bi-star-fill" style="color:#eab308;font-size:0.7rem;"></i>
                  <span style="font-size:0.72rem;color:white;">${a.rating}</span>
                  <span style="font-size:0.68rem;color:#9ca3af;">(${a.reviews} Reviews)</span>
                </div>
                <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);border-radius:20px;padding:3px 10px;">
                  <i class="bi bi-shield-check" style="color:#eab308;font-size:0.65rem;"></i>
                  <span style="font-size:0.65rem;color:#eab308;font-weight:600;">${a.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);margin:0 16px 14px;background:#0f0a1e;border:1px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden;">
            ${[
              {val:a.totalConsultations,label:'Consultations',color:'#a78bfa'},
              {val:`${a.reviews}+`,label:'Happy Clients',color:'#4ade80'},
              {val:a.rating,label:'Avg. Rating',color:'#eab308'},
              {val:'<2 Min',label:'Response',color:'#60a5fa'},
            ].map(s=>`
              <div style="padding:12px 4px;text-align:center;border-right:1px solid rgba(255,255,255,0.05);">
                <p style="font-size:1rem;font-weight:700;color:${s.color};">${s.val}</p>
                <p style="font-size:0.58rem;color:#9ca3af;">${s.label}</p>
              </div>
            `).join('')}
          </div>
          <div style="margin:0 16px 14px;" class="card">
            <div class="flex-between" style="margin-bottom:8px;">
              <p style="font-size:0.82rem;font-weight:700;color:white;">About Me</p>
              <button style="font-size:0.72rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-pencil me-1"></i>Edit</button>
            </div>
            <p style="font-size:0.75rem;color:#9ca3af;line-height:1.6;">${a.fullName} is a trusted name in Vedic Astrology and Numerology with ${a.experience} of experience. Specializes in Love, Career, Finance, Marriage and Health related solutions.</p>
          </div>
          <div style="margin:0 16px 14px;" class="card">
            <p style="font-size:0.82rem;font-weight:700;color:white;margin-bottom:10px;">My Expertise</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              ${a.expertise.map(e=>`
                <span style="background:rgba(10,6,24,0.8);border:1px solid rgba(139,92,246,0.3);border-radius:8px;padding:7px 12px;font-size:0.7rem;color:white;display:flex;align-items:center;gap:5px;">
                  <i class="bi bi-stars" style="color:#eab308;font-size:0.65rem;"></i> ${e}
                </span>
              `).join('')}
            </div>
          </div>
          <div style="margin:0 16px 14px;" class="card">
            <div class="flex-between" style="margin-bottom:10px;">
              <p style="font-size:0.82rem;font-weight:700;color:white;">Availability</p>
              <button style="font-size:0.72rem;color:#a78bfa;background:none;border:none;cursor:pointer;"><i class="bi bi-pencil me-1"></i>Edit</button>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
              ${a.availableDays.map(d=>`<span style="background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;border-radius:20px;padding:4px 12px;font-size:0.7rem;">${d}</span>`).join('')}
            </div>
            <p style="font-size:0.72rem;color:#9ca3af;"><i class="bi bi-clock me-1 text-purple"></i>${a.availableHours}</p>
          </div>
          <div class="menu-group" style="margin-bottom:16px;">
            ${[
              {icon:'bi bi-bank',bg:'icon-green',title:'Payout & Bank Details',sub:'Manage your bank account'},
              {icon:'bi bi-patch-check',bg:'icon-blue',title:'Verification & Documents',sub:'KYC and profile verification'},
              {icon:'bi bi-bell',bg:'icon-purple',title:'Notifications',sub:'Manage notification preferences'},
              {icon:'bi bi-headset',bg:'icon-teal',title:'Help & Support',sub:'Get help from our team'},
              {icon:'bi bi-box-arrow-right',bg:'icon-red',title:'Log Out',sub:'Sign out of your account'},
            ].map(m=>`
              <div class="menu-row" onclick="Router.go('expert-' + '${m.title}'.toLowerCase().replace(/ /g, '-'))">
                <div class="menu-row-icon ${m.bg}"><i class="${m.icon}"></i></div>
                <div class="menu-row-text"><p class="menu-row-title">${m.title}</p><p class="menu-row-sub">${m.sub}</p></div>
                <i class="bi bi-chevron-right menu-row-arrow"></i>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      `;
    }
    // Fall through to user-facing astrologer-profile
    const astro = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    return Screens['astrologer-profile']({id: astro.id});
  },

  /* ── APP DRAWER (Menu Screen) ──────────────────────────────── */
  'app-drawer': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-x-lg"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Menu</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="menu-group">
          <div class="menu-row" onclick="Router.go('profile')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-person-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">My Profile</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('wallet-topup')">
            <div class="menu-row-icon icon-green"><i class="bi bi-wallet-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Wallet</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('bookings')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-calendar-check-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">My Bookings</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('settings')">
            <div class="menu-row-icon icon-teal"><i class="bi bi-gear-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Settings</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
        <button class="btn-danger w-full" style="margin-top: 24px; padding: 12px; border-radius: var(--radius-md);" onclick="Router.go('user-login')">
          <i class="bi bi-box-arrow-right me-2"></i> Log Out
        </button>
      </div>
    </div>
  `,

  /* ── NOTIFICATIONS ─────────────────────────────────────────── */
  'notifications': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Notifications</span>
        <button class="header-btn" onclick="document.querySelectorAll('.screen-body .card').forEach(el => el.style.display='none'); App.showToast('All clear!')"><i class="bi bi-trash"></i></button>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:16px; margin-bottom:12px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:40px; height:40px; border-radius:50%; background:var(--gold-bg); color:var(--gold); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <i class="bi bi-star-fill"></i>
            </div>
            <div>
              <p style="font-size:0.9rem; font-weight:600; color:white;">Daily Horoscope Ready!</p>
              <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">Your personalized daily reading is available now.</p>
              <p style="font-size:0.65rem; color:var(--text-muted); margin-top:8px;">2 hours ago</p>
            </div>
          </div>
        </div>
        <div class="card" style="padding:16px; margin-bottom:12px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:40px; height:40px; border-radius:50%; background:var(--purple-bg); color:var(--purple-light); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <i class="bi bi-wallet2"></i>
            </div>
            <div>
              <p style="font-size:0.9rem; font-weight:600; color:white;">Wallet Top-up Successful</p>
              <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">₹500 has been added to your AstroTalkz wallet.</p>
              <p style="font-size:0.65rem; color:var(--text-muted); margin-top:8px;">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── KUNDALI ───────────────────────────────────────────────── */
  'kundali': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Kundli</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="text-align:center; padding:32px 16px; margin-bottom:24px;">
          <i class="bi bi-grid-3x3-gap-fill" style="font-size:3rem; color:var(--purple-light); opacity:0.8;"></i>
          <h3 style="color:white; font-size:1.1rem; margin-top:16px;">Create New Kundli</h3>
          <p style="color:var(--text-secondary); font-size:0.8rem; margin:8px 0 16px;">Get deep insights into your life with a detailed birth chart analysis.</p>
          <button class="btn-primary" onclick="Router.go('kundali-create')">Create Kundli</button>
        </div>
        <p class="section-label">Saved Kundlis</p>
        <div class="card" style="padding:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <p style="color:white; font-weight:600; font-size:0.9rem;">Priya Sharma</p>
              <p style="color:var(--text-muted); font-size:0.75rem; margin-top:2px;">15 Aug 1995 • 10:30 AM • New Delhi</p>
            </div>
            <button class="btn-outline btn-sm" onclick="Router.go('kundali-details')">Open</button>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── MATCH MAKING ──────────────────────────────────────────── */
  'matchmaking': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Match Making</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;">
          <div class="card" style="padding:16px;">
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px;">Boy's Details</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="color:white; font-weight:600;">Select Boy's Kundli</span>
              <i class="bi bi-chevron-down" style="color:var(--text-muted);"></i>
            </div>
          </div>
          
          <div style="display:flex; justify-content:center; margin:-8px 0; z-index:10; position:relative;">
            <div style="width:40px; height:40px; border-radius:50%; background:var(--purple-primary); display:flex; align-items:center; justify-content:center; border:3px solid var(--bg-base); color:white;">
              <i class="bi bi-heart-fill"></i>
            </div>
          </div>

          <div class="card" style="padding:16px;">
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px;">Girl's Details</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="color:white; font-weight:600;">Select Girl's Kundli</span>
              <i class="bi bi-chevron-down" style="color:var(--text-muted);"></i>
            </div>
          </div>
        </div>
        
        <button class="btn-primary w-full" style="padding:14px; font-size:1rem; border-radius:var(--radius-md);" onclick="Router.go('matchmaking-result')">
          Check Compatibility
        </button>
      </div>
    </div>
  `,

  /* ── POOJA & REMEDIES ──────────────────────────────────────── */
  'pooja-remedies': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Pooja & Remedies</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="margin-bottom:16px; overflow:hidden;">
          <div style="height:120px; background:linear-gradient(45deg, #7c3aed, #d97706); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-lamp-fill" style="font-size:3rem; color:white; opacity:0.8;"></i>
          </div>
          <div style="padding:16px;">
            <h3 style="color:white; font-size:1.05rem; font-weight:700; margin-bottom:4px;">Navgraha Shanti Pooja</h3>
            <p style="color:var(--text-secondary); font-size:0.8rem; margin-bottom:12px;">Appease the nine planets and remove doshas from your birth chart.</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="color:var(--gold); font-weight:700;">₹2,500</span>
              <button class="btn-primary btn-sm" onclick="Router.go('pooja-booking')">Book Now</button>
            </div>
          </div>
        </div>
        
        <div class="card" style="margin-bottom:16px; overflow:hidden;">
          <div style="height:120px; background:linear-gradient(45deg, #059669, #10b981); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-gem" style="font-size:3rem; color:white; opacity:0.8;"></i>
          </div>
          <div style="padding:16px;">
            <h3 style="color:white; font-size:1.05rem; font-weight:700; margin-bottom:4px;">Gemstone Recommendation</h3>
            <p style="color:var(--text-secondary); font-size:0.8rem; margin-bottom:12px;">Find the perfect gemstone for luck, health, and prosperity.</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="color:var(--gold); font-weight:700;">₹499</span>
              <button class="btn-primary btn-sm" onclick="Router.go('pooja-booking')">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── SETTINGS ──────────────────────────────────────────────── */
  'settings': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Settings</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="menu-group" style="margin-bottom:24px;">
          <div class="menu-row">
            <div class="menu-row-icon icon-blue"><i class="bi bi-bell-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Push Notifications</p></div>
            <div>
              <label style="position:relative; display:inline-block; width:44px; height:24px;">
                <input type="checkbox" checked style="opacity:0; width:0; height:0;">
                <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background-color:var(--purple-primary); border-radius:24px; transition:.4s;"></span>
                <span style="position:absolute; height:18px; width:18px; left:3px; bottom:3px; background-color:white; border-radius:50%; transition:.4s; transform:translateX(20px);"></span>
              </label>
            </div>
          </div>
          <div class="menu-row">
            <div class="menu-row-icon icon-teal"><i class="bi bi-moon-stars-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Dark Mode</p></div>
            <div>
              <span style="color:var(--text-secondary); font-size:0.8rem; margin-right:8px;">Always On</span>
            </div>
          </div>
        </div>
        
        <p class="section-label">Support</p>
        <div class="menu-group" style="margin-bottom:24px;">
          <div class="menu-row" onclick="Router.go('help-faq')">
            <div class="menu-row-icon" style="background:#4b5563;"><i class="bi bi-question-circle-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Help & FAQ</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('contact-support')">
            <div class="menu-row-icon" style="background:#4b5563;"><i class="bi bi-headset"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Contact Support</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
        
        <p class="section-label">Legal</p>
        <div class="menu-group">
          <div class="menu-row" onclick="Router.go('legal-doc')">
            <div class="menu-row-text"><p class="menu-row-title">Terms of Service</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('legal-doc')">
            <div class="menu-row-text"><p class="menu-row-title">Privacy Policy</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
        
        <p style="text-align:center; color:var(--text-muted); font-size:0.7rem; margin-top:32px;">AstroTalkz v1.0.0<br>Made with 💜 by vorabion</p>
      </div>
    </div>
  `,
  /* ── KUNDALI CREATE ────────────────────────────────────────── */
  'kundali-create': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">New Kundli</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:16px;">
          <label style="color:var(--text-secondary); font-size:0.75rem;">Full Name</label>
          <input type="text" placeholder="Enter name" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:white; padding:12px; border-radius:8px; margin:8px 0 16px;">
          
          <label style="color:var(--text-secondary); font-size:0.75rem;">Date of Birth</label>
          <input type="date" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:white; padding:12px; border-radius:8px; margin:8px 0 16px;">
          
          <label style="color:var(--text-secondary); font-size:0.75rem;">Time of Birth</label>
          <input type="time" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:white; padding:12px; border-radius:8px; margin:8px 0 16px;">
          
          <label style="color:var(--text-secondary); font-size:0.75rem;">Place of Birth</label>
          <input type="text" placeholder="City, State, Country" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:white; padding:12px; border-radius:8px; margin:8px 0;">
        </div>
        <button class="btn-primary w-full" style="margin-top:24px; padding:14px; border-radius:var(--radius-md);" onclick="Router.go('kundali-details')">
          Generate Kundli
        </button>
      </div>
    </div>
  `,

  /* ── KUNDALI DETAILS ───────────────────────────────────────── */
  'kundali-details': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Kundli Details</span>
        <button class="header-btn"><i class="bi bi-share"></i></button>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:16px; text-align:center; margin-bottom:16px;">
          <h2 style="color:white; font-size:1.2rem; font-weight:700;">Priya Sharma</h2>
          <p style="color:var(--gold); font-size:0.85rem; margin-top:4px;">15 Aug 1995 • 10:30 AM • New Delhi</p>
        </div>
        
        <p class="section-label">Lagna Chart (Birth Chart)</p>
        <div class="card" style="padding:16px; display:flex; justify-content:center; margin-bottom:16px;">
          <div style="width:100%; max-width:250px; aspect-ratio:1; border:2px solid var(--purple-primary); position:relative; background:rgba(108,43,217,0.05);">
            <!-- Mock Kundli Grid -->
            <svg viewBox="0 0 100 100" style="width:100%; height:100%;">
              <line x1="0" y1="0" x2="100" y2="100" stroke="var(--purple-primary)" stroke-width="1"></line>
              <line x1="100" y1="0" x2="0" y2="100" stroke="var(--purple-primary)" stroke-width="1"></line>
              <line x1="50" y1="0" x2="100" y2="50" stroke="var(--purple-primary)" stroke-width="1"></line>
              <line x1="100" y1="50" x2="50" y2="100" stroke="var(--purple-primary)" stroke-width="1"></line>
              <line x1="50" y1="100" x2="0" y2="50" stroke="var(--purple-primary)" stroke-width="1"></line>
              <line x1="0" y1="50" x2="50" y2="0" stroke="var(--purple-primary)" stroke-width="1"></line>
              <text x="50" y="25" fill="white" font-size="6" text-anchor="middle">Su, Me</text>
              <text x="25" y="50" fill="white" font-size="6" text-anchor="middle">Mo</text>
              <text x="75" y="50" fill="white" font-size="6" text-anchor="middle">Ju</text>
              <text x="50" y="75" fill="white" font-size="6" text-anchor="middle">Ma</text>
            </svg>
          </div>
        </div>
        
        <p class="section-label">Planetary Positions</p>
        <div class="card" style="padding:0;">
          <div style="display:flex; justify-content:space-between; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.05);">
            <span style="color:var(--text-secondary); font-size:0.8rem;">Sun (Surya)</span>
            <span style="color:white; font-size:0.8rem; font-weight:600;">Leo (Simha)</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.05);">
            <span style="color:var(--text-secondary); font-size:0.8rem;">Moon (Chandra)</span>
            <span style="color:white; font-size:0.8rem; font-weight:600;">Aries (Mesha)</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:12px 16px;">
            <span style="color:var(--text-secondary); font-size:0.8rem;">Mars (Mangal)</span>
            <span style="color:white; font-size:0.8rem; font-weight:600;">Scorpio (Vrishchika)</span>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── MATCHMAKING RESULT ────────────────────────────────────── */
  'matchmaking-result': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Match Results</span>
        <button class="header-btn"><i class="bi bi-share"></i></button>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:24px 16px; text-align:center; margin-bottom:24px;">
          <div style="display:flex; justify-content:center; align-items:center; gap:16px;">
            <div style="width:60px; height:60px; border-radius:50%; background:var(--purple-bg); display:flex; align-items:center; justify-content:center; color:white; border:2px solid var(--purple-primary);">
              <i class="bi bi-person-fill" style="font-size:1.5rem;"></i>
            </div>
            <i class="bi bi-heart-fill" style="color:var(--red); font-size:1.2rem; animation: heartbeat 1.5s infinite;"></i>
            <div style="width:60px; height:60px; border-radius:50%; background:var(--gold-bg); display:flex; align-items:center; justify-content:center; color:white; border:2px solid var(--gold);">
              <i class="bi bi-person-fill" style="font-size:1.5rem;"></i>
            </div>
          </div>
          <h2 style="color:white; font-size:1.8rem; font-weight:700; margin-top:24px;">26.5 / 36</h2>
          <p style="color:var(--green-online); font-size:0.9rem; font-weight:600; margin-top:4px;">Excellent Match (Ashtakoot Guna)</p>
        </div>
        
        <p class="section-label">Detailed Analysis</p>
        <div class="card" style="padding:16px; margin-bottom:16px;">
          <h4 style="color:white; font-size:0.9rem; margin-bottom:8px;">Varna (Work) - 1/1</h4>
          <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;"><div style="width:100%; height:100%; background:var(--gold); border-radius:3px;"></div></div>
          
          <h4 style="color:white; font-size:0.9rem; margin:16px 0 8px;">Vashya (Dominance) - 2/2</h4>
          <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;"><div style="width:100%; height:100%; background:var(--gold); border-radius:3px;"></div></div>
          
          <h4 style="color:white; font-size:0.9rem; margin:16px 0 8px;">Tara (Destiny) - 1.5/3</h4>
          <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;"><div style="width:50%; height:100%; background:var(--gold); border-radius:3px;"></div></div>
          
          <h4 style="color:white; font-size:0.9rem; margin:16px 0 8px;">Bhakoot (Love) - 7/7</h4>
          <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;"><div style="width:100%; height:100%; background:var(--green-online); border-radius:3px;"></div></div>
          
          <h4 style="color:white; font-size:0.9rem; margin:16px 0 8px;">Nadi (Health) - 8/8</h4>
          <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;"><div style="width:100%; height:100%; background:var(--green-online); border-radius:3px;"></div></div>
        </div>
        
        <button class="btn-primary w-full" onclick="Router.go('consult')" style="padding:14px; border-radius:var(--radius-md);">Consult Astrologer for Details</button>
      </div>
    </div>
  `,

  /* ── POOJA BOOKING ─────────────────────────────────────────── */
  'pooja-booking': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Booking</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:16px; margin-bottom:24px;">
          <h3 style="color:white; font-size:1.1rem; font-weight:700;">Navgraha Shanti Pooja</h3>
          <p style="color:var(--text-secondary); font-size:0.8rem; margin-top:4px;">Includes pandit dakshina and samagri for sankalp.</p>
          <div style="display:flex; justify-content:space-between; margin-top:16px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.1);">
            <span style="color:var(--text-secondary);">Total Amount</span>
            <span style="color:var(--gold); font-size:1.2rem; font-weight:700;">₹2,500</span>
          </div>
        </div>
        
        <p class="section-label">Select Date</p>
        <div style="display:flex; gap:12px; margin-bottom:24px; overflow-x:auto; padding-bottom:8px;">
          <div class="card" style="padding:12px 16px; text-align:center; border:1px solid var(--purple-primary); background:var(--purple-bg); min-width:80px;">
            <p style="color:white; font-weight:700;">24 Aug</p>
            <p style="color:var(--gold); font-size:0.75rem;">Thu</p>
          </div>
          <div class="card" style="padding:12px 16px; text-align:center; min-width:80px;">
            <p style="color:white; font-weight:700;">25 Aug</p>
            <p style="color:var(--text-muted); font-size:0.75rem;">Fri</p>
          </div>
          <div class="card" style="padding:12px 16px; text-align:center; min-width:80px;">
            <p style="color:white; font-weight:700;">26 Aug</p>
            <p style="color:var(--text-muted); font-size:0.75rem;">Sat</p>
          </div>
        </div>
        
        <button class="btn-primary w-full" style="padding:14px; border-radius:var(--radius-md);" onclick="this.innerHTML = '<i class=\'bi bi-arrow-repeat spin\'></i> Processing...'; setTimeout(() => { App.showToast('Pooja Booked Successfully!'); Router.go('home'); }, 1500)">
          Pay ₹2,500
        </button>
      </div>
    </div>
  `,

  /* ── HELP & FAQ ────────────────────────────────────────────── */
  'help-faq': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Help & FAQ</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <div class="card" style="padding:16px; margin-bottom:12px;">
          <h4 style="color:white; font-size:0.9rem; font-weight:600;">How to talk to an Astrologer?</h4>
          <p style="color:var(--text-secondary); font-size:0.8rem; margin-top:8px;">Go to Consult, select an astrologer, ensure you have sufficient wallet balance, and click on Chat or Call.</p>
        </div>
        <div class="card" style="padding:16px; margin-bottom:12px;">
          <h4 style="color:white; font-size:0.9rem; font-weight:600;">Is my data safe and private?</h4>
          <p style="color:var(--text-secondary); font-size:0.8rem; margin-top:8px;">Yes, 100%. We never share your personal information or birth details with anyone.</p>
        </div>
        <div class="card" style="padding:16px; margin-bottom:12px;">
          <h4 style="color:white; font-size:0.9rem; font-weight:600;">How do refunds work?</h4>
          <p style="color:var(--text-secondary); font-size:0.8rem; margin-top:8px;">If your call is disconnected due to a network error, the amount for unutilized minutes is auto-refunded to your wallet within 2 hours.</p>
        </div>
      </div>
    </div>
  `,

  /* ── CONTACT SUPPORT ───────────────────────────────────────── */
  'contact-support': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:32px; height:32px; border-radius:50%; background:var(--purple-primary); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-headset" style="color:white;"></i>
          </div>
          <div style="display:flex; flex-direction:column;">
            <span style="font-size:0.9rem; font-weight:700; color:white;">AstroTalkz Support</span>
            <span style="font-size:0.65rem; color:var(--green-online);">Usually replies in 5 mins</span>
          </div>
        </div>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding:16px; display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="background:var(--card-bg); padding:12px; border-radius:12px; border-bottom-left-radius:0; max-width:80%; margin-bottom:16px; align-self:flex-start; border:1px solid rgba(255,255,255,0.05);">
          <p style="color:white; font-size:0.85rem; line-height:1.4;">Hi! How can we help you today?</p>
          <p style="color:var(--text-muted); font-size:0.6rem; margin-top:4px; text-align:right;">10:00 AM</p>
        </div>
      </div>
      <div style="padding:12px 16px; background:var(--bg-base); border-top:1px solid rgba(255,255,255,0.05); display:flex; gap:12px;">
        <input type="text" placeholder="Type your message..." style="flex:1; background:rgba(255,255,255,0.05); border:none; color:white; padding:10px 16px; border-radius:24px; outline:none;">
        <button style="width:40px; height:40px; border-radius:50%; background:var(--gold); display:flex; align-items:center; justify-content:center;">
          <i class="bi bi-send-fill" style="color:#080518;"></i>
        </button>
      </div>
    </div>
  `,

  /* ── LEGAL (Terms & Privacy) ───────────────────────────────── */
  'legal-doc': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <span style="font-size:1rem; font-weight:700; color:white;">Legal</span>
        <div style="width:36px;"></div>
      </div>
      <div class="screen-body" style="padding: 16px;">
        <h2 style="color:white; font-size:1.4rem; font-weight:700; margin-bottom:16px;">Legal Information</h2>
        <p style="color:var(--text-secondary); font-size:0.85rem; line-height:1.6; margin-bottom:12px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style="color:var(--text-secondary); font-size:0.85rem; line-height:1.6; margin-bottom:12px;">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style="color:var(--text-secondary); font-size:0.85rem; line-height:1.6;">
          This is a mock screen for legal documents like Terms of Service and Privacy Policy. In a real app, this content would be fetched from a server.
        </p>
      </div>
    </div>
  `,

}; /* END Screens object */
