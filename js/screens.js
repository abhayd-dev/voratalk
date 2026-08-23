/* ============================================================
   AstroTalkz by vorabion — Screen Templates
   Comprehensive Interactive Prototype Screens
   STRICTLY NO VIDEO CALLS (Only Chat and Audio Call).
   ============================================================ */

const Screens = {

  /* ── SHARED ASTROLOGER CARDS GENERATOR ───────────────────── */
  renderAstrologerCards(astros) {
    if (!astros || astros.length === 0) {
      return `
        <div style="text-align:center; padding:32px 16px; color:#9ca3af;">
          <i class="bi bi-search" style="font-size:2rem; opacity:0.5; display:block; margin-bottom:8px;"></i>
          <p style="font-size:0.85rem; font-weight:600; color:white;">No astrologers found</p>
          <p style="font-size:0.7rem; margin-top:4px;">Try searching for a different name, skill or language.</p>
        </div>
      `;
    }

    return astros.map(a => {
      const isFav = DATA.favourites && DATA.favourites.includes(a.id);
      return `
        <div class="astro-card" onclick="Router.go('astro-profile', {id:'${a.id}'})">
          <!-- Top Row: Avatar on Left, Full Info on Right -->
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <!-- Avatar -->
            <div class="astro-avatar-wrap" style="flex-shrink:0;">
              <img src="${a.avatar}" class="astro-avatar" alt="${a.name}">
              <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}"></div>
            </div>

            <!-- Middle Info Column -->
            <div class="astro-card-info" style="flex:1; min-width:0;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="display:flex; align-items:center; gap:5px; flex:1; min-width:0; padding-right:6px;">
                  <span class="astro-name" style="font-size:0.92rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name}</span>
                  ${a.verified ? '<i class="bi bi-patch-check-fill verified" style="color:#a78bfa; font-size:0.8rem; flex-shrink:0;"></i>' : ''}
                </div>
                <button onclick="App.AstrologerService.toggleFavourite('${a.id}', event)" style="background:none; border:none; color:${isFav ? '#ef4444' : 'rgba(255,255,255,0.35)'}; font-size:1.1rem; cursor:pointer; padding:0; flex-shrink:0;">
                  <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
                </button>
              </div>

              <div class="astro-specialty" style="font-size:0.7rem; color:var(--gold); margin:2px 0 3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.expertise.slice(0,3).join(' · ')}</div>
              
              <div class="astro-lang" style="font-size:0.65rem; color:#9ca3af; margin-bottom:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                <i class="bi bi-globe me-1"></i>${a.languages.join(', ')}
              </div>

              <div style="display:flex; align-items:center; justify-content:space-between; margin-top:2px;">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span style="background:rgba(234,179,8,0.15); color:#eab308; padding:1px 6px; border-radius:4px; font-weight:700; font-size:0.65rem;"><i class="bi bi-star-fill"></i> ${a.rating}</span>
                  <span style="color:#9ca3af; font-size:0.65rem;"><i class="bi bi-briefcase me-1"></i>${a.experience}</span>
                </div>
                <span class="astro-status-badge ${a.isOnline ? 'astro-status-available' : 'astro-status-offline'}" style="font-size:0.58rem; padding:2px 6px;">
                  ${a.isOnline ? '● Available' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Bottom Action Buttons: Audio Call & Chat with clean 50/50 split -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
            <button class="btn-consult-now" style="background:rgba(34,197,94,0.12); border:1px solid rgba(34,197,94,0.3); color:#4ade80; padding:7px 8px; font-size:0.72rem; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:5px; font-weight:600;" onclick="event.stopPropagation(); App.BookingService.startBookingFlow('${a.id}', 'call')">
              <i class="bi bi-telephone-fill"></i> Call <span style="color:white; font-weight:700;">₹${a.callRate}/m</span>
            </button>
            <button class="btn-consult-now" style="background:linear-gradient(135deg,#5b21b6,#7c3aed); border:none; color:white; padding:7px 8px; font-size:0.72rem; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:5px; font-weight:600;" onclick="event.stopPropagation(); App.BookingService.startBookingFlow('${a.id}', 'chat')">
              <i class="bi bi-chat-fill"></i> Chat <span style="color:#fef08a; font-weight:700;">₹${a.chatRate}/m</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  /* ── 1. USER LOGIN SCREEN ─────────────────────────────────── */
  'user-login': () => `
    <div class="screen" style="background: radial-gradient(ellipse at 50% 10%, #2a0d5e 0%, #150630 45%, #080313 100%); display:flex; flex-direction:column; overflow-y:auto; overflow-x:hidden; -webkit-overflow-scrolling:touch; scrollbar-width:none;">
      <!-- Hero Section -->
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px 20px 14px; text-align:center; flex-shrink:0;">
        <!-- Sun-Moon Logo -->
        <div style="margin-bottom:12px;">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
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
            <circle cx="46" cy="47" r="2" fill="#92400e"/>
            <circle cx="54" cy="47" r="2" fill="#92400e"/>
            <path d="M44 54 Q50 58 56 54" stroke="#92400e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M62 34 Q76 50 62 66 Q48 52 54 50 Q48 48 62 34Z" fill="#150630"/>
            <circle cx="58" cy="50" r="14" fill="#1a0a40"/>
          </svg>
        </div>

        <h1 style="font-family:'Playfair Display',serif; font-size:2rem; font-weight:700; color:white; letter-spacing:-0.02em; line-height:1.1;">
          Astro<span style="color:#eab308;">Talkz</span>
        </h1>
        <p style="font-size:0.75rem; color:#eab308; letter-spacing:0.08em; margin-top:3px;">✦ by vorabion ✦</p>

        <div style="display:flex; align-items:center; gap:10px; margin:8px 0 6px;">
          <div style="width:24px; height:1px; background:#eab308; opacity:0.5;"></div>
          <span style="color:#eab308; font-size:0.8rem;">✦</span>
          <div style="width:24px; height:1px; background:#eab308; opacity:0.5;"></div>
        </div>

        <h2 style="font-size:1rem; font-weight:700; color:white; margin-bottom:3px;">Welcome to AstroTalkz</h2>
        <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4; max-width:230px;">Your trusted guide to astrology, insights and a better tomorrow.</p>
      </div>

      <!-- Login Card -->
      <div class="login-card" style="flex-shrink:0; margin-bottom:0; border-bottom-left-radius:0; border-bottom-right-radius:0; padding-bottom:28px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
          <div style="width:38px; height:38px; border-radius:50%; background:rgba(108,43,217,0.1); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-phone" style="color:#7c3aed; font-size:1.1rem;"></i>
          </div>
          <div>
            <p style="font-size:0.88rem; font-weight:700; color:#111827;">Login / Sign Up</p>
            <p style="font-size:0.7rem; color:#6b7280;">Enter 10-digit mobile number to proceed</p>
          </div>
        </div>

        <!-- Phone Input -->
        <div class="phone-input-group" style="margin-bottom:12px;">
          <div class="phone-country">
            <span>🇮🇳</span>
            <span>+91</span>
            <i class="bi bi-chevron-down" style="font-size:0.65rem; color:#6b7280;"></i>
          </div>
          <input class="phone-number-input" type="tel" id="phone-input" placeholder="9876543210" maxlength="10" value="9876543210">
        </div>

        <!-- Continue with Mobile -->
        <button class="btn-primary w-full" style="border-radius:12px; margin-bottom:12px; padding:12px;" onclick="App.AuthService.handlePhoneSubmit()">
          Continue with Mobile <i class="bi bi-arrow-right ms-2"></i>
        </button>

        <div style="text-align:center; margin-bottom:12px;">
          <span style="font-size:0.7rem; color:#9ca3af;">or continue with</span>
        </div>

        <!-- Google Login -->
        <button class="btn-google w-full" style="margin-bottom:14px; padding:10px; border-radius:12px;" onclick="App.AuthService.googleLogin()">
          <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
          Continue with Google
        </button>

        <!-- Trust Badges -->
        <div class="feature-icons-row" style="margin-bottom:12px;">
          <div class="feature-icon-item">
            <div class="feature-icon-bubble"><i class="bi bi-shield-check"></i></div>
            <p style="font-size:0.62rem; font-weight:600; color:#111827;">100% Private</p>
            <p style="font-size:0.58rem; color:#6b7280;">Encrypted Chats</p>
          </div>
          <div class="feature-icon-item">
            <div class="feature-icon-bubble" style="background:rgba(234,179,8,0.1);"><i class="bi bi-stars" style="color:#d97706;"></i></div>
            <p style="font-size:0.62rem; font-weight:600; color:#111827;">Top Astrologers</p>
            <p style="font-size:0.58rem; color:#6b7280;">Vetted Experts</p>
          </div>
          <div class="feature-icon-item">
            <div class="feature-icon-bubble" style="background:rgba(59,130,246,0.1);"><i class="bi bi-lightning-charge" style="color:#3b82f6;"></i></div>
            <p style="font-size:0.62rem; font-weight:600; color:#111827;">Instant Access</p>
            <p style="font-size:0.58rem; color:#6b7280;">Connect in 60s</p>
          </div>
        </div>

        <p style="text-align:center; font-size:0.62rem; color:#6b7280; line-height:1.4;">
          By continuing, you agree to our 
          <a href="#" style="color:#7c3aed; text-decoration:underline;" onclick="Router.go('legal-doc')">Terms</a> &amp; 
          <a href="#" style="color:#7c3aed; text-decoration:underline;" onclick="Router.go('legal-doc')">Privacy Policy</a>
        </p>

        <p style="text-align:center; margin-top:10px; font-size:0.72rem; color:#6b7280;">
          Are you an astrologer? <a href="#" style="color:#7c3aed; font-weight:700;" onclick="App.switchRole('astrologer')">Astrologer Portal</a>
        </p>
      </div>
    </div>
  `,

  /* ── 2. OTP VERIFICATION ──────────────────────────────────── */
  'otp-verify': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Verify OTP</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <div style="text-align:center; margin-bottom:24px;">
          <div style="width:54px; height:54px; border-radius:50%; background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.3); display:flex; align-items:center; justify-content:center; margin:0 auto 12px;">
            <i class="bi bi-shield-lock-fill" style="color:#a78bfa; font-size:1.4rem;"></i>
          </div>
          <p style="color:#9ca3af; font-size:0.82rem;">Enter the 6-digit OTP sent to</p>
          <p style="color:white; font-weight:700; font-size:0.95rem; margin-top:2px;">${DATA.currentUser.phone}</p>
          <span style="font-size:0.7rem; color:var(--gold); background:rgba(234,179,8,0.12); padding:2px 8px; border-radius:6px; display:inline-block; margin-top:6px;">Demo OTP: 123456</span>
        </div>

        <div style="display:flex; gap:8px; justify-content:center; margin-bottom:24px;">
          ${[1,2,3,4,5,6].map(i => `
            <input type="tel" maxlength="1" class="input-field" style="width:42px; height:50px; text-align:center; font-size:1.2rem; font-weight:700; padding:0; border-radius:10px; background:#0f0a1e; border:1px solid rgba(139,92,246,0.3);" id="otp-${i}" value="${i}" oninput="App.AuthService.handleOtpInput(this, ${i})">
          `).join('')}
        </div>

        <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="App.AuthService.verifyOtp()">
          Verify &amp; Continue <i class="bi bi-arrow-right ms-2"></i>
        </button>

        <p style="text-align:center; margin-top:20px; font-size:0.78rem; color:#9ca3af;">
          Didn't receive OTP? <a href="#" style="color:#a78bfa; font-weight:600;" onclick="App.AuthService.resendOtp()">Resend OTP</a>
        </p>
      </div>
    </div>
  `,

  /* ── 3. ONBOARDING NAME ───────────────────────────────────── */
  'onboarding-name': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.8rem; color:#9ca3af;">Step 1 of 2</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <h2 style="font-size:1.4rem; font-weight:700; color:white; margin-bottom:4px;">What's your full name?</h2>
        <p style="color:#9ca3af; font-size:0.8rem; margin-bottom:20px;">Let the astrologers know how to address you.</p>
        
        <label style="font-size:0.75rem; color:#a78bfa; margin-bottom:6px; display:block; font-weight:600;">Full Name</label>
        <input type="text" class="input-field" id="ob-name" placeholder="E.g., Priya Sharma" value="${DATA.currentUser.name}" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:12px; padding:12px 14px; color:white; width:100%; margin-bottom:24px;">

        <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="App.AuthService.saveOnboardingName()">
          Next Step <i class="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  `,

  /* ── 4. ONBOARDING BIRTH DETAILS ─────────────────────────── */
  'onboarding-dob': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.8rem; color:#9ca3af;">Step 2 of 2</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <h2 style="font-size:1.4rem; font-weight:700; color:white; margin-bottom:4px;">Your Birth Details</h2>
        <p style="color:#9ca3af; font-size:0.8rem; margin-bottom:20px;">Required for generating accurate Kundli &amp; predictions.</p>
        
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div>
            <label style="font-size:0.75rem; color:#9ca3af; margin-bottom:4px; display:block;">Date of Birth</label>
            <input type="date" class="input-field" id="ob-dob" value="${DATA.currentUser.dob}" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:10px; padding:10px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.75rem; color:#9ca3af; margin-bottom:4px; display:block;">Time of Birth</label>
            <input type="time" class="input-field" id="ob-time" value="${DATA.currentUser.birthTime}" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:10px; padding:10px 12px; color:white; width:100%;">
          </div>
          <div>
            <label style="font-size:0.75rem; color:#9ca3af; margin-bottom:4px; display:block;">Place of Birth</label>
            <input type="text" class="input-field" id="ob-place" placeholder="City, State" value="${DATA.currentUser.birthPlace}" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:10px; padding:10px 12px; color:white; width:100%;">
          </div>
        </div>

        <button class="btn-primary w-full" style="margin-top:24px; padding:14px; border-radius:12px; font-weight:700;" onclick="App.AuthService.completeOnboarding()">
          Complete Setup <i class="bi bi-stars ms-2"></i>
        </button>
      </div>
    </div>
  `,

  /* ── 5. USER HOME SCREEN ──────────────────────────────────── */
  home: () => `
    <div class="screen" style="display:flex; flex-direction:column; background:#08031a; overflow:hidden;">
      <!-- Hero Background Area -->
      <div class="home-hero-bg" style="flex-shrink:0; position:relative; height:270px; overflow:hidden;">
        <!-- Cosmic SVG background -->
        <div style="position:absolute; right:-30px; top:-30px; width:280px; height:280px; opacity:0.35;">
          <svg viewBox="0 0 280 280" fill="none">
            <circle cx="140" cy="140" r="135" stroke="#eab308" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6"/>
            <circle cx="140" cy="140" r="105" stroke="#7c3aed" stroke-width="0.8" opacity="0.4"/>
            <circle cx="140" cy="140" r="75" stroke="#eab308" stroke-width="0.8" opacity="0.3"/>
            <circle cx="140" cy="140" r="40" fill="rgba(234,179,8,0.2)"/>
            <circle cx="140" cy="140" r="28" fill="rgba(234,179,8,0.4)"/>
            <text x="138" y="20" fill="#eab308" font-size="12" opacity="0.8">♈</text>
            <text x="213" y="48" fill="#eab308" font-size="12" opacity="0.8">♉</text>
            <text x="248" y="135" fill="#eab308" font-size="12" opacity="0.8">♊</text>
            <text x="215" y="220" fill="#eab308" font-size="12" opacity="0.8">♋</text>
            <text x="136" y="258" fill="#eab308" font-size="12" opacity="0.8">♌</text>
            <text x="52" y="220" fill="#eab308" font-size="12" opacity="0.8">♍</text>
            <text x="18" y="135" fill="#eab308" font-size="12" opacity="0.8">♎</text>
            <text x="48" y="50" fill="#eab308" font-size="12" opacity="0.8">♏</text>
            <ellipse cx="200" cy="60" rx="18" ry="7" stroke="#a78bfa" stroke-width="1" fill="none" transform="rotate(-20 200 60)"/>
            <circle cx="200" cy="60" r="8" fill="#7c3aed" opacity="0.8"/>
          </svg>
        </div>

        <!-- Header -->
        <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; position:relative; z-index:10;">
          <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list" style="font-size:1.3rem;"></i></button>
          <div style="text-align:center;">
            <p style="font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:700; color:white;">AstroTalkz</p>
            <p style="font-size:0.6rem; color:#eab308; letter-spacing:0.06em;">✦ by vorabion ✦</p>
          </div>
          <div style="position:relative;">
            <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
            <span class="badge-dot" style="top:4px; right:4px; display:${DATA.notifications.some(n=>!n.read)?'block':'none'};"></span>
          </div>
        </div>

        <!-- Greeting -->
        <div style="padding:6px 18px; position:relative; z-index:10;">
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.85);">Hello, ${DATA.currentUser.name.split(' ')[0]} ✦</p>
          <h2 style="font-size:1.65rem; font-weight:700; color:white; line-height:1.15; margin-top:2px;">
            Find Guidance,<br><span style="color:#eab308;">Find Clarity</span>
          </h2>
          <div style="display:flex; align-items:center; gap:8px; margin:6px 0;">
            <div style="width:20px; height:1px; background:#eab308; opacity:0.7;"></div>
            <span style="color:#eab308; font-size:0.7rem;">✦</span>
            <div style="width:20px; height:1px; background:#eab308; opacity:0.7;"></div>
          </div>
          <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4;">Connect with verified astrologers for chat &amp; voice guidance.</p>
        </div>
      </div>

      <!-- Bottom Sheet -->
      <div class="bottom-sheet">
        <div class="sheet-handle"></div>

        <!-- Profile + Wallet Row -->
        <div class="profile-pill" onclick="Router.go('profile')" style="cursor:pointer; margin-bottom:12px;">
          <div class="flex-start gap-12">
            <div style="width:42px; height:42px; border-radius:50%; background:rgba(108,43,217,0.2); border:2px solid rgba(139,92,246,0.4); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-stars" style="color:#eab308; font-size:1.1rem;"></i>
            </div>
            <div>
              <p style="font-size:0.85rem; font-weight:700; color:white;">${DATA.currentUser.name}</p>
              <p style="font-size:0.65rem; color:#9ca3af; margin-top:1px;">View your profile &gt;</p>
            </div>
          </div>
          <div class="wallet-pill" onclick="event.stopPropagation(); Router.go('wallet-topup')">
            <i class="bi bi-wallet2" style="color:#eab308;"></i>
            <span>₹ ${DATA.currentUser.walletBalance}</span>
            <div style="width:18px; height:18px; border-radius:50%; background:rgba(234,179,8,0.2); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-plus" style="color:#eab308; font-size:0.75rem;"></i>
            </div>
          </div>
        </div>

        <!-- Scrollable Body -->
        <div style="flex:1; overflow-y:auto; padding-bottom:70px;" class="screen-body">
          <!-- 2-Column Quick Consult Triggers -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:0 16px 16px;">
            <div onclick="Router.go('consult')" style="background:linear-gradient(135deg,rgba(91,33,182,0.4),rgba(124,58,237,0.25)); border:1px solid rgba(139,92,246,0.4); border-radius:14px; padding:12px; cursor:pointer; display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(139,92,246,0.3); display:flex; align-items:center; justify-content:center;">
                <i class="bi bi-chat-dots-fill" style="color:#a78bfa; font-size:1.1rem;"></i>
              </div>
              <div>
                <p style="font-size:0.82rem; font-weight:700; color:white;">Chat with Astro</p>
                <p style="font-size:0.62rem; color:#a78bfa;">Instant replies</p>
              </div>
            </div>
            <div onclick="Router.go('consult')" style="background:linear-gradient(135deg,rgba(21,128,61,0.35),rgba(34,197,94,0.2)); border:1px solid rgba(34,197,94,0.3); border-radius:14px; padding:12px; cursor:pointer; display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(34,197,94,0.3); display:flex; align-items:center; justify-content:center;">
                <i class="bi bi-telephone-fill" style="color:#4ade80; font-size:1.1rem;"></i>
              </div>
              <div>
                <p style="font-size:0.82rem; font-weight:700; color:white;">Audio Call</p>
                <p style="font-size:0.62rem; color:#86efac;">Voice clarity</p>
              </div>
            </div>
          </div>

          <!-- Services Grid -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">Vedic Astrology Services</p>
          <div class="menu-group" style="margin-bottom:16px;">
            <div class="menu-row" onclick="Router.go('consult')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-people-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Consult Verified Astrologers</p>
                <p class="menu-row-sub">Chat or Voice Call directly</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('horoscope')">
              <div class="menu-row-icon icon-blue"><i class="bi bi-compass-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Daily Horoscope &amp; Transit</p>
                <p class="menu-row-sub">Check ${DATA.currentUser.zodiac} predictions</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('kundali')">
              <div class="menu-row-icon icon-teal"><i class="bi bi-grid-3x3-gap-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Janam Kundli Generator</p>
                <p class="menu-row-sub">Birth chart, Lagna &amp; Doshas</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('matchmaking')">
              <div class="menu-row-icon icon-pink"><i class="bi bi-heart-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Kundli Milan (Match Making)</p>
                <p class="menu-row-sub">36 Gunas compatibility analysis</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('pooja-remedies')">
              <div class="menu-row-icon icon-gold"><i class="bi bi-lamp-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Online Puja &amp; Remedies</p>
                <p class="menu-row-sub">Book Vedic rituals with pure samagri</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
          </div>

          <!-- Account Section -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">My Account</p>
          <div class="menu-group" style="margin-bottom:16px;">
            <div class="menu-row" onclick="Router.go('bookings')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-calendar2-check-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">My Bookings</p>
                <p class="menu-row-sub">Upcoming &amp; completed sessions</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('favourites')">
              <div class="menu-row-icon icon-pink"><i class="bi bi-heart-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Favourite Astrologers</p>
                <p class="menu-row-sub">${DATA.favourites.length} saved experts</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('wallet-topup')">
              <div class="menu-row-icon icon-green"><i class="bi bi-wallet-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Wallet &amp; Transactions</p>
                <p class="menu-row-sub">Balance: ₹${DATA.currentUser.walletBalance}</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('settings')">
              <div class="menu-row-icon" style="background:rgba(107,114,128,0.4);"><i class="bi bi-gear-fill" style="color:white;"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Settings</p>
                <p class="menu-row-sub">App preferences &amp; reset demo</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── 6. CONSULTATION DISCOVERY SCREEN ─────────────────────── */
  consult: () => {
    const list = App.AstrologerService.getFilteredList();
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header -->
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div style="display:flex; align-items:center; gap:6px;">
          <i class="bi bi-stars" style="color:var(--gold);"></i>
          <span style="font-size:1.05rem; font-weight:700; color:white;">Consult Astrologer</span>
        </div>
        <div style="position:relative;">
          <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
          <span class="badge-dot" style="display:${DATA.notifications.some(n=>!n.read)?'block':'none'};"></span>
        </div>
      </div>

      <div class="screen-body pb-nav">
        <!-- Search Bar -->
        <div style="padding:0 16px 10px; display:flex; gap:8px;">
          <div style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:12px; display:flex; align-items:center; padding:8px 12px; gap:8px;">
            <i class="bi bi-search" style="color:#9ca3af; font-size:0.85rem;"></i>
            <input type="text" placeholder="Search by name, expertise or language..." value="${STATE.consultSearchQuery||''}" oninput="App.AstrologerService.setSearch(this.value)" style="background:none; border:none; outline:none; color:white; font-size:0.78rem; flex:1; font-family:inherit;">
          </div>
        </div>

        <!-- Consultation Type Filter Chips: ALL, CHAT, AUDIO CALL (NO VIDEO) -->
        <div style="display:flex; gap:6px; padding:0 16px 12px;">
          ${[
            { id: 'All', label: 'All Types' },
            { id: 'chat', label: '💬 Chat' },
            { id: 'call', label: '📞 Audio Call' }
          ].map(t => `
            <button onclick="App.AstrologerService.setTypeFilter('${t.id}')" style="background:${STATE.consultTypeFilter===t.id?'linear-gradient(135deg,#5b21b6,#7c3aed)':'#0f0a1e'}; color:${STATE.consultTypeFilter===t.id?'white':'#9ca3af'}; border:1px solid ${STATE.consultTypeFilter===t.id?'transparent':'rgba(255,255,255,0.08)'}; border-radius:20px; padding:5px 12px; font-size:0.7rem; font-weight:600; cursor:pointer;">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <!-- Categories Scroll -->
        <div class="category-scroll" style="margin-bottom:14px;">
          ${[
            {icon:'bi bi-grid-fill', label:'All'},
            {icon:'bi bi-heart-fill', label:'Love & Relationship'},
            {icon:'bi bi-briefcase-fill', label:'Career'},
            {icon:'bi bi-currency-rupee', label:'Finance'},
            {icon:'bi bi-gem', label:'Marriage'},
            {icon:'bi bi-heart-pulse-fill', label:'Health'}
          ].map(c => {
            const active = STATE.consultCategoryFilter === c.label;
            return `
              <div class="cat-chip ${active?'active':''}" onclick="App.AstrologerService.setCategory('${c.label}')">
                <div class="cat-chip-icon"><i class="${c.icon}"></i></div>
                <span class="cat-chip-label">${c.label}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Section Header with Sort Dropdown -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:10px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Verified Experts (${list.length})</p>
          <select onchange="App.AstrologerService.setSort(this.value)" style="background:#0f0a1e; color:#a78bfa; border:1px solid rgba(139,92,246,0.3); border-radius:8px; padding:4px 8px; font-size:0.68rem; outline:none; font-family:inherit;">
            <option value="recommended" ${STATE.consultSortBy==='recommended'?'selected':''}>Recommended</option>
            <option value="rating" ${STATE.consultSortBy==='rating'?'selected':''}>Top Rated</option>
            <option value="price-asc" ${STATE.consultSortBy==='price-asc'?'selected':''}>Price: Low to High</option>
            <option value="experience" ${STATE.consultSortBy==='experience'?'selected':''}>Experience</option>
          </select>
        </div>

        <!-- Astrologers List -->
        <div id="consult-astros-list">
          ${Screens.renderAstrologerCards(list)}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 7. ASTROLOGER PROFILE SCREEN ─────────────────────────── */
  'astro-profile': (params) => {
    const a = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    const isFav = DATA.favourites && DATA.favourites.includes(a.id);
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header -->
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Astrologer Profile</div>
        <div style="display:flex; gap:6px;">
          <button class="header-btn" onclick="App.AstrologerService.toggleFavourite('${a.id}', event)">
            <i class="bi bi-heart${isFav?'-fill':''}" style="color:${isFav?'#ef4444':'white'};"></i>
          </button>
        </div>
      </div>

      <div class="screen-body" style="padding-bottom:90px;">
        <!-- Hero Details -->
        <div style="padding:16px; display:flex; gap:14px; align-items:flex-start;">
          <div class="astro-avatar-wrap">
            <img src="${a.avatar}" style="width:76px; height:76px; border-radius:50%; object-fit:cover; border:2px solid rgba(139,92,246,0.5);">
            <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}" style="width:13px; height:13px;"></div>
          </div>
          <div style="flex:1; min-width:0;">
            <div style="display:flex; align-items:center; gap:6px;">
              <h2 style="font-size:1.05rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name}</h2>
              ${a.verified ? '<i class="bi bi-patch-check-fill" style="color:#a78bfa; font-size:0.85rem;"></i>' : ''}
            </div>
            <p style="font-size:0.72rem; color:var(--gold); margin:2px 0;">${a.title}</p>
            <div style="font-size:0.68rem; color:#9ca3af; margin-bottom:4px;"><i class="bi bi-star-fill text-gold me-1"></i>${a.rating} (${a.reviews} reviews) · ${a.experience}</div>
            <div style="font-size:0.68rem; color:#9ca3af;"><i class="bi bi-globe me-1"></i>${a.languages.join(', ')}</div>
          </div>
        </div>

        <!-- 4 Stats Grid -->
        <div style="display:grid; grid-template-columns:repeat(4,1fr); margin:0 16px 16px; background:#0f0a1e; border:1px solid rgba(255,255,255,0.06); border-radius:14px; overflow:hidden;">
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-people" style="color:#a78bfa; font-size:0.95rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.totalConsultations}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Consults</p>
          </div>
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-star-fill" style="color:#eab308; font-size:0.95rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.rating}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Rating</p>
          </div>
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-chat-square-text" style="color:#a78bfa; font-size:0.95rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.reviews}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Reviews</p>
          </div>
          <div style="padding:10px 4px; text-align:center;">
            <i class="bi bi-clock-history" style="color:#a78bfa; font-size:0.95rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.experience.split(' ')[0]}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Yrs Exp.</p>
          </div>
        </div>

        <!-- 2 Consultation Services: CHAT & AUDIO CALL ONLY (NO VIDEO) -->
        <div style="margin:0 16px 16px;">
          <p style="font-size:0.85rem; font-weight:700; color:white; margin-bottom:10px;">Available Consultation Modes</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <!-- Chat Card -->
            <div class="card" style="text-align:center; padding:14px 10px; border-top:3px solid rgba(139,92,246,0.6); cursor:pointer;" onclick="App.BookingService.startBookingFlow('${a.id}', 'chat')">
              <i class="bi bi-chat-fill" style="color:#a78bfa; font-size:1.3rem; margin-bottom:6px; display:block;"></i>
              <p style="font-size:0.8rem; font-weight:700; color:white;">Chat Session</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:4px 0 10px;">Instant text answers &amp; remedies</p>
              <p style="font-size:0.95rem; font-weight:700; color:#4ade80;">₹${a.chatRate} <span style="font-size:0.62rem; color:#9ca3af;">/min</span></p>
            </div>

            <!-- Audio Call Card -->
            <div class="card" style="text-align:center; padding:14px 10px; border-top:3px solid rgba(34,197,94,0.5); cursor:pointer;" onclick="App.BookingService.startBookingFlow('${a.id}', 'call')">
              <i class="bi bi-telephone-fill" style="color:#4ade80; font-size:1.3rem; margin-bottom:6px; display:block;"></i>
              <p style="font-size:0.8rem; font-weight:700; color:white;">Voice Call</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:4px 0 10px;">Direct 1-on-1 voice conversation</p>
              <p style="font-size:0.95rem; font-weight:700; color:#4ade80;">₹${a.callRate} <span style="font-size:0.62rem; color:#9ca3af;">/min</span></p>
            </div>
          </div>
        </div>

        <!-- Bio & Expertise -->
        <div style="margin:0 16px 16px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:6px;">About ${a.name.split(' ')[1] || a.name}</p>
          <p style="font-size:0.72rem; color:#9ca3af; line-height:1.5;">${a.bio}</p>
          <div style="display:flex; flex-wrap:wrap; gap:5px; margin-top:10px;">
            ${a.expertise.map(e => `<span style="background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.3); color:#c4b5fd; font-size:0.62rem; padding:3px 8px; border-radius:6px;">${e}</span>`).join('')}
          </div>
        </div>

        <!-- Reviews -->
        <div style="margin:0 16px 16px;" class="card">
          <div class="flex-between" style="margin-bottom:8px;">
            <p style="font-size:0.82rem; font-weight:700; color:white;">Client Reviews</p>
            <span style="font-size:0.68rem; color:#eab308;"><i class="bi bi-star-fill"></i> ${a.rating} Rating</span>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,0.05); padding-top:8px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
              <span style="font-size:0.72rem; font-weight:600; color:white;">Sunita K.</span>
              <span style="font-size:0.6rem; color:#6b7280;">2 days ago</span>
            </div>
            <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4;">"Accurate timeline for job switch. The suggested Surya Arghya remedy brought immense positivity."</p>
          </div>
        </div>
      </div>

      <!-- Sticky Bottom Action Bar -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.96); border-top:1px solid rgba(255,255,255,0.08); padding:10px 16px; display:flex; gap:10px; z-index:50;">
        <button class="btn-primary flex-1" style="background:rgba(34,197,94,0.2); border:1px solid rgba(34,197,94,0.4); color:#4ade80; padding:12px; border-radius:10px; font-size:0.8rem; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px;" onclick="App.BookingService.startBookingFlow('${a.id}', 'call')">
          <i class="bi bi-telephone-fill"></i> Call (₹${a.callRate}/m)
        </button>
        <button class="btn-primary flex-1" style="padding:12px; border-radius:10px; font-size:0.8rem; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px;" onclick="App.BookingService.startBookingFlow('${a.id}', 'chat')">
          <i class="bi bi-chat-fill"></i> Chat (₹${a.chatRate}/m)
        </button>
      </div>
    </div>
    `;
  },

  /* ── 8. BOOKING CHECKOUT SCREEN ───────────────────────────── */
  'booking-checkout': () => {
    const astro = DATA.astrologers.find(a => a.id === STATE.selectedAstrologerId) || DATA.astrologers[0];
    const { rate, subtotal, discount, total } = App.BookingService.calculateBookingTotal(astro, STATE.selectedConsultationType, STATE.selectedDuration);
    const hasEnoughBalance = DATA.currentUser.walletBalance >= total;

    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header -->
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Booking Summary</div>
        <div style="width:38px;"></div>
      </div>

      <div class="screen-body" style="padding-bottom:90px;">
        <!-- Astrologer Info Card -->
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${astro.avatar}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid rgba(139,92,246,0.4);">
            <div style="flex:1;">
              <p style="font-size:0.9rem; font-weight:700; color:white;">${astro.name}</p>
              <p style="font-size:0.7rem; color:var(--gold);">${astro.title}</p>
              <p style="font-size:0.65rem; color:#9ca3af;">Rate: ₹${rate}/min (${STATE.selectedConsultationType === 'call' ? 'Voice Call' : 'Chat'})</p>
            </div>
            <span class="badge badge-gold" style="font-size:0.65rem; text-transform:uppercase;">
              ${STATE.selectedConsultationType === 'call' ? '📞 Audio Call' : '💬 Chat'}
            </span>
          </div>
        </div>

        <!-- 1. Select Duration -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:10px;">Select Duration</p>
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:8px;">
            ${[5, 15, 30, 60].map(mins => {
              const active = STATE.selectedDuration === mins;
              return `
                <div onclick="App.BookingService.setDuration(${mins})" style="background:${active ? 'linear-gradient(135deg,#5b21b6,#7c3aed)' : '#0f0a1e'}; border:1px solid ${active ? 'transparent' : 'rgba(255,255,255,0.08)'}; border-radius:10px; padding:8px 4px; text-align:center; cursor:pointer;">
                  <p style="font-size:0.85rem; font-weight:700; color:white;">${mins}m</p>
                  <p style="font-size:0.6rem; color:${active ? 'rgba(255,255,255,0.8)' : '#9ca3af'};">₹${rate * mins}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 2. Select Date & Time -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:8px;">Appointment Schedule</p>
          <div style="display:flex; gap:8px; margin-bottom:10px;">
            ${['Today', 'Tomorrow', 'Day After'].map(d => `
              <button onclick="App.BookingService.setDate('${d}')" style="flex:1; background:${STATE.selectedDate===d?'rgba(139,92,246,0.25)':'#0f0a1e'}; border:1px solid ${STATE.selectedDate===d?'#7c3aed':'rgba(255,255,255,0.08)'}; color:${STATE.selectedDate===d?'#c4b5fd':'#9ca3af'}; border-radius:8px; padding:6px; font-size:0.7rem; cursor:pointer;">
                ${d}
              </button>
            `).join('')}
          </div>
          <div style="display:flex; gap:8px;">
            ${['10:30 AM', '02:00 PM', '06:30 PM', '08:00 PM'].map(t => `
              <button onclick="App.BookingService.setTime('${t}')" style="flex:1; background:${STATE.selectedTime===t?'rgba(139,92,246,0.25)':'#0f0a1e'}; border:1px solid ${STATE.selectedTime===t?'#7c3aed':'rgba(255,255,255,0.08)'}; color:${STATE.selectedTime===t?'#c4b5fd':'#9ca3af'}; border-radius:8px; padding:6px 2px; font-size:0.65rem; cursor:pointer;">
                ${t}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 3. Coupon Application -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:8px;">Apply Discount Coupon</p>
          <div style="display:flex; gap:8px; margin-bottom:8px;">
            <input type="text" id="coupon-input" placeholder="Enter WELCOME50" value="${STATE.appliedCoupon ? STATE.appliedCoupon.code : ''}" style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:8px 10px; color:white; font-size:0.75rem; text-transform:uppercase;">
            <button class="btn-primary" style="padding:8px 14px; font-size:0.72rem; border-radius:8px;" onclick="App.BookingService.applyCouponCode(document.getElementById('coupon-input').value)">
              Apply
            </button>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            ${DATA.offers.map(o => `
              <span onclick="App.BookingService.applyCouponCode('${o.code}')" style="font-size:0.62rem; background:rgba(234,179,8,0.12); color:#eab308; border:1px dashed rgba(234,179,8,0.4); padding:2px 8px; border-radius:6px; cursor:pointer;">
                ${o.code} (${o.title})
              </span>
            `).join('')}
          </div>
        </div>

        <!-- 4. Price Breakdown -->
        <div style="margin:0 16px 16px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:10px;">Payment Breakdown</p>
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">
            <span>Consultation Fee (${STATE.selectedDuration} mins @ ₹${rate}/m)</span>
            <span style="color:white;">₹${subtotal}</span>
          </div>
          ${discount > 0 ? `
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#4ade80; margin-bottom:6px;">
              <span>Coupon Discount (${STATE.appliedCoupon.code})</span>
              <span>-₹${discount}</span>
            </div>
          ` : ''}
          <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:8px; margin-top:8px; display:flex; justify-content:space-between; font-size:0.9rem; font-weight:700; color:white;">
            <span>Total Payable</span>
            <span style="color:var(--gold);">₹${total}</span>
          </div>
        </div>

        <!-- Wallet Status -->
        <div style="margin:0 16px; background:#0f0a1e; border:1px solid ${hasEnoughBalance?'rgba(34,197,94,0.3)':'rgba(239,68,68,0.3)'}; border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-size:0.65rem; color:#9ca3af;">Available Wallet Balance</p>
            <p style="font-size:0.95rem; font-weight:700; color:white;">₹${DATA.currentUser.walletBalance}</p>
          </div>
          ${!hasEnoughBalance ? `
            <button class="btn-primary" style="background:#ef4444; border-color:#ef4444; font-size:0.7rem; padding:6px 12px; border-radius:8px;" onclick="App.pendingCheckoutReturn=true; Router.go('wallet-topup')">
              <i class="bi bi-plus-circle me-1"></i> Add ₹${total - DATA.currentUser.walletBalance}
            </button>
          ` : `
            <span style="color:#4ade80; font-size:0.72rem; font-weight:600;"><i class="bi bi-check-circle-fill me-1"></i> Sufficient</span>
          `}
        </div>
      </div>

      <!-- Sticky Confirmation CTA -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.96); border-top:1px solid rgba(255,255,255,0.08); padding:12px 16px; z-index:50;">
        ${hasEnoughBalance ? `
          <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700; font-size:0.85rem;" onclick="App.BookingService.executeBooking()">
            Pay ₹${total} from Wallet &amp; Confirm <i class="bi bi-arrow-right ms-1"></i>
          </button>
        ` : `
          <button class="btn-primary w-full" style="background:linear-gradient(135deg,#dc2626,#ef4444); padding:14px; border-radius:12px; font-weight:700; font-size:0.85rem;" onclick="App.pendingCheckoutReturn=true; Router.go('wallet-topup')">
            Recharge Wallet (₹${total - DATA.currentUser.walletBalance} needed) <i class="bi bi-plus-lg ms-1"></i>
          </button>
        `}
      </div>
    </div>
    `;
  },

  /* ── 9. BOOKING SUCCESS SCREEN ────────────────────────────── */
  'booking-success': (params) => {
    const booking = DATA.bookings.find(b => b.id === (params && params.bookingId)) || DATA.bookings[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px 20px; text-align:center;">
      <div style="width:70px; height:70px; border-radius:50%; background:rgba(34,197,94,0.15); border:2px solid #22c55e; display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
        <i class="bi bi-check-lg" style="color:#4ade80; font-size:2.2rem;"></i>
      </div>

      <h2 style="font-size:1.4rem; font-weight:700; color:white; margin-bottom:4px;">Booking Confirmed!</h2>
      <p style="font-size:0.75rem; color:#9ca3af; max-width:240px; margin-bottom:20px;">Your session has been successfully scheduled and payment is verified.</p>

      <!-- Booking Card Summary -->
      <div class="card w-full" style="text-align:left; margin-bottom:24px; padding:14px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.75rem; color:#9ca3af;">
          <span>Booking ID</span>
          <span style="color:white; font-weight:700;">${booking.id}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.75rem; color:#9ca3af;">
          <span>Astrologer</span>
          <span style="color:white; font-weight:600;">${booking.astrologerName}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.75rem; color:#9ca3af;">
          <span>Mode &amp; Duration</span>
          <span style="color:var(--gold); font-weight:600;">${booking.type} (${booking.duration})</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#9ca3af;">
          <span>Scheduled Time</span>
          <span style="color:white;">${booking.date}, ${booking.time}</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px; width:100%;">
        <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="${booking.type==='Chat' ? `Router.go('chat', {id:'${booking.astrologerId}'})` : `Router.go('audio-call', {id:'${booking.astrologerId}'})`}">
          Start Session Now <i class="bi bi-play-circle-fill ms-2"></i>
        </button>
        <button class="btn-outline w-full" style="padding:12px; border-radius:12px; font-size:0.8rem;" onclick="Router.go('bookings')">
          View in My Bookings
        </button>
      </div>
    </div>
    `;
  },

  /* ── 10. LIVE CHAT CONSULTATION SCREEN ────────────────────── */
  chat: (params) => {
    const astro = DATA.astrologers.find(a => a.id === (params && params.id)) || DATA.astrologers[0];
    const msgs = DATA.chatMessages[astro.id] || [];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; height:100%;">
      <!-- Live Chat Header -->
      <div class="screen-header" style="padding:10px 14px;">
        <button class="header-btn" onclick="Router.go('home')"><i class="bi bi-arrow-left"></i></button>
        <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:0; margin-left:6px;">
          <div style="position:relative;">
            <img src="${astro.avatar}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
            <div class="online-dot" style="width:10px; height:10px;"></div>
          </div>
          <div style="flex:1; min-width:0;">
            <p style="font-size:0.82rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${astro.name}</p>
            <p style="font-size:0.62rem; color:#4ade80;">● Active Chat Consultation</p>
          </div>
        </div>
        <!-- Live Spent Indicator -->
        <div style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:4px 8px; text-align:right;">
          <p style="font-size:0.6rem; color:#9ca3af;" id="chat-timer-display">00:00</p>
          <p style="font-size:0.75rem; font-weight:700; color:#4ade80;" id="chat-spent-display">₹${astro.chatRate}</p>
        </div>
        <button class="btn-primary btn-sm" style="background:#ef4444; border-color:#ef4444; margin-left:6px; font-size:0.68rem; padding:6px 10px;" onclick="App.endChatConsultation()">
          End
        </button>
      </div>

      <!-- Quick Prompt Suggestion Chips -->
      <div style="display:flex; gap:6px; overflow-x:auto; padding:8px 12px; background:rgba(15,10,30,0.8); border-bottom:1px solid rgba(255,255,255,0.05); scrollbar-width:none;">
        ${[
          "Will I get a promotion soon?",
          "Marriage compatibility guidance",
          "Which gemstone is best for me?",
          "Financial remedies for this year"
        ].map(q => `
          <button onclick="App.sendQuickChat('${q}')" style="flex-shrink:0; background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.3); color:#c4b5fd; font-size:0.65rem; border-radius:14px; padding:4px 10px; cursor:pointer;">
            ${q}
          </button>
        `).join('')}
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-container" style="flex:1; overflow-y:auto; padding:14px 16px; display:flex; flex-direction:column; gap:8px;">
        ${msgs.map(m => `
          <div style="align-self:${m.sender==='user'?'flex-end':'flex-start'}; max-width:80%; background:${m.sender==='user'?'linear-gradient(135deg,#5b21b6,#7c3aed)':'#160d33'}; border:1px solid ${m.sender==='user'?'transparent':'rgba(139,92,246,0.3)'}; color:white; padding:10px 14px; border-radius:${m.sender==='user'?'14px 14px 2px 14px':'14px 14px 14px 2px'}; font-size:0.8rem;">
            ${m.text}
            <div style="font-size:0.6rem; color:${m.sender==='user'?'rgba(255,255,255,0.6)':'#9ca3af'}; text-align:${m.sender==='user'?'right':'left'}; margin-top:3px;">${m.time} ${m.sender==='user'?'✓✓':''}</div>
          </div>
        `).join('')}
      </div>

      <!-- Chat Input Bar -->
      <div style="padding:10px 14px; background:#080313; border-top:1px solid rgba(255,255,255,0.08); display:flex; gap:8px; align-items:center;">
        <input type="text" id="chat-input-field" placeholder="Type your question..." onkeydown="if(event.key==='Enter') App.sendChatMessage()" style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:10px 16px; color:white; font-size:0.8rem; outline:none; font-family:inherit;">
        <button onclick="App.sendChatMessage()" style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#5b21b6,#7c3aed); border:none; color:white; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;">
          <i class="bi bi-send-fill" style="font-size:0.9rem;"></i>
        </button>
      </div>
    </div>
    `;
  },

  /* ── 11. LIVE AUDIO CALL SCREEN (NO VIDEO) ────────────────── */
  'audio-call': (params) => {
    const astro = DATA.astrologers.find(a => a.id === (params && params.id)) || DATA.astrologers[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding:20px 16px;">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-chevron-down"></i></button>
        <span style="font-size:0.75rem; color:#4ade80; background:rgba(34,197,94,0.15); padding:4px 10px; border-radius:20px; border:1px solid rgba(34,197,94,0.3);">
          ● Voice Call Encrypted
        </span>
        <div style="width:38px;"></div>
      </div>

      <!-- Astrologer Avatar & Wave Animation -->
      <div style="display:flex; flex-direction:column; align-items:center; text-align:center;">
        <div style="position:relative; margin-bottom:20px;">
          <div style="position:absolute; inset:-12px; border-radius:50%; border:2px solid rgba(139,92,246,0.3); animation:pulse 2s infinite;"></div>
          <div style="position:absolute; inset:-24px; border-radius:50%; border:1px solid rgba(139,92,246,0.15); animation:pulse 3s infinite;"></div>
          <img src="${astro.avatar}" style="width:110px; height:110px; border-radius:50%; object-fit:cover; border:3px solid var(--purple-light); position:relative; z-index:2;">
        </div>

        <h2 style="font-size:1.3rem; font-weight:700; color:white; margin-bottom:4px;">${astro.name}</h2>
        <p style="font-size:0.78rem; color:var(--gold); margin-bottom:12px;">${astro.title}</p>
        
        <!-- Live Call Timer -->
        <p style="font-size:1.4rem; font-weight:700; color:white; letter-spacing:0.04em;" id="audio-timer-display">00:01</p>
        <p style="font-size:0.72rem; color:#9ca3af; margin-top:2px;" id="audio-spent-display">₹${astro.callRate} (₹${astro.callRate}/min)</p>
      </div>

      <!-- Controls: MUTE, END, SPEAKER -->
      <div style="display:flex; justify-content:space-around; align-items:center; padding:20px 10px 10px;">
        <!-- Mute -->
        <div style="text-align:center;">
          <div id="btn-mute-toggle" class="call-control-btn" style="width:54px; height:54px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; color:white; font-size:1.2rem; cursor:pointer;" onclick="App.toggleMute()">
            <i class="bi bi-mic-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#9ca3af; margin-top:6px;">Mute</p>
        </div>

        <!-- End Call Button -->
        <div style="text-align:center;">
          <div class="call-control-btn" style="width:68px; height:68px; border-radius:50%; background:#ef4444; display:flex; align-items:center; justify-content:center; color:white; font-size:1.6rem; cursor:pointer; box-shadow:0 0 20px rgba(239,68,68,0.5);" onclick="App.endAudioCallConsultation()">
            <i class="bi bi-telephone-x-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#ef4444; margin-top:6px; font-weight:600;">End Call</p>
        </div>

        <!-- Speaker -->
        <div style="text-align:center;">
          <div id="btn-speaker-toggle" class="call-control-btn" style="width:54px; height:54px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; color:white; font-size:1.2rem; cursor:pointer;" onclick="App.toggleSpeaker()">
            <i class="bi bi-volume-up-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#9ca3af; margin-top:6px;">Speaker</p>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 12. CONSULTATION SUMMARY & RATING SCREEN ─────────────── */
  'consult-summary': (params) => {
    const astro = DATA.astrologers.find(a => a.id === (params && params.astroId)) || DATA.astrologers[0];
    const amount = (params && params.amount) || 100;
    const type = (params && params.type) || "Chat";
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; padding:20px 16px; justify-content:space-between;">
      <div style="text-align:center; padding-top:20px;">
        <div style="width:64px; height:64px; border-radius:50%; background:rgba(139,92,246,0.2); border:2px solid #a78bfa; display:flex; align-items:center; justify-content:center; margin:0 auto 12px;">
          <i class="bi bi-check-circle-fill" style="color:#a78bfa; font-size:2rem;"></i>
        </div>
        <h2 style="font-size:1.3rem; font-weight:700; color:white; margin-bottom:4px;">Consultation Completed</h2>
        <p style="font-size:0.75rem; color:#9ca3af;">We hope your session with ${astro.name} was helpful.</p>
      </div>

      <!-- Summary Details -->
      <div class="card" style="margin:16px 0;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.75rem; color:#9ca3af;">
          <span>Mode</span>
          <span style="color:white; font-weight:600;">${type}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.75rem; color:#9ca3af;">
          <span>Total Deducted</span>
          <span style="color:#4ade80; font-weight:700;">₹${amount}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#9ca3af;">
          <span>Remaining Wallet Balance</span>
          <span style="color:white;">₹${DATA.currentUser.walletBalance}</span>
        </div>
      </div>

      <!-- Rating Selector -->
      <div class="card" style="text-align:center; padding:16px;">
        <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:8px;">Rate your experience</p>
        <div style="display:flex; justify-content:center; gap:8px; font-size:1.5rem; color:#eab308; margin-bottom:12px;">
          <i class="bi bi-star-fill" style="cursor:pointer;"></i>
          <i class="bi bi-star-fill" style="cursor:pointer;"></i>
          <i class="bi bi-star-fill" style="cursor:pointer;"></i>
          <i class="bi bi-star-fill" style="cursor:pointer;"></i>
          <i class="bi bi-star-fill" style="cursor:pointer;"></i>
        </div>
        <input type="text" placeholder="Write a short feedback..." class="input-field" style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:8px 12px; color:white; font-size:0.75rem; width:100%;">
      </div>

      <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="App.showToast('Thank you for your rating! ❤️'); Router.go('bookings');">
        Submit &amp; View Bookings
      </button>
    </div>
    `;
  },

  /* ── 13. BOOKINGS MANAGEMENT SCREEN ───────────────────────── */
  bookings: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div style="font-size:1rem; font-weight:700; color:white;">My Consultations</div>
        <button class="header-btn" onclick="Router.go('consult')"><i class="bi bi-plus-lg"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Filter Tabs -->
        <div class="filter-tabs" style="padding:0 16px 12px;">
          ${['all', 'upcoming', 'completed', 'cancelled'].map((tab, i) => `
            <button class="filter-tab ${i===0?'active':''}" id="book-tab-${tab}" onclick="App.filterBookings('${tab}')" style="text-transform:capitalize;">
              ${tab}
            </button>
          `).join('')}
        </div>

        <!-- Bookings List Scroll -->
        <div id="bookings-list-scroll" style="padding:0 16px;">
          ${DATA.bookings.map(b => `
            <div class="card mb-12" style="padding:12px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${b.astrologerAvatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:2px solid rgba(139,92,246,0.3);">
                  <div>
                    <p style="font-size:0.85rem; font-weight:700; color:white;">${b.astrologerName}</p>
                    <p style="font-size:0.68rem; color:var(--gold);">${b.type} · ${b.duration}</p>
                  </div>
                </div>
                <span class="badge ${b.status==='upcoming'?'badge-upcoming':b.status==='completed'?'badge-completed':'badge-cancelled'}" style="font-size:0.6rem; text-transform:uppercase;">
                  ${b.status}
                </span>
              </div>

              <div style="display:flex; justify-content:space-between; font-size:0.68rem; color:#9ca3af; border-top:1px solid rgba(255,255,255,0.05); padding-top:8px; margin-top:8px;">
                <span><i class="bi bi-calendar3 me-1"></i>${b.date}, ${b.time}</span>
                <span style="color:white; font-weight:600;">₹${b.amount}</span>
              </div>

              <!-- Actions -->
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:10px;">
                ${b.status==='upcoming' ? `
                  <button class="btn-outline btn-sm" style="font-size:0.68rem; padding:4px 10px;" onclick="App.BookingService.cancelBooking('${b.id}')">Cancel</button>
                  <button class="btn-primary btn-sm" style="font-size:0.68rem; padding:4px 12px;" onclick="${b.type==='Chat'?`Router.go('chat',{id:'${b.astrologerId}'})`:`Router.go('audio-call',{id:'${b.astrologerId}'})`}">
                    <i class="bi bi-play-circle me-1"></i> Join Now
                  </button>
                ` : b.status==='completed' ? `
                  <button class="btn-outline btn-sm" style="font-size:0.68rem; padding:4px 10px;" onclick="Router.go('astro-profile', {id:'${b.astrologerId}'})">Book Again</button>
                ` : `
                  <span style="font-size:0.65rem; color:#9ca3af; font-style:italic;">Refunded to wallet</span>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,

  /* ── 14. WALLET & TRANSACTIONS ────────────────────────────── */
  'wallet-topup': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Wallet &amp; Recharge</div>
        <div style="width:38px;"></div>
      </div>

      <div class="screen-body" style="padding:16px;">
        <!-- Balance Card -->
        <div style="background:linear-gradient(135deg,#5b21b6,#7c3aed); border-radius:16px; padding:18px; margin-bottom:16px; position:relative; overflow:hidden;">
          <div style="position:absolute; right:-10px; bottom:-10px; opacity:0.15; font-size:6rem;"><i class="bi bi-wallet2"></i></div>
          <p style="font-size:0.75rem; color:rgba(255,255,255,0.8);">Available Balance</p>
          <h2 style="font-size:2rem; font-weight:800; color:white; margin:4px 0 10px;">₹ ${DATA.currentUser.walletBalance}</h2>
          <p style="font-size:0.65rem; color:rgba(255,255,255,0.7);"><i class="bi bi-shield-check me-1"></i>100% Safe &amp; Encrypted UPI Payments</p>
        </div>

        <!-- Recharge Amount Preset Selector -->
        <div class="card mb-16">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:10px;">Select Recharge Amount</p>
          <div class="topup-grid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:12px;">
            ${[100, 500, 1000, 2000, 5000].map(amt => `
              <div class="topup-option ${STATE.selectedTopup===amt?'selected':''}" style="background:${STATE.selectedTopup===amt?'rgba(139,92,246,0.3)':'#0f0a1e'}; border:1px solid ${STATE.selectedTopup===amt?'#7c3aed':'rgba(255,255,255,0.08)'}; border-radius:10px; padding:10px; text-align:center; cursor:pointer;" onclick="App.WalletService.selectPreset(${amt})">
                <p style="font-size:0.9rem; font-weight:700; color:white;">₹${amt}</p>
              </div>
            `).join('')}
          </div>
          
          <input type="number" id="topup-custom-input" placeholder="Or enter custom amount" value="${STATE.selectedTopup}" style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; color:white; font-size:0.85rem; width:100%; margin-bottom:14px;">

          <button id="btn-pay-wallet" class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="App.WalletService.processRecharge()">
            Recharge ₹${STATE.selectedTopup} via UPI <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>

        <!-- Transactions History -->
        <div class="flex-between mb-8">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Recent Transactions</p>
          <span style="font-size:0.68rem; color:#9ca3af;">All Ledgers</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${DATA.transactions.map(t => `
            <div class="card" style="padding:10px 12px; display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:10px;">
                <div style="width:34px; height:34px; border-radius:50%; background:${t.isCredit?'rgba(34,197,94,0.15)':'rgba(239,68,68,0.15)'}; display:flex; align-items:center; justify-content:center;">
                  <i class="bi bi-arrow-${t.isCredit?'down-left':'up-right'}" style="color:${t.isCredit?'#4ade80':'#f87171'}; font-size:0.85rem;"></i>
                </div>
                <div>
                  <p style="font-size:0.75rem; font-weight:600; color:white;">${t.title}</p>
                  <p style="font-size:0.62rem; color:#9ca3af;">${t.date} · ${t.time}</p>
                </div>
              </div>
              <span style="font-size:0.85rem; font-weight:700; color:${t.isCredit?'#4ade80':'#f87171'};">
                ${t.isCredit?'+':'-'}₹${t.amount}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,

  /* ── 15. HOROSCOPE SCREEN ─────────────────────────────────── */
  horoscope: () => {
    const signs = Object.keys(DATA.horoscopes);
    const curr = DATA.horoscopes[STATE.selectedHoroscopeSign] || DATA.horoscopes.Gemini;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Daily Horoscope</div>
        <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Zodiac Selector Horizontal Carousel -->
        <div style="display:flex; gap:8px; overflow-x:auto; padding:0 16px 14px; scrollbar-width:none;">
          ${signs.map(s => {
            const h = DATA.horoscopes[s];
            const active = STATE.selectedHoroscopeSign === s;
            return `
              <div onclick="STATE.selectedHoroscopeSign='${s}'; App.render('horoscope')" style="flex-shrink:0; width:58px; background:${active?'linear-gradient(135deg,#5b21b6,#7c3aed)':'#0f0a1e'}; border:1px solid ${active?'transparent':'rgba(255,255,255,0.08)'}; border-radius:12px; padding:8px 4px; text-align:center; cursor:pointer;">
                <span style="font-size:1.2rem; display:block; margin-bottom:2px;">${h.symbol}</span>
                <p style="font-size:0.65rem; font-weight:600; color:${active?'white':'#9ca3af'};">${s}</p>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Sign Overview Card -->
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div>
              <h3 style="font-size:1.1rem; font-weight:700; color:white;">${STATE.selectedHoroscopeSign} ${curr.symbol}</h3>
              <p style="font-size:0.68rem; color:#eab308;">${curr.dates}</p>
            </div>
            <div style="text-align:right;">
              <span style="font-size:1.1rem; font-weight:800; color:#4ade80;">${curr.overall}%</span>
              <p style="font-size:0.6rem; color:#9ca3af;">Overall Score</p>
            </div>
          </div>
          <p style="font-size:0.75rem; color:#9ca3af; line-height:1.5;">${curr.prediction}</p>
        </div>

        <!-- Category Score Meters -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:0 16px 14px;">
          <div class="card" style="padding:10px 12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:#9ca3af; margin-bottom:4px;">
              <span>❤️ Love</span>
              <span style="color:white; font-weight:700;">${curr.love}%</span>
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:${curr.love}%; height:100%; background:#ec4899;"></div>
            </div>
          </div>
          <div class="card" style="padding:10px 12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:#9ca3af; margin-bottom:4px;">
              <span>💼 Career</span>
              <span style="color:white; font-weight:700;">${curr.career}%</span>
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:${curr.career}%; height:100%; background:#3b82f6;"></div>
            </div>
          </div>
          <div class="card" style="padding:10px 12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:#9ca3af; margin-bottom:4px;">
              <span>💰 Finance</span>
              <span style="color:white; font-weight:700;">${curr.money}%</span>
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:${curr.money}%; height:100%; background:#eab308;"></div>
            </div>
          </div>
          <div class="card" style="padding:10px 12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:#9ca3af; margin-bottom:4px;">
              <span>🌿 Health</span>
              <span style="color:white; font-weight:700;">${curr.health}%</span>
            </div>
            <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:${curr.health}%; height:100%; background:#22c55e;"></div>
            </div>
          </div>
        </div>

        <!-- Lucky Elements -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:8px;">Lucky Cosmic Attributes</p>
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; text-align:center;">
            <div style="background:#0f0a1e; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Number</p>
              <p style="font-size:0.8rem; font-weight:700; color:white;">${curr.luckyNumber}</p>
            </div>
            <div style="background:#0f0a1e; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Color</p>
              <p style="font-size:0.7rem; font-weight:700; color:#eab308; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${curr.luckyColor}</p>
            </div>
            <div style="background:#0f0a1e; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Time</p>
              <p style="font-size:0.68rem; font-weight:700; color:white;">${curr.luckyTime}</p>
            </div>
            <div style="background:#0f0a1e; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Gem</p>
              <p style="font-size:0.62rem; font-weight:700; color:#a78bfa; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${curr.luckyGemstone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 16. USER PROFILE SCREEN ──────────────────────────────── */
  profile: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">My Profile</div>
        <button class="header-btn" onclick="Router.go('settings')"><i class="bi bi-gear"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- User Info Card -->
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex; gap:14px; align-items:center;">
            <img src="${DATA.currentUser.avatar}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
            <div style="flex:1;">
              <h3 style="font-size:1rem; font-weight:700; color:white;">${DATA.currentUser.name}</h3>
              <p style="font-size:0.72rem; color:#9ca3af;">${DATA.currentUser.phone}</p>
              <p style="font-size:0.68rem; color:var(--gold); margin-top:2px;">✦ ${DATA.currentUser.zodiac} · ${DATA.currentUser.gender} ✦</p>
            </div>
          </div>
        </div>

        <!-- Quick 3 Stats -->
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:0 16px 14px;">
          <div class="card" style="text-align:center; padding:10px 4px;" onclick="Router.go('wallet-topup')">
            <i class="bi bi-wallet2 text-gold" style="font-size:1.1rem;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white; margin-top:2px;">₹${DATA.currentUser.walletBalance}</p>
            <p style="font-size:0.6rem; color:#9ca3af;">Balance</p>
          </div>
          <div class="card" style="text-align:center; padding:10px 4px;" onclick="Router.go('bookings')">
            <i class="bi bi-calendar2-check text-purple" style="font-size:1.1rem;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white; margin-top:2px;">${DATA.bookings.length}</p>
            <p style="font-size:0.6rem; color:#9ca3af;">Sessions</p>
          </div>
          <div class="card" style="text-align:center; padding:10px 4px;" onclick="Router.go('favourites')">
            <i class="bi bi-heart text-pink" style="font-size:1.1rem; color:#ec4899;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white; margin-top:2px;">${DATA.favourites.length}</p>
            <p style="font-size:0.6rem; color:#9ca3af;">Saved</p>
          </div>
        </div>

        <!-- Menu Links -->
        <div class="menu-group" style="margin:0 16px 16px;">
          <div class="menu-row" onclick="Router.go('bookings')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-calendar-check-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Consultation History</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('favourites')">
            <div class="menu-row-icon icon-pink"><i class="bi bi-heart-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Saved Astrologers</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('wallet-topup')">
            <div class="menu-row-icon icon-green"><i class="bi bi-wallet2"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Wallet &amp; Ledgers</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('settings')">
            <div class="menu-row-icon" style="background:rgba(107,114,128,0.4);"><i class="bi bi-gear-fill" style="color:white;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Settings &amp; Preferences</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.resetDemoData()">
            <div class="menu-row-icon" style="background:rgba(234,179,8,0.3);"><i class="bi bi-arrow-clockwise" style="color:#eab308;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Reset Demo Data</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.AuthService.logout()">
            <div class="menu-row-icon" style="background:rgba(239,68,68,0.2);"><i class="bi bi-box-arrow-right" style="color:#f87171;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title" style="color:#f87171;">Sign Out</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── 17. FAVOURITES SCREEN ────────────────────────────────── */
  favourites: () => {
    const favs = DATA.astrologers.filter(a => DATA.favourites && DATA.favourites.includes(a.id));
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Favourite Astrologers</div>
        <div style="width:38px;"></div>
      </div>

      <div class="screen-body pb-nav" style="padding-top:8px;">
        ${favs.length === 0 ? `
          <div style="text-align:center; padding:48px 16px; color:#9ca3af;">
            <i class="bi bi-heart" style="font-size:2.5rem; opacity:0.4; display:block; margin-bottom:10px;"></i>
            <p style="font-size:0.9rem; font-weight:600; color:white;">No favourites yet</p>
            <p style="font-size:0.75rem; margin-top:4px;">Tap the heart icon on any astrologer card to save them here.</p>
            <button class="btn-primary" style="margin-top:16px; padding:10px 18px; border-radius:10px; font-size:0.75rem;" onclick="Router.go('consult')">
              Discover Astrologers
            </button>
          </div>
        ` : Screens.renderAstrologerCards(favs)}
      </div>
    </div>
    `;
  },

  /* ── 18. NOTIFICATIONS SCREEN ─────────────────────────────── */
  notifications: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Notifications</div>
        <button class="header-btn" onclick="App.markAllNotificationsRead()"><i class="bi bi-check2-all"></i></button>
      </div>

      <div class="screen-body pb-nav" style="padding:16px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${DATA.notifications.map(n => `
            <div class="card" style="padding:12px; border-left:3px solid ${n.read?'rgba(255,255,255,0.1)':'#a78bfa'}; background:${n.read?'#0c0820':'#160e35'};">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
                <p style="font-size:0.8rem; font-weight:700; color:white;">${n.title}</p>
                <span style="font-size:0.6rem; color:#9ca3af;">${n.time}</span>
              </div>
              <p style="font-size:0.72rem; color:#9ca3af; line-height:1.4;">${n.message}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,

  /* ── 19. APP DRAWER ───────────────────────────────────────── */
  'app-drawer': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-x-lg"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Menu</div>
        <div style="width:38px;"></div>
      </div>

      <div class="screen-body" style="padding:16px;">
        <div class="profile-pill mb-16" onclick="Router.go('profile')">
          <div class="flex-start gap-12">
            <img src="${DATA.currentUser.avatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
            <div>
              <p style="font-size:0.88rem; font-weight:700; color:white;">${DATA.currentUser.name}</p>
              <p style="font-size:0.65rem; color:#9ca3af;">${DATA.currentUser.phone}</p>
            </div>
          </div>
          <span style="color:#eab308; font-weight:700; font-size:0.85rem;">₹${DATA.currentUser.walletBalance}</span>
        </div>

        <div class="menu-group mb-16">
          <div class="menu-row" onclick="Router.go('home')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-house-door-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Home</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('consult')">
            <div class="menu-row-icon icon-green"><i class="bi bi-chat-dots-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Consult Astrologers</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('horoscope')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-compass-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Daily Horoscope</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('kundali')">
            <div class="menu-row-icon icon-teal"><i class="bi bi-grid-3x3-gap-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Janam Kundli</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('matchmaking')">
            <div class="menu-row-icon icon-pink"><i class="bi bi-heart-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Match Making</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('pooja-remedies')">
            <div class="menu-row-icon icon-gold"><i class="bi bi-lamp-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Pooja &amp; Remedies</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('bookings')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-calendar2-check-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">My Bookings</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('wallet-topup')">
            <div class="menu-row-icon icon-green"><i class="bi bi-wallet-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Wallet Recharge</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>

        <button class="btn-outline w-full" style="padding:12px; border-radius:10px; font-size:0.75rem; border-color:rgba(239,68,68,0.4); color:#f87171;" onclick="App.AuthService.logout()">
          <i class="bi bi-box-arrow-left me-1"></i> Sign Out
        </button>
      </div>
    </div>
  `,

  /* ── 20. KUNDALI SCREENS ──────────────────────────────────── */
  kundali: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Janam Kundli</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div class="card mb-16" style="text-align:center; padding:16px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Kundli for ${DATA.currentUser.name}</p>
          <p style="font-size:0.7rem; color:#eab308; margin-top:2px;">Virgo Lagna · Gemini Rashi</p>
          <div style="margin:16px auto; width:220px; height:220px; background:#0c0822; border:1px solid rgba(234,179,8,0.4); border-radius:8px; display:flex; align-items:center; justify-content:center;">
            <svg viewBox="0 0 200 200" width="200" height="200">
              <rect x="5" y="5" width="190" height="190" fill="none" stroke="#eab308" stroke-width="1.2"/>
              <line x1="5" y1="5" x2="195" y2="195" stroke="rgba(234,179,8,0.4)" stroke-width="1"/>
              <line x1="195" y1="5" x2="5" y2="195" stroke="rgba(234,179,8,0.4)" stroke-width="1"/>
              <polygon points="100,5 5,100 100,195 195,100" fill="none" stroke="#eab308" stroke-width="1.2"/>
              <text x="100" y="65" fill="#fff" font-size="10" text-anchor="middle" font-weight="700">La (Virgo)</text>
              <text x="50" y="35" fill="#eab308" font-size="9" text-anchor="middle">Rahu</text>
              <text x="150" y="35" fill="#eab308" font-size="9" text-anchor="middle">Ketu</text>
              <text x="100" y="145" fill="#4ade80" font-size="9" text-anchor="middle">Guru</text>
              <text x="35" y="100" fill="#fff" font-size="9" text-anchor="middle">Surya</text>
              <text x="165" y="100" fill="#fff" font-size="9" text-anchor="middle">Chandra</text>
            </svg>
          </div>
          <button class="btn-primary w-full" style="padding:12px; border-radius:10px; font-size:0.75rem;" onclick="Router.go('consult')">
            Consult Astrologer on Kundli <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  `,

  /* ── 21. MATCHMAKING SCREEN ───────────────────────────────── */
  matchmaking: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Kundli Milan (36 Gunas)</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div class="card mb-16" style="text-align:center; padding:16px;">
          <div style="display:inline-block; width:60px; height:60px; border-radius:50%; background:rgba(236,72,153,0.15); border:1px solid #ec4899; line-height:60px; font-size:1.6rem; margin-bottom:10px;">
            ❤️
          </div>
          <h3 style="font-size:1.3rem; font-weight:800; color:#4ade80;">28 / 36 Gunas</h3>
          <p style="font-size:0.75rem; color:#eab308; font-weight:600; margin-top:2px;">Auspicious Match (Shubh Milan)</p>
          <p style="font-size:0.7rem; color:#9ca3af; margin:8px 0 16px;">Strong emotional harmony and intellectual wavelength.</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; text-align:left; font-size:0.7rem; color:#9ca3af;">
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Varna: <span style="color:#4ade80; font-weight:700;">1 / 1</span></div>
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Vashya: <span style="color:#4ade80; font-weight:700;">2 / 2</span></div>
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Tara: <span style="color:#4ade80; font-weight:700;">3 / 3</span></div>
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Yoni: <span style="color:#4ade80; font-weight:700;">4 / 4</span></div>
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Maitri: <span style="color:#4ade80; font-weight:700;">5 / 5</span></div>
            <div style="background:#0f0a1e; padding:8px; border-radius:8px;">Nadi: <span style="color:#eab308; font-weight:700;">6 / 8</span></div>
          </div>
        </div>

        <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="Router.go('consult')">
          Consult Marriage Astrologer <i class="bi bi-chat-heart-fill ms-2"></i>
        </button>
      </div>
    </div>
  `,

  /* ── 22. POOJA & REMEDIES SCREEN ──────────────────────────── */
  'pooja-remedies': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Online Puja &amp; Remedies</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${[
            { title: "Maha Mrityunjaya Jaap", desc: "For longevity, health and removing negative energies.", price: 2100, deity: "Lord Shiva" },
            { title: "Navgraha Shanti Puja", desc: "Harmonizes all 9 planetary influences in birth chart.", price: 1800, deity: "Navgraha" },
            { title: "Maha Lakshmi Kuber Puja", desc: "For wealth, business prosperity and financial freedom.", price: 2500, deity: "Goddess Lakshmi" }
          ].map(p => `
            <div class="card" style="padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <span style="font-size:0.62rem; color:var(--gold); font-weight:600;">${p.deity}</span>
                  <h4 style="font-size:0.9rem; font-weight:700; color:white; margin:2px 0 4px;">${p.title}</h4>
                  <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4;">${p.desc}</p>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:1rem; font-weight:800; color:#4ade80;">₹${p.price}</span>
                <button class="btn-primary btn-sm" style="padding:6px 14px; font-size:0.72rem; border-radius:8px;" onclick="App.showToast('Puja booked! Our temple priest will perform sankalp.'); Router.go('home');">
                  Book Puja
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,

  /* ── 23. SETTINGS SCREEN ──────────────────────────────────── */
  settings: () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Settings &amp; Support</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div class="menu-group mb-16">
          <div class="menu-row" onclick="App.showToast('Push Notifications Enabled ✓')">
            <div class="menu-row-icon icon-purple"><i class="bi bi-bell-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Notification Alerts</p></div>
            <span style="font-size:0.7rem; color:#4ade80;">ON</span>
          </div>
          <div class="menu-row" onclick="Router.go('legal-doc')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-shield-lock-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Privacy Policy &amp; Security</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('legal-doc')">
            <div class="menu-row-icon icon-teal"><i class="bi bi-file-text-fill"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Terms of Service</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.showToast('Support email: support@vorabion.com')">
            <div class="menu-row-icon icon-gold"><i class="bi bi-headset"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">24x7 Customer Support</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.resetDemoData()">
            <div class="menu-row-icon" style="background:rgba(234,179,8,0.25);"><i class="bi bi-arrow-counterclockwise" style="color:#eab308;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Reset Demo Prototype Data</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.AuthService.logout()">
            <div class="menu-row-icon" style="background:rgba(239,68,68,0.25);"><i class="bi bi-box-arrow-right" style="color:#f87171;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title" style="color:#f87171;">Logout</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  `,

  /* ── 24. LEGAL DOC SCREEN ─────────────────────────────────── */
  'legal-doc': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Terms &amp; Privacy</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:16px; font-size:0.75rem; color:#9ca3af; line-height:1.5;">
        <h3 style="font-size:0.95rem; font-weight:700; color:white; margin-bottom:6px;">VoraTalk Privacy Assurance</h3>
        <p style="margin-bottom:14px;">All consultations, chat transcripts, voice sessions and birth data on AstroTalkz are 100% confidential and strictly encrypted.</p>
        <h3 style="font-size:0.95rem; font-weight:700; color:white; margin-bottom:6px;">Payment Security</h3>
        <p style="margin-bottom:14px;">Wallet top-ups and payments are processed through secure simulated tokenized payment rails with zero storage of sensitive banking credentials.</p>
      </div>
    </div>
  `,

  /* ── 25. EXPERT DASHBOARD SCREEN ──────────────────────────── */
  'astro-dashboard': () => {
    const astro = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header with Online/Offline Toggle -->
      <div class="screen-header" style="padding:12px 16px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${astro.avatar}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
          <div>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${astro.fullName}</p>
            <p style="font-size:0.65rem; color:#4ade80;">Expert Portal</p>
          </div>
        </div>
        <!-- Live Online Switcher -->
        <button onclick="App.ExpertService.toggleOnline()" style="background:${astro.isOnline?'rgba(34,197,94,0.2)':'rgba(239,68,68,0.2)'}; border:1px solid ${astro.isOnline?'#22c55e':'#ef4444'}; color:${astro.isOnline?'#4ade80':'#f87171'}; border-radius:20px; padding:6px 12px; font-size:0.7rem; font-weight:700; cursor:pointer;">
          ● ${astro.isOnline ? 'ONLINE' : 'OFFLINE'}
        </button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Earnings Banner -->
        <div style="margin:0 16px 14px; background:linear-gradient(135deg,#5b21b6,#7c3aed); border-radius:16px; padding:16px; color:white;">
          <div class="flex-between">
            <span style="font-size:0.75rem; opacity:0.85;">Today's Payout Earnings</span>
            <span style="font-size:0.65rem; background:rgba(255,255,255,0.2); padding:2px 8px; border-radius:10px;">Active</span>
          </div>
          <h2 style="font-size:1.8rem; font-weight:800; margin:6px 0 10px;">₹ ${astro.todayStats.earnings}</h2>
          <div style="display:flex; gap:12px; font-size:0.7rem; opacity:0.9;">
            <span>Completed: <strong>${astro.todayStats.completed}</strong></span>
            <span>Rating: <strong>★ ${astro.rating}</strong></span>
          </div>
        </div>

        <!-- Incoming Consultation Requests -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Consultation Queue</p>
          <span style="font-size:0.65rem; color:#a78bfa;">Live Stream</span>
        </div>
        <div style="padding:0 16px 16px; display:flex; flex-direction:column; gap:10px;">
          ${DATA.astroConsultations.map(req => `
            <div class="card" style="padding:12px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${req.clientAvatar}" style="width:42px; height:42px; border-radius:50%; object-fit:cover;">
                  <div>
                    <p style="font-size:0.85rem; font-weight:700; color:white;">${req.clientName}</p>
                    <p style="font-size:0.68rem; color:var(--gold);">${req.type} · ${req.duration}</p>
                  </div>
                </div>
                <span style="font-size:0.85rem; font-weight:700; color:#4ade80;">+₹${req.amount}</span>
              </div>
              <p style="font-size:0.7rem; color:#9ca3af; margin:8px 0; line-height:1.4; background:rgba(255,255,255,0.03); padding:6px 8px; border-radius:6px;">"${req.clientQuestion}"</p>
              <div style="display:flex; justify-content:flex-end; gap:8px;">
                <button class="btn-outline btn-sm" style="font-size:0.68rem; padding:4px 10px;" onclick="App.ExpertService.declineRequest('${req.id}')">Decline</button>
                <button class="btn-primary btn-sm" style="font-size:0.68rem; padding:4px 14px; background:#22c55e; border-color:#22c55e;" onclick="App.ExpertService.acceptRequest('${req.id}')">
                  Accept &amp; Start
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 26. EXPERT ACTIVE CONSULTATION SCREEN ─────────────────── */
  'astro-consult-live': (params) => {
    const req = DATA.astroConsultations.find(r => r.id === (params && params.id)) || DATA.astroConsultations[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; height:100%;">
      <!-- Header -->
      <div class="screen-header" style="padding:10px 14px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${req.clientAvatar}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
          <div>
            <p style="font-size:0.82rem; font-weight:700; color:white;">${req.clientName}</p>
            <p style="font-size:0.62rem; color:#4ade80;">Client · ${req.clientZodiac || 'Gemini'}</p>
          </div>
        </div>
        <button class="btn-primary btn-sm" style="background:#ef4444; border-color:#ef4444; font-size:0.7rem; padding:6px 12px;" onclick="App.ExpertService.endLiveSession('${req.id}')">
          End Session
        </button>
      </div>

      <!-- Messages Area -->
      <div id="astro-live-messages-scroll" style="flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:8px;">
        <div style="align-self:flex-start; max-width:80%; background:#160d33; border:1px solid rgba(139,92,246,0.3); color:white; padding:10px 14px; border-radius:14px 14px 14px 2px; font-size:0.8rem;">
          Namaste Pandit ji, ${req.clientQuestion}
          <div style="font-size:0.6rem; color:#9ca3af; margin-top:2px;">Just Now</div>
        </div>
      </div>

      <!-- Input Bar -->
      <div style="padding:10px 14px; background:#080313; border-top:1px solid rgba(255,255,255,0.08); display:flex; gap:8px;">
        <input type="text" id="astro-live-input" placeholder="Type astrological guidance..." onkeydown="if(event.key==='Enter') App.sendAstroLiveMessage()" style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:10px 14px; color:white; font-size:0.8rem; outline:none;">
        <button onclick="App.sendAstroLiveMessage()" style="width:40px; height:40px; border-radius:50%; background:#22c55e; border:none; color:white; display:flex; align-items:center; justify-content:center; cursor:pointer;">
          <i class="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
    `;
  },

  /* ── 27. EXPERT EARNINGS & SESSIONS ───────────────────────── */
  'astro-earnings': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Earnings &amp; Payouts</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div style="background:linear-gradient(135deg,#5b21b6,#7c3aed); border-radius:16px; padding:18px; margin-bottom:16px; color:white;">
          <p style="font-size:0.75rem; opacity:0.8;">Total Earnings (This Month)</p>
          <h2 style="font-size:2rem; font-weight:800; margin:4px 0 10px;">₹ 1,42,800</h2>
          <button class="btn-primary" style="background:#22c55e; border-color:#22c55e; padding:8px 16px; font-size:0.75rem; border-radius:8px;" onclick="App.showToast('Withdrawal initiated to your verified bank account ✓')">
            Withdraw to Bank
          </button>
        </div>
      </div>
    </div>
  `,

  'astro-consults': () => `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('astro-dashboard')"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Client Sessions</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${DATA.astroConsultations.map(c => `
            <div class="card" style="padding:12px;">
              <div style="display:flex; justify-content:space-between;">
                <p style="font-size:0.85rem; font-weight:700; color:white;">${c.clientName}</p>
                <span style="font-size:0.75rem; font-weight:700; color:#4ade80;">+₹${c.amount}</span>
              </div>
              <p style="font-size:0.7rem; color:var(--gold);">${c.type} · ${c.duration}</p>
              <p style="font-size:0.68rem; color:#9ca3af; margin-top:4px;">${c.date}, ${c.time}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
};
