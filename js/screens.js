/* ============================================================
   AstroTalkz by vorabion — Complete Screen Templates
   Pixel-Accurate Reference Match to reference_screens/
   STRICTLY ONLY Chat & Audio Call (NO Video Call).
   ============================================================ */

const Screens = {

  /* ── SHARED ASTROLOGER CARDS GENERATOR (Ref: 09.27.07.jpeg) ── */
  renderAstrologerCards(astros) {
    if (!astros || astros.length === 0) {
      return `
        <div style="text-align:center; padding:36px 16px; color:#9ca3af;">
          <i class="bi bi-search" style="font-size:2rem; opacity:0.4; display:block; margin-bottom:8px;"></i>
          <p style="font-size:0.85rem; font-weight:600; color:white;">No astrologers found</p>
          <p style="font-size:0.7rem; margin-top:4px;">Try a different keyword or filter.</p>
        </div>
      `;
    }

    return astros.map(a => {
      const isFav = DATA.favourites && DATA.favourites.includes(a.id);
      return `
        <div class="astro-card" onclick="Router.go('astro-profile', {id:'${a.id}'})">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <!-- Large Avatar with Status Dot -->
            <div class="astro-avatar-wrap" style="flex-shrink:0;">
              <img src="${a.avatar}" class="astro-avatar" alt="${a.name}" style="width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid rgba(139,92,246,0.4);">
              <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}" style="width:13px; height:13px; border:2px solid #0f0a1e; bottom:2px; right:4px;"></div>
            </div>

            <!-- Card Info -->
            <div style="flex:1; min-width:0;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="min-width:0; flex:1; padding-right:6px;">
                  <div style="display:flex; align-items:center; gap:5px;">
                    <span style="font-size:0.95rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name}</span>
                    ${a.verified ? '<i class="bi bi-patch-check-fill" style="color:#a78bfa; font-size:0.85rem; flex-shrink:0;"></i>' : ''}
                  </div>
                  <div style="font-size:0.68rem; color:#9ca3af; margin-top:2px;">
                    <span style="color:#eab308; font-weight:700;">★ ${a.rating}</span> (${a.reviews} Reviews) <span style="margin:0 4px; opacity:0.4;">|</span> <i class="bi bi-shield-check me-1"></i>${a.experience}
                  </div>
                </div>

                <!-- Status Badge -->
                <span class="astro-status-badge ${a.isOnline ? 'astro-status-available' : 'astro-status-offline'}" style="font-size:0.58rem; padding:2px 8px; border-radius:12px; flex-shrink:0;">
                  ${a.isOnline ? '● Available Now' : 'Offline'}
                </span>
              </div>

              <!-- Specialty -->
              <div style="font-size:0.72rem; color:var(--gold); margin:4px 0 3px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.title}</div>

              <!-- Tags Chips -->
              <div style="display:flex; gap:4px; flex-wrap:wrap; margin-bottom:4px;">
                ${a.expertise.slice(0,3).map(t => `<span style="background:rgba(255,255,255,0.06); color:#c4b5fd; font-size:0.58rem; padding:1px 6px; border-radius:4px; border:1px solid rgba(255,255,255,0.08);">${t}</span>`).join('')}
                ${a.expertise.length > 3 ? `<span style="background:rgba(255,255,255,0.04); color:#9ca3af; font-size:0.58rem; padding:1px 4px; border-radius:4px;">+${a.expertise.length - 3}</span>` : ''}
              </div>

              <!-- Languages -->
              <div style="font-size:0.65rem; color:#9ca3af; display:flex; align-items:center; gap:4px;">
                <i class="bi bi-globe"></i> ${a.languages.join(', ')}
              </div>
            </div>
          </div>

          <!-- Bottom Rates & CTA: 2-Column (Chat & Audio Call ONLY) -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
            <div style="display:flex; gap:12px; font-size:0.7rem;">
              <span style="color:#c4b5fd;"><i class="bi bi-chat-fill text-purple me-1"></i>₹ ${a.chatRate} <span style="font-size:0.58rem; color:#9ca3af;">/min</span></span>
              <span style="color:#86efac;"><i class="bi bi-telephone-fill text-green me-1"></i>₹ ${a.callRate} <span style="font-size:0.58rem; color:#9ca3af;">/min</span></span>
            </div>
            
            <div style="display:flex; gap:6px;">
              <button onclick="App.AstrologerService.toggleFavourite('${a.id}', event)" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); width:32px; height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; color:${isFav ? '#ef4444' : 'rgba(255,255,255,0.5)'}; font-size:0.95rem; cursor:pointer;">
                <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
              </button>
              <button class="btn-consult-now" style="background:linear-gradient(135deg,#5b21b6,#7c3aed); padding:6px 14px; font-size:0.72rem; border-radius:8px; font-weight:700;" onclick="event.stopPropagation(); App.BookingService.startBookingFlow('${a.id}', 'chat')">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  /* ── 1. USER LOGIN SCREEN ─────────────────────────────────── */
  'user-login': (params) => {
    return `
    <div class="screen" style="background: radial-gradient(ellipse at 50% 10%, #2a0d5e 0%, #150630 45%, #080313 100%); display:flex; flex-direction:column; overflow-y:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none;">
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px 20px 14px; text-align:center; flex-shrink:0;">
        <div style="margin-bottom:12px;">
          <svg width="76" height="76" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(234,179,8,0.2)" stroke-width="1"/>
            <g stroke="#eab308" stroke-width="2.5" stroke-linecap="round">
              <line x1="50" y1="6" x2="50" y2="16"/>
              <line x1="50" y1="84" x2="50" y2="94"/>
              <line x1="6" y1="50" x2="16" y2="50"/>
              <line x1="84" y1="50" x2="94" y2="50"/>
            </g>
            <circle cx="50" cy="50" r="16" fill="#eab308"/>
            <circle cx="46" cy="47" r="2" fill="#92400e"/>
            <circle cx="54" cy="47" r="2" fill="#92400e"/>
            <path d="M44 54 Q50 58 56 54" stroke="#92400e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <circle cx="58" cy="50" r="14" fill="#1a0a40"/>
          </svg>
        </div>

        <h1 style="font-family:'Playfair Display',serif; font-size:1.9rem; font-weight:700; color:white; line-height:1.1;">
          Astro<span style="color:#eab308;">Talkz</span>
        </h1>
        <p style="font-size:0.75rem; color:#eab308; letter-spacing:0.08em; margin-top:2px;">✦ by vorabion ✦</p>
        <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4; max-width:230px; margin-top:8px;">Your trusted guide to astrology, insights and a better tomorrow.</p>
      </div>

      <div class="login-card" style="padding-bottom:28px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
          <div style="width:36px; height:36px; border-radius:50%; background:rgba(108,43,217,0.1); display:flex; align-items:center; justify-content:center;">
            <i class="bi bi-phone" style="color:#7c3aed; font-size:1.1rem;"></i>
          </div>
          <div>
            <p style="font-size:0.88rem; font-weight:700; color:#111827;">Login / Sign Up</p>
            <p style="font-size:0.7rem; color:#6b7280;">Enter 10-digit mobile number to proceed</p>
          </div>
        </div>

        <div class="phone-input-group" style="margin-bottom:12px;">
          <div class="phone-country">
            <span>🇮🇳</span>
            <span>+91</span>
            <i class="bi bi-chevron-down" style="font-size:0.65rem; color:#6b7280;"></i>
          </div>
          <input class="phone-number-input" type="tel" id="phone-input" placeholder="9876543210" maxlength="10" value="9876543210">
        </div>

        <button class="btn-primary w-full" style="border-radius:12px; margin-bottom:12px; padding:12px; font-weight:700;" onclick="App.AuthService.handlePhoneSubmit()">
          Continue with Mobile <i class="bi bi-arrow-right ms-2"></i>
        </button>

        <button class="btn-google w-full" style="margin-bottom:14px; padding:10px; border-radius:12px;" onclick="App.AuthService.googleLogin()">
          <svg width="16" height="16" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
          Continue with Google
        </button>

        <p style="text-align:center; font-size:0.72rem; color:#6b7280;">
          Are you an astrologer? <a href="#" style="color:#7c3aed; font-weight:700;" onclick="App.switchRole('astrologer')">Astrologer Portal</a>
        </p>
      </div>
    </div>
    `;
  },

  /* ── 2. OTP VERIFICATION ──────────────────────────────────── */
  'otp-verify': (params) => {
    return `
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
          <p style="color:#9ca3af; font-size:0.82rem;">Enter 6-digit OTP sent to</p>
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
      </div>
    </div>
    `;
  },

  /* ── 3. ONBOARDING NAME ───────────────────────────────────── */
  'onboarding-name': (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.8rem; color:#9ca3af;">Step 1 of 2</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body" style="padding:24px 20px;">
        <h2 style="font-size:1.4rem; font-weight:700; color:white; margin-bottom:4px;">What's your full name?</h2>
        <p style="color:#9ca3af; font-size:0.8rem; margin-bottom:20px;">Let the astrologers know how to address you.</p>
        
        <input type="text" class="input-field" id="ob-name" placeholder="E.g., Priya Sharma" value="${DATA.currentUser.name}" style="background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:12px; padding:12px 14px; color:white; width:100%; margin-bottom:24px;">

        <button class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700;" onclick="App.AuthService.saveOnboardingName()">
          Next Step <i class="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
    `;
  },

  /* ── 4. ONBOARDING DOB ────────────────────────────────────── */
  'onboarding-dob': (params) => {
    return `
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
    `;
  },

  /* ── 5. USER HOME SCREEN (Ref: 09.27.04.jpeg) ─────────────── */
  home: (params) => {
    return `
    <div class="screen" style="display:flex; flex-direction:column; background:#08031a; overflow:hidden;">
      <!-- Hero Background Area with Cosmic Artwork -->
      <div class="home-hero-bg" style="flex-shrink:0; position:relative; height:270px; overflow:hidden;">
        <!-- Glowing Cosmic Temple SVG Background -->
        <div style="position:absolute; right:-20px; top:-20px; width:270px; height:270px; opacity:0.4;">
          <svg viewBox="0 0 280 280" fill="none">
            <circle cx="140" cy="140" r="135" stroke="#eab308" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6"/>
            <circle cx="140" cy="140" r="105" stroke="#7c3aed" stroke-width="0.8" opacity="0.4"/>
            <circle cx="140" cy="140" r="75" stroke="#eab308" stroke-width="0.8" opacity="0.3"/>
            <circle cx="140" cy="140" r="40" fill="rgba(234,179,8,0.2)"/>
            <circle cx="140" cy="140" r="28" fill="rgba(234,179,8,0.4)"/>
            <ellipse cx="200" cy="60" rx="18" ry="7" stroke="#a78bfa" stroke-width="1" fill="none" transform="rotate(-20 200 60)"/>
            <circle cx="200" cy="60" r="8" fill="#7c3aed" opacity="0.8"/>
          </svg>
        </div>

        <!-- Top Header -->
        <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; position:relative; z-index:10;">
          <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list" style="font-size:1.3rem;"></i></button>
          <div style="text-align:center;">
            <p style="font-family:'Playfair Display',serif; font-size:1.15rem; font-weight:700; color:white; letter-spacing:0.02em;">AstroTalkz</p>
            <p style="font-size:0.62rem; color:#eab308; letter-spacing:0.08em;">✦ by vorabion ✦</p>
          </div>
          <div style="position:relative;">
            <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
            <span class="badge-dot" style="top:4px; right:4px; display:${DATA.notifications.some(n=>!n.read)?'block':'none'};"></span>
          </div>
        </div>

        <!-- Greeting & Hero Text -->
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
          <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4;">Connect with verified astrologers and get answers to life's important questions.</p>
        </div>
      </div>

      <!-- Bottom Sheet Area -->
      <div class="bottom-sheet">
        <div class="sheet-handle"></div>

        <!-- Profile + Wallet Pill (Ref: 09.27.04.jpeg) -->
        <div class="profile-pill" onclick="Router.go('profile')" style="cursor:pointer; margin-bottom:12px;">
          <div class="flex-start gap-12">
            <div style="width:42px; height:42px; border-radius:50%; background:rgba(108,43,217,0.25); border:2px solid rgba(139,92,246,0.4); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-stars" style="color:#eab308; font-size:1.2rem;"></i>
            </div>
            <div>
              <p style="font-size:0.88rem; font-weight:700; color:white;">${DATA.currentUser.name}</p>
              <p style="font-size:0.65rem; color:#9ca3af; margin-top:1px;">View your profile &gt;</p>
            </div>
          </div>
          <div class="wallet-pill" onclick="event.stopPropagation(); Router.go('wallet-topup')">
            <i class="bi bi-wallet2" style="color:#eab308;"></i>
            <span>₹ ${DATA.currentUser.walletBalance.toFixed(2)}</span>
            <div style="width:18px; height:18px; border-radius:50%; background:rgba(234,179,8,0.25); display:flex; align-items:center; justify-content:center;">
              <i class="bi bi-plus" style="color:#eab308; font-size:0.75rem;"></i>
            </div>
          </div>
        </div>

        <!-- Scrollable Content -->
        <div style="flex:1; overflow-y:auto; padding-bottom:70px;" class="screen-body">
          <!-- Discover Section -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">Discover</p>
          <div class="menu-group" style="margin-bottom:16px;">
            <div class="menu-row" onclick="Router.go('consult')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-chat-dots-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">Consult Astrologers</p>
                <p class="menu-row-sub">Chat or Voice Call directly</p>
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
              <div class="menu-row-icon icon-teal"><i class="bi bi-file-earmark-ruled-fill"></i></div>
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

          <!-- Account Section -->
          <p class="section-label" style="padding:0 16px; margin-bottom:8px;">Account</p>
          <div class="menu-group" style="margin-bottom:16px;">
            <div class="menu-row" onclick="Router.go('bookings')">
              <div class="menu-row-icon icon-purple"><i class="bi bi-calendar2-check-fill"></i></div>
              <div class="menu-row-text">
                <p class="menu-row-title">My Bookings</p>
                <p class="menu-row-sub">View your past and upcoming sessions</p>
              </div>
              <i class="bi bi-chevron-right menu-row-arrow"></i>
            </div>
            <div class="menu-row" onclick="Router.go('transactions')">
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
    `;
  },

  /* ── 6. CONSULT SCREEN (Ref: 09.27.07.jpeg) ───────────────── */
  consult: (params) => {
    const list = App.AstrologerService.getFilteredList();
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header with Subtitle -->
      <div class="screen-header" style="flex-direction:column; padding:10px 16px 6px; align-items:stretch;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
          <div style="text-align:center;">
            <p style="font-size:1.05rem; font-weight:700; color:white; letter-spacing:0.02em;">✦ Consult ✦</p>
            <p style="font-size:0.62rem; color:#9ca3af;">Connect with verified astrologers</p>
          </div>
          <div style="position:relative;">
            <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
            <span class="badge-dot" style="display:${DATA.notifications.some(n=>!n.read)?'block':'none'};"></span>
          </div>
        </div>
      </div>

      <div class="screen-body pb-nav">
        <!-- Search Row with Purple Filter Button -->
        <div style="padding:0 16px 12px; display:flex; gap:10px; align-items:center;">
          <div style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.1); border-radius:14px; display:flex; align-items:center; padding:10px 14px; gap:8px;">
            <i class="bi bi-search" style="color:#9ca3af; font-size:0.9rem;"></i>
            <input type="text" placeholder="Search astrologers, expertise or topics..." value="${STATE.consultSearchQuery||''}" oninput="App.AstrologerService.setSearch(this.value)" style="background:none; border:none; outline:none; color:white; font-size:0.78rem; flex:1; font-family:inherit;">
          </div>
          <button style="width:44px; height:44px; border-radius:50%; background:#5b21b6; border:none; color:white; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;" onclick="App.toggleConsultFilterModal()">
            <i class="bi bi-funnel-fill" style="font-size:1.1rem;"></i>
          </button>
        </div>

        <!-- Cosmic Hero Banner (Ref: 09.27.07.jpeg) -->
        <div style="margin:0 16px 14px; background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:18px; padding:14px; position:relative; overflow:hidden;">
          <div style="position:absolute; right:-10px; top:-10px; width:130px; height:130px; opacity:0.4;">
            <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#eab308" stroke-dasharray="3 3"/><circle cx="50" cy="50" r="30" stroke="#7c3aed"/><circle cx="50" cy="50" r="14" fill="#eab308" opacity="0.6"/></svg>
          </div>
          <h3 style="font-size:0.98rem; font-weight:700; color:white;">Speak to an Astrologer</h3>
          <h4 style="font-size:0.95rem; font-weight:700; color:#eab308; margin-top:2px;">Get Clarity in Life</h4>
          <p style="font-size:0.65rem; color:#9ca3af; line-height:1.4; max-width:210px; margin:4px 0 10px;">Love, Career, Finance or Health – we're here to guide you.</p>
          
          <!-- 2 Balanced Buttons: Chat & Audio Call ONLY (NO VIDEO) -->
          <div style="display:flex; gap:8px;">
            <button onclick="App.AstrologerService.setTypeFilter('chat')" style="background:${STATE.consultTypeFilter==='chat'?'#7c3aed':'rgba(124,58,237,0.3)'}; border:1px solid #7c3aed; color:white; border-radius:8px; padding:6px 12px; font-size:0.68rem; font-weight:600; display:flex; align-items:center; gap:5px; cursor:pointer;">
              <i class="bi bi-chat-fill"></i> Chat
            </button>
            <button onclick="App.AstrologerService.setTypeFilter('call')" style="background:${STATE.consultTypeFilter==='call'?'#22c55e':'rgba(34,197,94,0.2)'}; border:1px solid #22c55e; color:#4ade80; border-radius:8px; padding:6px 12px; font-size:0.68rem; font-weight:600; display:flex; align-items:center; gap:5px; cursor:pointer;">
              <i class="bi bi-telephone-fill"></i> Audio Call
            </button>
          </div>
        </div>

        <!-- Categories Row (Ref: 09.27.07.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Categories</p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;" onclick="App.AstrologerService.setCategory('All')">View All &gt;</span>
        </div>
        <div class="category-scroll" style="margin-bottom:14px;">
          ${[
            { icon: 'bi bi-star-fill', label: 'All' },
            { icon: 'bi bi-heart-fill', label: 'Love & Relationship' },
            { icon: 'bi bi-briefcase-fill', label: 'Career' },
            { icon: 'bi bi-coin', label: 'Finance' },
            { icon: 'bi bi-gem', label: 'Marriage' },
            { icon: 'bi bi-flower1', label: 'Health' }
          ].map(c => {
            const active = STATE.consultCategoryFilter === (c.label === 'All' ? 'All' : c.label);
            return `
              <div class="cat-chip ${active?'active':''}" onclick="App.AstrologerService.setCategory('${c.label}')">
                <div class="cat-chip-icon"><i class="${c.icon}"></i></div>
                <span class="cat-chip-label">${c.label}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Top Astrologers Header -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:10px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Top Astrologers</p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;">View All &gt;</span>
        </div>

        <!-- Astrologers List -->
        <div id="consult-astros-list">
          ${Screens.renderAstrologerCards(list)}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 7. ASTROLOGER PROFILE (Ref: 09.28.13.jpeg) ───────────── */
  'astro-profile': (params) => {
    const a = DATA.astrologers.find(x => x.id === (params && params.id)) || DATA.astrologers[0];
    const isFav = DATA.favourites && DATA.favourites.includes(a.id);
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">✦ Astrologer Profile ✦</div>
        <div style="display:flex; gap:6px;">
          <button class="header-btn" onclick="App.showToast('Profile link copied!')"><i class="bi bi-share"></i></button>
          <button class="header-btn" onclick="App.AstrologerService.toggleFavourite('${a.id}', event)">
            <i class="bi bi-heart${isFav?'-fill':''}" style="color:${isFav?'#ef4444':'white'};"></i>
          </button>
        </div>
      </div>

      <div class="screen-body" style="padding-bottom:90px;">
        <!-- Hero Details -->
        <div style="padding:16px; display:flex; gap:14px; align-items:flex-start;">
          <div class="astro-avatar-wrap">
            <img src="${a.avatar}" style="width:84px; height:84px; border-radius:50%; object-fit:cover; border:2.5px solid rgba(139,92,246,0.5);">
            <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}" style="width:14px; height:14px; border:2px solid #0f0a1e;"></div>
          </div>
          <div style="flex:1; min-width:0;">
            <div style="display:flex; align-items:center; gap:6px;">
              <h2 style="font-size:1.1rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name}</h2>
              ${a.verified ? '<i class="bi bi-patch-check-fill" style="color:#a78bfa; font-size:0.9rem;"></i>' : ''}
            </div>
            <p style="font-size:0.75rem; color:var(--gold); margin:2px 0 3px; font-weight:600;">${a.title}</p>
            <div style="font-size:0.68rem; color:#9ca3af; margin-bottom:2px;"><i class="bi bi-star-fill text-gold me-1"></i>${a.rating} (${a.reviews} Reviews) <span style="margin:0 4px; opacity:0.4;">|</span> <i class="bi bi-shield-check text-purple me-1"></i>Verified</div>
            <div style="font-size:0.68rem; color:#9ca3af; margin-bottom:2px;"><i class="bi bi-briefcase me-1"></i>${a.experience}</div>
            <div style="font-size:0.68rem; color:#9ca3af;"><i class="bi bi-globe me-1"></i>${a.languages.join(', ')}</div>
          </div>
        </div>

        <!-- 4 Stats Grid (Ref: 09.28.13.jpeg) -->
        <div style="display:grid; grid-template-columns:repeat(4,1fr); margin:0 16px 16px; background:#0f0a1e; border:1px solid rgba(255,255,255,0.06); border-radius:14px; overflow:hidden;">
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-people text-purple" style="font-size:1rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.consultationsCount}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Consultations</p>
          </div>
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-star-fill text-gold" style="font-size:1rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.rating}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Rating</p>
          </div>
          <div style="padding:10px 4px; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">
            <i class="bi bi-chat-square-text text-purple" style="font-size:1rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.reviews}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Reviews</p>
          </div>
          <div style="padding:10px 4px; text-align:center;">
            <i class="bi bi-clock-history text-purple" style="font-size:1rem; display:block; margin-bottom:2px;"></i>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${a.experience.split(' ')[0]}</p>
            <p style="font-size:0.55rem; color:#9ca3af;">Years Exp.</p>
          </div>
        </div>

        <!-- About Astrologer -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:6px;">About Astrologer</p>
          <p style="font-size:0.72rem; color:#9ca3af; line-height:1.5;">${a.bio}</p>
          <p style="font-size:0.68rem; color:#a78bfa; font-weight:600; margin-top:4px; cursor:pointer;">Read More ∨</p>
        </div>

        <!-- Areas of Expertise -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:8px;">Areas of Expertise</p>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${a.expertise.map(e => `
              <span style="background:rgba(139,92,246,0.12); border:1px solid rgba(139,92,246,0.3); color:#c4b5fd; font-size:0.65rem; padding:4px 10px; border-radius:8px; display:inline-flex; align-items:center; gap:4px;">
                <i class="bi bi-stars" style="color:var(--gold);"></i> ${e}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- 2 Consultation Services: CHAT & AUDIO CALL ONLY (Ref: 09.28.13.jpeg) -->
        <div style="margin:0 16px 14px;">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:8px;">Consultation Services</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div class="card" style="padding:12px; border:1.5px solid ${STATE.selectedConsultationType==='chat'?'#7c3aed':'rgba(255,255,255,0.06)'}; cursor:pointer;" onclick="STATE.selectedConsultationType='chat'; App.render('astro-profile', {id:'${a.id}'})">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(124,58,237,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:8px;">
                <i class="bi bi-chat-fill text-purple" style="font-size:1.1rem;"></i>
              </div>
              <p style="font-size:0.82rem; font-weight:700; color:white;">Chat</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:2px 0 8px;">Get answers to your questions</p>
              <p style="font-size:0.95rem; font-weight:700; color:#4ade80;">₹ ${a.chatRate} <span style="font-size:0.6rem; color:#9ca3af;">/min</span></p>
            </div>

            <div class="card" style="padding:12px; border:1.5px solid ${STATE.selectedConsultationType==='call'?'#22c55e':'rgba(255,255,255,0.06)'}; cursor:pointer;" onclick="STATE.selectedConsultationType='call'; App.render('astro-profile', {id:'${a.id}'})">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(34,197,94,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:8px;">
                <i class="bi bi-telephone-fill text-green" style="font-size:1.1rem;"></i>
              </div>
              <p style="font-size:0.82rem; font-weight:700; color:white;">Audio Call</p>
              <p style="font-size:0.62rem; color:#9ca3af; margin:2px 0 8px;">Speak directly with astrologer</p>
              <p style="font-size:0.95rem; font-weight:700; color:#4ade80;">₹ ${a.callRate} <span style="font-size:0.6rem; color:#9ca3af;">/min</span></p>
            </div>
          </div>
        </div>

        <!-- Availability (Ref: 09.28.13.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between mb-8">
            <p style="font-size:0.82rem; font-weight:700; color:white;">Availability</p>
            <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;"><i class="bi bi-calendar-event me-1"></i>View Calendar &gt;</span>
          </div>
          <div style="display:flex; gap:6px; overflow-x:auto; scrollbar-width:none;">
            ${['Today 24 May', 'Sat 25 May', 'Sun 26 May', 'Mon 27 May', 'Tue 28 May'].map((d, i) => `
              <div style="flex-shrink:0; background:${i===0?'rgba(124,58,237,0.25)':'#08031a'}; border:1px solid ${i===0?'#7c3aed':'rgba(255,255,255,0.06)'}; border-radius:10px; padding:6px 10px; text-align:center;">
                <p style="font-size:0.68rem; font-weight:600; color:white;">${d.split(' ')[0]}</p>
                <p style="font-size:0.6rem; color:#9ca3af;">${d.split(' ')[1]} ${d.split(' ')[2]}</p>
                <span style="font-size:0.55rem; color:#4ade80; font-weight:600;">Available</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- What People Say -->
        <div style="margin:0 16px;" class="card">
          <div class="flex-between mb-8">
            <p style="font-size:0.82rem; font-weight:700; color:white;">What People Say</p>
            <span style="font-size:0.68rem; color:#a78bfa;">View All Reviews &gt;</span>
          </div>
          <div style="display:flex; gap:10px; align-items:flex-start;">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
            <div style="flex:1;">
              <div class="flex-between">
                <span style="color:#eab308; font-size:0.7rem;">★★★★★</span>
                <span style="font-size:0.6rem; color:#9ca3af;">Priya S. · 2 days ago</span>
              </div>
              <p style="font-size:0.7rem; color:#9ca3af; margin-top:2px; line-height:1.4;">"Very accurate predictions and helpful guidance. Thank you so much!"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sticky Bottom Bar (Ref: 09.28.13.jpeg) -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.98); border-top:1px solid rgba(255,255,255,0.08); padding:10px 16px; display:flex; justify-content:space-between; align-items:center; z-index:50;">
        <div>
          <p style="font-size:0.62rem; color:#9ca3af;">Consultation Charges</p>
          <p style="font-size:0.88rem; font-weight:700; color:white;">₹ ${STATE.selectedConsultationType==='call'?a.callRate:a.chatRate} <span style="font-size:0.65rem; color:#9ca3af;">/min (${STATE.selectedConsultationType==='call'?'Call':'Chat'})</span></p>
        </div>
        <button class="btn-primary" style="padding:12px 24px; border-radius:12px; font-weight:700; font-size:0.82rem; display:flex; align-items:center; gap:6px;" onclick="App.BookingService.startBookingFlow('${a.id}', '${STATE.selectedConsultationType}')">
          <i class="bi bi-${STATE.selectedConsultationType==='call'?'telephone-fill':'chat-fill'}"></i> Start ${STATE.selectedConsultationType==='call'?'Audio Call':'Chat'}
        </button>
      </div>
    </div>
    `;
  },

  /* ── 8. DAILY HOROSCOPE (Ref: 09.29.13.jpeg) ──────────────── */
  horoscope: (params) => {
    const signs = Object.keys(DATA.horoscopes);
    const curr = DATA.horoscopes[STATE.selectedHoroscopeSign] || DATA.horoscopes.Aries;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">✦ Daily Horoscope ✦</div>
        <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Date Selector (Ref: 09.29.13.jpeg) -->
        <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-bottom:12px;">
          <button style="color:#9ca3af; font-size:0.9rem;"><i class="bi bi-chevron-left"></i></button>
          <div style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:6px 16px; font-size:0.72rem; color:white; font-weight:600; display:flex; align-items:center; gap:6px;">
            <i class="bi bi-calendar-event text-purple"></i> 24 May 2026, Friday <i class="bi bi-chevron-down ms-1" style="font-size:0.6rem;"></i>
          </div>
          <button style="color:#9ca3af; font-size:0.9rem;"><i class="bi bi-chevron-right"></i></button>
        </div>

        <!-- Zodiac Header Card (Ref: 09.29.13.jpeg) -->
        <div style="margin:0 16px 12px; background:#0f0a1e; border:1px solid rgba(139,92,246,0.3); border-radius:16px; padding:12px 14px; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:10px; align-items:center;">
            <div style="width:42px; height:42px; border-radius:50%; background:rgba(124,58,237,0.25); border:1px solid #7c3aed; display:flex; align-items:center; justify-content:center; font-size:1.4rem; color:white;">
              ${curr.symbol}
            </div>
            <div>
              <h3 style="font-size:1.05rem; font-weight:700; color:white;">${STATE.selectedHoroscopeSign}</h3>
              <p style="font-size:0.65rem; color:#9ca3af;">${curr.dates}</p>
            </div>
          </div>
          <button onclick="App.showZodiacPickerModal()" style="background:rgba(124,58,237,0.2); border:1px solid #7c3aed; color:#c4b5fd; border-radius:20px; padding:6px 12px; font-size:0.68rem; font-weight:600; display:flex; align-items:center; gap:4px;">
            <i class="bi bi-arrow-repeat"></i> Change Sign
          </button>
        </div>

        <!-- Timeframe Tabs (Ref: 09.29.13.jpeg) -->
        <div style="display:flex; justify-content:space-around; margin:0 16px 12px; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px;">
          ${['Today', 'Tomorrow', 'This Week', 'This Month', 'This Year'].map(tab => `
            <span onclick="STATE.selectedHoroscopeTab='${tab}'; App.render('horoscope');" style="font-size:0.72rem; color:${STATE.selectedHoroscopeTab===tab?'#c4b5fd':'#9ca3af'}; font-weight:${STATE.selectedHoroscopeTab===tab?'700':'500'}; border-bottom:${STATE.selectedHoroscopeTab===tab?'2px solid #a78bfa':'none'}; padding-bottom:4px; cursor:pointer;">
              ${tab}
            </span>
          `).join('')}
        </div>

        <!-- Horoscope Card with Circular Gauge (Ref: 09.29.13.jpeg) -->
        <div style="margin:0 16px 12px;" class="card">
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:12px;">
            <div style="width:68px; height:68px; border-radius:50%; background:conic-gradient(#7c3aed ${curr.overall*3.6}deg, rgba(255,255,255,0.08) 0deg); display:flex; align-items:center; justify-content:center; flex-shrink:0; padding:4px;">
              <div style="width:100%; height:100%; border-radius:50%; background:#0f0a1e; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size:0.95rem; font-weight:800; color:white;">${curr.overall}%</span>
                <span style="font-size:0.5rem; color:#9ca3af;">Overall</span>
              </div>
            </div>
            <div>
              <h4 style="font-size:0.9rem; font-weight:700; color:white;">${curr.headline}</h4>
              <p style="font-size:0.68rem; color:#9ca3af; margin-top:2px; line-height:1.4;">${curr.summary}</p>
            </div>
          </div>

          <!-- Star Ratings Grid -->
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; border-top:1px solid rgba(255,255,255,0.06); padding-top:8px; text-align:center;">
            <div>
              <p style="font-size:0.62rem; color:#9ca3af;">❤️ Love</p>
              <p style="font-size:0.65rem; color:#eab308; margin-top:2px;">★★★★☆</p>
            </div>
            <div>
              <p style="font-size:0.62rem; color:#9ca3af;">💼 Career</p>
              <p style="font-size:0.65rem; color:#eab308; margin-top:2px;">★★★★☆</p>
            </div>
            <div>
              <p style="font-size:0.62rem; color:#9ca3af;">💰 Money</p>
              <p style="font-size:0.65rem; color:#eab308; margin-top:2px;">★★★☆☆</p>
            </div>
            <div>
              <p style="font-size:0.62rem; color:#9ca3af;">🌿 Health</p>
              <p style="font-size:0.65rem; color:#eab308; margin-top:2px;">★★★★★</p>
            </div>
          </div>
        </div>

        <!-- Detailed Horoscope -->
        <div style="margin:0 16px 12px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:4px;"><i class="bi bi-file-text text-purple me-1"></i>Detailed Horoscope</p>
          <p style="font-size:0.7rem; color:#9ca3af; line-height:1.5;">${curr.detailed}</p>
          <p style="font-size:0.65rem; color:#a78bfa; font-weight:600; margin-top:4px; cursor:pointer;">Read More ∨</p>
        </div>

        <!-- Lucky Guide (Ref: 09.29.13.jpeg) -->
        <div style="margin:0 16px 12px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:8px;">✦ Lucky Guide</p>
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; text-align:center;">
            <div style="background:#08031a; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Lucky Number</p>
              <p style="font-size:0.85rem; font-weight:700; color:#c4b5fd;">${curr.luckyNumber}</p>
            </div>
            <div style="background:#08031a; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Lucky Color</p>
              <p style="font-size:0.75rem; font-weight:700; color:#f87171;">${curr.luckyColor}</p>
            </div>
            <div style="background:#08031a; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Lucky Time</p>
              <p style="font-size:0.68rem; font-weight:700; color:#38bdf8;">${curr.luckyTime}</p>
            </div>
            <div style="background:#08031a; padding:6px; border-radius:8px;">
              <p style="font-size:0.58rem; color:#9ca3af;">Gemstone</p>
              <p style="font-size:0.68rem; font-weight:700; color:#ec4899;">${curr.luckyGemstone}</p>
            </div>
          </div>
        </div>

        <!-- Remedies for You -->
        <div style="margin:0 16px 16px;" class="card">
          <p style="font-size:0.8rem; font-weight:700; color:white; margin-bottom:8px;">🌿 Remedies for You</p>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${(curr.remedies||[]).map(r => `
              <div style="background:#08031a; border-radius:8px; padding:8px 10px; display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; color:#c4b5fd;">
                <div style="display:flex; gap:8px; align-items:center;">
                  <span>${r.icon}</span>
                  <span>${r.text}</span>
                </div>
                <i class="bi bi-chevron-right" style="color:#6b7280; font-size:0.7rem;"></i>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Sticky Bottom CTA (Ref: 09.29.13.jpeg) -->
        <div style="padding:0 16px; display:flex; gap:10px; align-items:center;">
          <button class="header-btn" onclick="App.showToast('Horoscope shared!')"><i class="bi bi-share"></i></button>
          <button class="btn-primary flex-1" style="padding:12px; border-radius:12px; font-weight:700; font-size:0.8rem;" onclick="Router.go('consult')">
            Consult Astrologer <span style="font-size:0.65rem; opacity:0.8; display:block;">Get personalized guidance</span>
          </button>
          <button class="header-btn" onclick="App.showToast('Saved to your horoscope bookmarks!')"><i class="bi bi-bookmark"></i></button>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 9. MY BOOKINGS SCREEN (Ref: 09.30.14.jpeg) ───────────── */
  bookings: (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header" style="flex-direction:column; padding:10px 16px 6px; align-items:stretch;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button class="header-btn" onclick="Router.go('app-drawer')"><i class="bi bi-list"></i></button>
          <div style="text-align:center;">
            <p style="font-size:1.05rem; font-weight:700; color:white;">✦ My Bookings ✦</p>
            <p style="font-size:0.62rem; color:#9ca3af;">All your consultations at one place</p>
          </div>
          <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
        </div>
      </div>

      <div class="screen-body pb-nav">
        <!-- Filter Tabs (Ref: 09.30.14.jpeg) -->
        <div class="filter-tabs" style="margin-bottom:12px;">
          ${[
            { id: 'all', label: 'All' },
            { id: 'upcoming', label: '📅 Upcoming' },
            { id: 'completed', label: '✅ Completed' },
            { id: 'cancelled', label: '❌ Cancelled' }
          ].map(t => `
            <button class="filter-tab ${t.id==='all'?'active':''}" onclick="App.filterBookings('${t.id}')">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <!-- Immediate Guidance Promo Banner -->
        <div style="margin:0 16px 14px; background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:16px; padding:14px; position:relative; overflow:hidden;">
          <p style="font-size:0.75rem; color:#9ca3af;">Need immediate guidance?</p>
          <h4 style="font-size:0.95rem; font-weight:700; color:var(--gold); margin:2px 0 8px;">Talk to an Astrologer Now</h4>
          <button class="btn-primary" style="padding:6px 14px; font-size:0.7rem; border-radius:8px;" onclick="Router.go('consult')">
            Consult Now <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>

        <!-- Upcoming Bookings (Ref: 09.30.14.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Upcoming Bookings</p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;"><i class="bi bi-calendar-event me-1"></i>View Calendar &gt;</span>
        </div>

        <div style="padding:0 16px 12px;">
          ${DATA.bookings.filter(b=>b.status==='upcoming').map(b => `
            <div class="card mb-12" style="padding:14px; cursor:pointer;" onclick="Router.go('booking-detail', {bookingId:'${b.id}'})">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="display:flex; gap:12px; align-items:center;">
                  <img src="${b.astrologerAvatar}" style="width:54px; height:54px; border-radius:50%; object-fit:cover; border:2px solid rgba(139,92,246,0.4);">
                  <div>
                    <div style="display:flex; align-items:center; gap:4px;">
                      <span style="font-size:0.9rem; font-weight:700; color:white;">${b.astrologerName}</span>
                      <i class="bi bi-patch-check-fill text-purple" style="font-size:0.8rem;"></i>
                    </div>
                    <p style="font-size:0.68rem; color:var(--gold); margin-top:1px;">${b.expertise}</p>
                    <p style="font-size:0.65rem; color:#9ca3af; margin-top:2px;"><i class="bi bi-calendar3 me-1"></i>${b.date}</p>
                    <p style="font-size:0.65rem; color:#9ca3af;"><i class="bi bi-clock me-1"></i>${b.time}</p>
                    <p style="font-size:0.65rem; color:#c4b5fd; margin-top:2px;"><i class="bi bi-${b.type==='Chat'?'chat-fill':'telephone-fill'} me-1"></i>${b.type}</p>
                  </div>
                </div>

                <div style="text-align:right;">
                  <span class="badge badge-confirmed" style="font-size:0.6rem;">Confirmed</span>
                  <p style="font-size:0.6rem; color:#9ca3af; margin-top:4px;">Booking ID</p>
                  <p style="font-size:0.68rem; font-weight:700; color:white;">${b.id}</p>
                  <button class="btn-primary" style="margin-top:8px; padding:6px 14px; font-size:0.72rem; border-radius:8px;" onclick="event.stopPropagation(); ${b.type==='Chat'?`Router.go('chat',{id:'${b.astrologerId}'})`:`Router.go('audio-call',{id:'${b.astrologerId}'})`}">
                    <i class="bi bi-play-circle-fill me-1"></i> Join Now
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Completed Bookings (Ref: 09.30.14.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Completed Bookings</p>
          <span style="font-size:0.68rem; color:#a78bfa;">View All &gt;</span>
        </div>

        <div style="padding:0 16px 12px;">
          ${DATA.bookings.filter(b=>b.status==='completed').map(b => `
            <div class="card mb-8" style="padding:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${b.astrologerAvatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
                  <div>
                    <span style="font-size:0.85rem; font-weight:700; color:white;">${b.astrologerName}</span>
                    <p style="font-size:0.65rem; color:var(--gold);">${b.expertise}</p>
                    <p style="font-size:0.62rem; color:#9ca3af;">${b.date} · ${b.time}</p>
                  </div>
                </div>
                <div style="text-align:right;">
                  <span class="badge badge-completed" style="font-size:0.58rem;">Completed</span>
                  <p style="font-size:0.65rem; color:#eab308; margin-top:2px;">★ ${b.rating}</p>
                  <button class="btn-outline btn-sm" style="margin-top:4px; font-size:0.65rem; padding:3px 8px;" onclick="Router.go('booking-detail', {bookingId:'${b.id}'})">View Details</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Cancelled Bookings -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Cancelled Bookings</p>
          <span style="font-size:0.68rem; color:#a78bfa;">View All &gt;</span>
        </div>

        <div style="padding:0 16px 16px;">
          ${DATA.bookings.filter(b=>b.status==='cancelled').map(b => `
            <div class="card mb-8" style="padding:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${b.astrologerAvatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
                  <div>
                    <span style="font-size:0.85rem; font-weight:700; color:white;">${b.astrologerName}</span>
                    <p style="font-size:0.65rem; color:var(--gold);">${b.expertise}</p>
                    <p style="font-size:0.62rem; color:#9ca3af;">${b.date} · ${b.time}</p>
                  </div>
                </div>
                <div style="text-align:right;">
                  <span class="badge badge-cancelled" style="font-size:0.58rem;">Cancelled</span>
                  <button class="btn-outline btn-sm" style="margin-top:4px; font-size:0.65rem; padding:3px 8px; display:block;" onclick="Router.go('booking-detail', {bookingId:'${b.id}'})">View Details</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 10. BOOKING DETAILS (Ref: 09.31.13.jpeg) ─────────────── */
  'booking-detail': (params) => {
    const booking = DATA.bookings.find(b => b.id === (params && params.bookingId)) || DATA.bookings[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">✦ Booking Details ✦</div>
        <button class="header-btn" onclick="App.showToast('Booking details shared!')"><i class="bi bi-share"></i></button>
      </div>

      <div class="screen-body" style="padding-bottom:80px;">
        <!-- Astrologer Card (Ref: 09.31.13.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <img src="${booking.astrologerAvatar}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
            <div style="flex:1;">
              <div class="flex-between">
                <div style="display:flex; align-items:center; gap:4px;">
                  <span style="font-size:0.92rem; font-weight:700; color:white;">${booking.astrologerName}</span>
                  <i class="bi bi-patch-check-fill text-purple"></i>
                </div>
                <span class="badge badge-confirmed" style="font-size:0.6rem;">Confirmed</span>
              </div>
              <p style="font-size:0.7rem; color:var(--gold);">${booking.expertise}</p>
              <div style="font-size:0.65rem; color:#9ca3af; margin:2px 0;">★ 4.9 (125 Reviews) | 🛡️ 8 Years Exp.</div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
            <div>
              <p style="font-size:0.68rem; color:#9ca3af;"><i class="bi bi-calendar3 me-1"></i>${booking.date}</p>
              <p style="font-size:0.68rem; color:#9ca3af;"><i class="bi bi-clock me-1"></i>${booking.time}</p>
              <p style="font-size:0.68rem; color:#c4b5fd;"><i class="bi bi-${booking.type==='Chat'?'chat-fill':'telephone-fill'} me-1"></i>${booking.type}</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:0.6rem; color:#9ca3af;">Booking ID</p>
              <p style="font-size:0.72rem; font-weight:700; color:white;">${booking.id}</p>
              <button class="btn-primary" style="margin-top:6px; padding:6px 14px; font-size:0.72rem; border-radius:8px;" onclick="${booking.type==='Chat'?`Router.go('chat',{id:'${booking.astrologerId}'})`:`Router.go('audio-call',{id:'${booking.astrologerId}'})`}">
                <i class="bi bi-play-circle-fill me-1"></i> Join Now
              </button>
            </div>
          </div>
        </div>

        <!-- 4-Step Booking Status Tracker (Ref: 09.31.13.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:12px;">Booking Status</p>
          <div style="display:flex; justify-content:space-between; position:relative;">
            ${(booking.steps||[
              {label:'Booked', done:true, date:'20 May 2026 10:15 AM'},
              {label:'Payment Confirmed', done:true, date:'20 May 2026 10:16 AM'},
              {label:'Reminder Sent', done:true, date:'24 May 2026 09:00 AM'},
              {label:'Upcoming', done:false, date:'24 May 2026 10:30 AM'}
            ]).map(s => `
              <div style="display:flex; flex-direction:column; align-items:center; text-align:center; width:22%;">
                <div style="width:28px; height:28px; border-radius:50%; background:${s.done?'#22c55e':'#7c3aed'}; color:white; display:flex; align-items:center; justify-content:center; font-size:0.75rem; margin-bottom:4px;">
                  <i class="bi bi-${s.done?'check-lg':'clock'}"></i>
                </div>
                <p style="font-size:0.6rem; font-weight:600; color:white;">${s.label}</p>
                <p style="font-size:0.52rem; color:#9ca3af; margin-top:2px;">${s.date}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Consultation Details Breakdown (Ref: 09.31.13.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:10px;">Consultation Details</p>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:0.72rem; color:#9ca3af;">
            <div class="flex-between">
              <span><i class="bi bi-clock-history me-1"></i>Duration</span>
              <span style="color:white; font-weight:600;">${booking.duration}</span>
            </div>
            <div class="flex-between">
              <span><i class="bi bi-currency-rupee me-1"></i>Amount</span>
              <span style="color:white; font-weight:600;">₹ ${booking.ratePerMin || 20} /min</span>
            </div>
            <div class="flex-between">
              <span><i class="bi bi-tag me-1"></i>Total Paid</span>
              <span style="color:#4ade80; font-weight:700;">₹ ${booking.amount} (Paid)</span>
            </div>
            <div class="flex-between">
              <span><i class="bi bi-chat-left-text me-1"></i>Topic</span>
              <span style="color:white; font-weight:600;">${booking.topic || 'Career Guidance'}</span>
            </div>
          </div>
          <div style="margin-top:10px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.06); font-size:0.7rem; color:#9ca3af;">
            <p style="font-weight:600; color:white; margin-bottom:2px;"><i class="bi bi-sticky me-1"></i>Your Note</p>
            <p style="line-height:1.4;">${booking.note || 'I need guidance regarding career and future opportunities.'}</p>
          </div>
        </div>

        <!-- Before Your Session Checklist (Ref: 09.31.13.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:8px;">Before Your Session</p>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:0.7rem; color:#9ca3af;">
            <div style="display:flex; align-items:center; gap:8px;">
              <i class="bi bi-wifi text-purple"></i> Ensure good internet connection
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <i class="bi bi-volume-mute text-purple"></i> Find a quiet place without distractions
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <i class="bi bi-file-earmark-person text-purple"></i> Keep your birth details handy for better guidance
            </div>
          </div>
        </div>

        <!-- Need Help Bar -->
        <div style="margin:0 16px; background:#0f0a1e; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:10px 14px; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:10px; align-items:center;">
            <i class="bi bi-headset text-purple" style="font-size:1.2rem;"></i>
            <div>
              <p style="font-size:0.75rem; font-weight:600; color:white;">Need Help?</p>
              <p style="font-size:0.62rem; color:#9ca3af;">Our support team is here for you</p>
            </div>
          </div>
          <button class="btn-outline btn-sm" style="font-size:0.68rem; padding:4px 10px;" onclick="App.showToast('Support email: support@vorabion.com')">
            Contact Support
          </button>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 11. USER PROFILE SCREEN (Ref: 09.32.19.jpeg) ─────────── */
  profile: (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('settings')"><i class="bi bi-gear"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">✦ My Profile ✦</div>
        <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Profile Hero Card (Ref: 09.32.19.jpeg) -->
        <div style="margin:0 16px 12px; background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:18px; padding:16px; position:relative; overflow:hidden;">
          <div style="position:absolute; right:-10px; top:-10px; width:130px; height:130px; opacity:0.35;">
            <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#eab308" stroke-dasharray="3 3"/><circle cx="50" cy="50" r="30" stroke="#7c3aed"/><circle cx="50" cy="50" r="14" fill="#eab308" opacity="0.6"/></svg>
          </div>
          
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div style="display:flex; gap:14px; align-items:center;">
              <div style="position:relative;">
                <img src="${DATA.currentUser.avatar}" style="width:68px; height:68px; border-radius:50%; object-fit:cover; border:2.5px solid #7c3aed;">
                <div style="position:absolute; bottom:0; right:0; width:22px; height:22px; border-radius:50%; background:#5b21b6; display:flex; align-items:center; justify-content:center; color:white; font-size:0.65rem; border:1.5px solid #080313;">
                  <i class="bi bi-camera-fill"></i>
                </div>
              </div>
              <div>
                <h3 style="font-size:1.1rem; font-weight:700; color:white;">${DATA.currentUser.name} <i class="bi bi-pencil" style="font-size:0.75rem; color:#a78bfa; cursor:pointer;" onclick="App.showEditProfileModal()"></i></h3>
                <p style="font-size:0.72rem; color:#9ca3af;">${DATA.currentUser.phone}</p>
                <p style="font-size:0.68rem; color:#9ca3af;">${DATA.currentUser.email}</p>
                <div style="display:inline-block; background:rgba(234,179,8,0.15); color:#eab308; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:6px; margin-top:4px;">
                  ⭐ ${DATA.currentUser.points} Points
                </div>
              </div>
            </div>
            <span style="background:rgba(124,58,237,0.4); border:1px solid #7c3aed; color:#c4b5fd; font-size:0.65rem; font-weight:700; padding:3px 8px; border-radius:12px;">
              👑 Level ${DATA.currentUser.level}
            </span>
          </div>
        </div>

        <!-- 4 Stats Grid (Ref: 09.32.19.jpeg) -->
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; margin:0 16px 14px; text-align:center;">
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.6rem; color:#9ca3af;">My Points</p>
            <p style="font-size:0.88rem; font-weight:700; color:white; margin-top:2px;">${DATA.currentUser.points}</p>
          </div>
          <div class="card" style="padding:10px 4px; cursor:pointer;" onclick="Router.go('wallet-topup')">
            <p style="font-size:0.6rem; color:#9ca3af;">Wallet</p>
            <p style="font-size:0.88rem; font-weight:700; color:#4ade80; margin-top:2px;">₹ ${DATA.currentUser.walletBalance}</p>
          </div>
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.6rem; color:#9ca3af;">Coupons</p>
            <p style="font-size:0.88rem; font-weight:700; color:#eab308; margin-top:2px;">3 Avail.</p>
          </div>
          <div class="card" style="padding:10px 4px; cursor:pointer;" onclick="Router.go('favourites')">
            <p style="font-size:0.6rem; color:#9ca3af;">Favourites</p>
            <p style="font-size:0.88rem; font-weight:700; color:#ec4899; margin-top:2px;">${DATA.favourites.length}</p>
          </div>
        </div>

        <!-- My Details (Ref: 09.32.19.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">My Details</p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;" onclick="App.showEditProfileModal()">Edit &gt;</span>
        </div>

        <div class="menu-group" style="margin-bottom:14px;">
          <div class="menu-row" onclick="App.showEditProfileModal()">
            <div class="menu-row-icon icon-purple"><i class="bi bi-person-fill"></i></div>
            <div class="menu-row-text">
              <p class="menu-row-title">Personal Information</p>
              <p class="menu-row-sub">${DATA.currentUser.name} · ${DATA.currentUser.gender}</p>
            </div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.showEditProfileModal()">
            <div class="menu-row-icon icon-pink"><i class="bi bi-calendar-heart"></i></div>
            <div class="menu-row-text">
              <p class="menu-row-title">Birth Details</p>
              <p class="menu-row-sub">${DATA.currentUser.dob} · ${DATA.currentUser.birthTime} · ${DATA.currentUser.birthPlace}</p>
            </div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.showEditProfileModal()">
            <div class="menu-row-icon icon-teal"><i class="bi bi-geo-alt-fill"></i></div>
            <div class="menu-row-text">
              <p class="menu-row-title">Address</p>
              <p class="menu-row-sub">${DATA.currentUser.birthPlace}</p>
            </div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="Router.go('legal-doc')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-shield-lock-fill"></i></div>
            <div class="menu-row-text">
              <p class="menu-row-title">Privacy &amp; Security</p>
              <p class="menu-row-sub">Change password &amp; manage devices</p>
            </div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>

        <!-- Saved Astrologers (Ref: 09.32.19.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Saved Astrologers</p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;" onclick="Router.go('favourites')">View All &gt;</span>
        </div>

        <div style="display:flex; gap:10px; overflow-x:auto; padding:0 16px 14px; scrollbar-width:none;">
          ${DATA.astrologers.filter(a=>DATA.favourites.includes(a.id)).map(a => `
            <div onclick="Router.go('astro-profile', {id:'${a.id}'})" style="flex-shrink:0; text-align:center; width:68px; cursor:pointer;">
              <div style="position:relative; width:52px; height:52px; margin:0 auto 4px;">
                <img src="${a.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
                <div style="position:absolute; bottom:0; right:0; width:18px; height:18px; border-radius:50%; background:#ef4444; color:white; font-size:0.55rem; display:flex; align-items:center; justify-content:center;">
                  <i class="bi bi-heart-fill"></i>
                </div>
              </div>
              <p style="font-size:0.62rem; color:white; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name.split(' ')[1] || a.name}</p>
              <p style="font-size:0.55rem; color:#eab308;">★ ${a.rating}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 12. LIVE CHAT SCREEN (Ref: 09.37.43.jpeg) ────────────── */
  chat: (params) => {
    const astro = DATA.astrologers.find(a => a.id === (params && params.id)) || DATA.astrologers[0];
    const msgs = DATA.chatMessages[astro.id] || [];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; height:100%;">
      <!-- Header (Ref: 09.37.43.jpeg) -->
      <div class="screen-header" style="padding:10px 14px;">
        <button class="header-btn" onclick="Router.go('home')"><i class="bi bi-arrow-left"></i></button>
        <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:0; margin-left:6px;">
          <div style="position:relative;">
            <img src="${astro.avatar}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:1.5px solid #7c3aed;">
            <div class="online-dot" style="width:10px; height:10px;"></div>
          </div>
          <div style="flex:1; min-width:0;">
            <div style="display:flex; align-items:center; gap:4px;">
              <p style="font-size:0.85rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${astro.name}</p>
              <i class="bi bi-patch-check-fill text-purple" style="font-size:0.75rem;"></i>
            </div>
            <p style="font-size:0.62rem; color:var(--gold);">${astro.title}</p>
            <p style="font-size:0.58rem; color:#4ade80;">● Online</p>
          </div>
        </div>
        <button class="btn-outline btn-sm" style="font-size:0.65rem; padding:4px 10px; border-radius:12px; margin-right:4px;" onclick="Router.go('astro-profile', {id:'${astro.id}'})">
          View Profile
        </button>
        <button class="header-btn" onclick="App.endChatConsultation()"><i class="bi bi-three-dots-vertical"></i></button>
      </div>

      <!-- Security Banner (Ref: 09.37.43.jpeg) -->
      <div style="background:#160e35; border-bottom:1px solid rgba(139,92,246,0.2); padding:6px 14px; display:flex; justify-content:space-between; align-items:center; font-size:0.65rem; color:#c4b5fd;">
        <div style="display:flex; gap:6px; align-items:center;">
          <i class="bi bi-shield-check text-purple"></i>
          <span>This is a secure chat. Your messages are protected and never shared.</span>
        </div>
        <i class="bi bi-x" style="cursor:pointer;" onclick="this.parentElement.style.display='none'"></i>
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-container" style="flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px;">
        <div style="text-align:center; font-size:0.62rem; color:#9ca3af; margin:4px 0;">― Today ―</div>
        ${msgs.map(m => `
          <div style="display:flex; gap:8px; align-self:${m.sender==='user'?'flex-end':'flex-start'}; max-width:82%;">
            ${m.sender==='astrologer'?`<img src="${astro.avatar}" style="width:28px; height:28px; border-radius:50%; object-fit:cover; margin-top:2px;">`:''}
            <div style="background:${m.sender==='user'?'linear-gradient(135deg,#5b21b6,#7c3aed)':'#160d33'}; border:1px solid ${m.sender==='user'?'transparent':'rgba(139,92,246,0.25)'}; color:white; padding:10px 14px; border-radius:${m.sender==='user'?'16px 16px 2px 16px':'16px 16px 16px 2px'}; font-size:0.78rem; line-height:1.4;">
              ${m.text.split('\n').join('<br>')}
              <div style="font-size:0.58rem; color:${m.sender==='user'?'rgba(255,255,255,0.6)':'#9ca3af'}; text-align:${m.sender==='user'?'right':'left'}; margin-top:4px;">
                ${m.time} ${m.sender==='user'?'✓✓':''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Bottom Composer Bar (Ref: 09.37.43.jpeg) -->
      <div style="padding:8px 12px; background:#080313; border-top:1px solid rgba(255,255,255,0.08); display:flex; gap:8px; align-items:center;">
        <button style="color:#9ca3af; font-size:1.1rem;"><i class="bi bi-plus-circle"></i></button>
        <input type="text" id="chat-input-field" placeholder="Type your message..." onkeydown="if(event.key==='Enter') App.sendChatMessage()" style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:10px 16px; color:white; font-size:0.8rem; outline:none; font-family:inherit;">
        <button style="color:#9ca3af; font-size:1.1rem;"><i class="bi bi-emoji-smile"></i></button>
        <button onclick="App.sendChatMessage()" style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#5b21b6,#7c3aed); border:none; color:white; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;">
          <i class="bi bi-send-fill" style="font-size:0.9rem;"></i>
        </button>
      </div>

      <!-- Bottom Session Info Strip (Ref: 09.37.43.jpeg) -->
      <div style="background:#0c0822; border-top:1px solid rgba(139,92,246,0.2); padding:6px 16px; display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; gap:8px; align-items:center;">
          <div style="width:26px; height:26px; border-radius:50%; background:rgba(124,58,237,0.3); display:flex; align-items:center; justify-content:center; color:#c4b5fd; font-size:0.75rem;"><i class="bi bi-clock"></i></div>
          <div>
            <p style="font-size:0.55rem; color:#9ca3af;">Chat Duration</p>
            <p style="font-size:0.75rem; font-weight:700; color:white;" id="chat-timer-display">00:08:24</p>
          </div>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <div style="width:26px; height:26px; border-radius:50%; background:rgba(124,58,237,0.3); display:flex; align-items:center; justify-content:center; color:#c4b5fd; font-size:0.75rem;"><i class="bi bi-currency-rupee"></i></div>
          <div>
            <p style="font-size:0.55rem; color:#9ca3af;">Charges</p>
            <p style="font-size:0.75rem; font-weight:700; color:#4ade80;" id="chat-spent-display">₹ ${astro.chatRate} / min</p>
          </div>
        </div>
        <button class="btn-primary btn-sm" style="background:#ef4444; border-color:#ef4444; font-size:0.68rem; padding:4px 10px;" onclick="App.endChatConsultation()">
          End
        </button>
      </div>
    </div>
    `;
  },

  /* ── 13. AUDIO CALL SCREEN (Ref: 09.39.39.jpeg) ───────────── */
  'audio-call': (params) => {
    const astro = DATA.astrologers.find(a => a.id === (params && params.id)) || DATA.astrologers[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding:16px;">
      <!-- Top Bar (Ref: 09.39.39.jpeg) -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-chevron-down"></i></button>
        <span style="font-size:0.72rem; color:#c4b5fd; background:rgba(124,58,237,0.2); border:1px solid rgba(124,58,237,0.4); padding:4px 12px; border-radius:20px; display:flex; align-items:center; gap:5px;">
          <i class="bi bi-shield-check text-purple"></i> Secure &amp; Encrypted Call
        </span>
        <button onclick="App.endAudioCallConsultation()" style="background:#ef4444; color:white; border:none; border-radius:20px; padding:6px 12px; font-size:0.68rem; font-weight:700; display:flex; align-items:center; gap:4px; cursor:pointer;">
          <i class="bi bi-telephone-x-fill"></i> End Call
        </button>
      </div>

      <!-- Center Avatar & Wave Visualizer (Ref: 09.39.39.jpeg) -->
      <div style="display:flex; flex-direction:column; align-items:center; text-align:center;">
        <div style="position:relative; margin-bottom:16px;">
          <div style="position:absolute; inset:-12px; border-radius:50%; border:2px solid rgba(139,92,246,0.3); animation:pulse 2s infinite;"></div>
          <img src="${astro.avatar}" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:3.5px solid #7c3aed; position:relative; z-index:2;">
          <div class="online-dot" style="width:16px; height:16px; border:2.5px solid #080313; bottom:6px; right:6px; z-index:3;"></div>
        </div>

        <div style="display:flex; align-items:center; gap:5px; margin-bottom:2px;">
          <h2 style="font-size:1.25rem; font-weight:700; color:white;">${astro.name}</h2>
          <i class="bi bi-patch-check-fill text-purple" style="font-size:1rem;"></i>
        </div>
        <p style="font-size:0.75rem; color:var(--gold); font-weight:600;">${astro.title}</p>
        <span style="font-size:0.62rem; color:#4ade80; background:rgba(34,197,94,0.15); padding:2px 8px; border-radius:10px; margin:6px 0 10px;">● Online</span>

        <p style="font-size:0.65rem; color:#9ca3af;">Call Duration</p>
        <p style="font-size:1.6rem; font-weight:800; color:white; letter-spacing:0.04em;" id="audio-timer-display">00:02:46</p>
      </div>

      <!-- 3 Info Cards (Ref: 09.39.39.jpeg) -->
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:0 4px;">
        <div class="card" style="padding:10px 4px; text-align:center;">
          <i class="bi bi-clock text-purple" style="font-size:1rem;"></i>
          <p style="font-size:0.58rem; color:#9ca3af; margin-top:2px;">Rate</p>
          <p style="font-size:0.75rem; font-weight:700; color:white;">₹ ${astro.callRate} / min</p>
        </div>
        <div class="card" style="padding:10px 4px; text-align:center;">
          <i class="bi bi-soundwave text-purple" style="font-size:1rem;"></i>
          <p style="font-size:0.58rem; color:#9ca3af; margin-top:2px;">Type</p>
          <p style="font-size:0.75rem; font-weight:700; color:white;">Audio Call</p>
        </div>
        <div class="card" style="padding:10px 4px; text-align:center;">
          <i class="bi bi-shield-check text-purple" style="font-size:1rem;"></i>
          <p style="font-size:0.58rem; color:#9ca3af; margin-top:2px;">Secure</p>
          <p style="font-size:0.75rem; font-weight:700; color:white;">Encrypted</p>
        </div>
      </div>

      <!-- Tip Banner -->
      <div style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:10px 12px; display:flex; gap:10px; align-items:center;">
        <div style="width:32px; height:32px; border-radius:50%; background:rgba(124,58,237,0.25); display:flex; align-items:center; justify-content:center; color:#c4b5fd; flex-shrink:0;">
          🧘
        </div>
        <p style="font-size:0.65rem; color:#9ca3af; line-height:1.4;">Please speak clearly and in a quiet place. This helps astrologer provide you better guidance.</p>
      </div>

      <!-- Bottom Controls: MUTE, END, SPEAKER (Ref: 09.39.39.jpeg) -->
      <div style="display:flex; justify-content:space-around; align-items:center; padding:10px 20px 20px;">
        <div style="text-align:center;">
          <div id="btn-mute-toggle" class="call-control-btn" style="width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; color:white; font-size:1.2rem; cursor:pointer;" onclick="App.toggleMute()">
            <i class="bi bi-mic-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#9ca3af; margin-top:6px;">Mute</p>
        </div>

        <div style="text-align:center;">
          <div class="call-control-btn" style="width:68px; height:68px; border-radius:50%; background:#ef4444; display:flex; align-items:center; justify-content:center; color:white; font-size:1.6rem; cursor:pointer; box-shadow:0 0 24px rgba(239,68,68,0.5);" onclick="App.endAudioCallConsultation()">
            <i class="bi bi-telephone-x-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#ef4444; margin-top:6px; font-weight:700;">End Call</p>
        </div>

        <div style="text-align:center;">
          <div id="btn-speaker-toggle" class="call-control-btn" style="width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; color:white; font-size:1.2rem; cursor:pointer;" onclick="App.toggleSpeaker()">
            <i class="bi bi-volume-up-fill"></i>
          </div>
          <p style="font-size:0.65rem; color:#9ca3af; margin-top:6px;">Speaker</p>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 14. WALLET TOP UP (Ref: 09.42.55.jpeg) ───────────────── */
  'wallet-topup': (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="text-align:center;">
          <p style="font-size:0.95rem; font-weight:700; color:white;">Wallet Top Up</p>
          <p style="font-size:0.6rem; color:#a78bfa;"><i class="bi bi-shield-check me-1"></i>Secure &amp; Safe Payments</p>
        </div>
        <div style="width:38px;"></div>
      </div>

      <div class="screen-body" style="padding:16px; padding-bottom:80px;">
        <!-- Balance Card with Wallet Graphic (Ref: 09.42.55.jpeg) -->
        <div style="background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:18px; padding:16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-size:0.72rem; color:#9ca3af;">Current Wallet Balance</p>
            <h2 style="font-size:1.9rem; font-weight:800; color:white; margin:2px 0 6px;">₹ ${DATA.currentUser.walletBalance.toLocaleString()}</h2>
            <p style="font-size:0.65rem; color:#c4b5fd;"><i class="bi bi-info-circle me-1"></i>Use wallet balance to book consultations</p>
          </div>
          <div style="width:64px; height:64px; border-radius:16px; background:rgba(124,58,237,0.3); display:flex; align-items:center; justify-content:center; font-size:2rem; color:#eab308;">
            👛
          </div>
        </div>

        <!-- 3x2 Preset Amount Grid (Ref: 09.42.55.jpeg) -->
        <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:10px;">Select Top Up Amount</p>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:14px;">
          ${[
            { amt: 500, get: 525 },
            { amt: 1000, get: 1050 },
            { amt: 2000, get: 2100 },
            { amt: 5000, get: 5250 },
            { amt: 10000, get: 10500 },
            { amt: 'custom', label: 'Custom Amount', get: 'Enter amount' }
          ].map(p => `
            <div onclick="App.WalletService.selectPreset(${p.amt==='custom'?'null':p.amt})" style="background:${STATE.selectedTopup===p.amt?'rgba(124,58,237,0.3)':'#0f0a1e'}; border:1.5px solid ${STATE.selectedTopup===p.amt?'#7c3aed':'rgba(255,255,255,0.06)'}; border-radius:12px; padding:12px 6px; text-align:center; cursor:pointer;">
              <p style="font-size:0.9rem; font-weight:700; color:white;">${p.amt==='custom'?'Custom':`₹ ${p.amt.toLocaleString()}`}</p>
              <p style="font-size:0.62rem; color:${STATE.selectedTopup===p.amt?'#4ade80':'#9ca3af'}; margin-top:2px;">${p.amt==='custom'?p.get:`Get ₹ ${p.get.toLocaleString()}`}</p>
            </div>
          `).join('')}
        </div>

        <!-- Promo Code Strip (Ref: 09.42.55.jpeg) -->
        <div style="background:#0f0a1e; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div style="display:flex; gap:10px; align-items:center;">
            <span style="font-size:1.2rem;">🏷️</span>
            <div>
              <p style="font-size:0.75rem; font-weight:600; color:white;">Have a promo code?</p>
              <p style="font-size:0.62rem; color:#9ca3af;">Apply code to get extra discount</p>
            </div>
          </div>
          <span style="font-size:0.75rem; color:#a78bfa; font-weight:700; cursor:pointer;" onclick="App.showPromoCodeModal()">Apply &gt;</span>
        </div>

        <!-- Payment Methods (Ref: 09.42.55.jpeg) -->
        <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:10px;">Select Payment Method</p>
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          <div class="card" style="padding:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="App.WalletService.processRecharge('UPI')">
            <div style="display:flex; gap:10px; align-items:center;">
              <span style="font-size:1rem; background:white; color:#111; padding:2px 6px; border-radius:4px; font-weight:800;">UPI</span>
              <div>
                <p style="font-size:0.78rem; font-weight:600; color:white;">UPI</p>
                <p style="font-size:0.62rem; color:#9ca3af;">Pay using GPay, PhonePe, Paytm</p>
              </div>
            </div>
            <i class="bi bi-chevron-right text-purple"></i>
          </div>

          <div class="card" style="padding:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="App.WalletService.processRecharge('Card')">
            <div style="display:flex; gap:10px; align-items:center;">
              <i class="bi bi-credit-card-2-front text-purple" style="font-size:1.2rem;"></i>
              <div>
                <p style="font-size:0.78rem; font-weight:600; color:white;">Debit / Credit Card</p>
                <p style="font-size:0.62rem; color:#9ca3af;">Visa, Mastercard, RuPay</p>
              </div>
            </div>
            <i class="bi bi-chevron-right text-purple"></i>
          </div>

          <div class="card" style="padding:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="App.WalletService.processRecharge('NetBanking')">
            <div style="display:flex; gap:10px; align-items:center;">
              <i class="bi bi-bank text-purple" style="font-size:1.2rem;"></i>
              <div>
                <p style="font-size:0.78rem; font-weight:600; color:white;">Net Banking</p>
                <p style="font-size:0.62rem; color:#9ca3af;">All major banks supported</p>
              </div>
            </div>
            <i class="bi bi-chevron-right text-purple"></i>
          </div>
        </div>

        <!-- Trust Footer -->
        <p style="text-align:center; font-size:0.65rem; color:#9ca3af; line-height:1.4;">
          <i class="bi bi-shield-lock-fill text-purple me-1"></i> Your payments are 100% secure and encrypted.<br>We do not store your card or UPI details.
        </p>
      </div>

      <!-- Sticky Proceed to Pay (Ref: 09.42.55.jpeg) -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.98); border-top:1px solid rgba(255,255,255,0.08); padding:12px 16px; z-index:50;">
        <button id="btn-pay-wallet" class="btn-primary w-full" style="padding:14px; border-radius:12px; font-weight:700; font-size:0.85rem;" onclick="App.WalletService.processRecharge()">
          🔒 Proceed to Pay ₹ ${STATE.selectedTopup || 500}
        </button>
      </div>
    </div>
    `;
  },

  /* ── 15. TRANSACTION HISTORY (Ref: 09.43.44.jpeg) ─────────── */
  transactions: (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Transaction History</div>
        <button class="header-btn" onclick="App.showToast('Filter transactions')"><i class="bi bi-funnel"></i></button>
      </div>

      <div class="screen-body pb-nav" style="padding:16px;">
        <!-- Balance Header Card -->
        <div style="background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:16px; padding:16px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-size:0.7rem; color:#9ca3af;">Current Wallet Balance</p>
            <h2 style="font-size:1.8rem; font-weight:800; color:white; margin:2px 0;">₹ ${DATA.currentUser.walletBalance.toLocaleString()}</h2>
            <p style="font-size:0.62rem; color:#4ade80;"><i class="bi bi-clock-history me-1"></i>Updated just now</p>
          </div>
          <div style="font-size:2.5rem; color:#eab308;">👛</div>
        </div>

        <!-- Filter Tabs (Ref: 09.43.44.jpeg) -->
        <div class="filter-tabs" style="margin-bottom:14px; padding:0;">
          ${['All', 'Top Up', 'Spent', 'Refunds'].map((t, i) => `
            <button class="filter-tab ${i===0?'active':''}" onclick="App.filterTransactions('${t}')">
              ${t}
            </button>
          `).join('')}
        </div>

        <!-- Transaction Items List -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${DATA.transactions.map(t => `
            <div class="card" style="padding:12px; display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; gap:12px; align-items:center;">
                <div style="width:38px; height:38px; border-radius:50%; background:${t.isCredit?'rgba(34,197,94,0.15)':'rgba(124,58,237,0.2)'}; display:flex; align-items:center; justify-content:center; color:${t.isCredit?'#4ade80':'#c4b5fd'};">
                  <i class="bi bi-${t.isCredit?'download':'chat-dots-fill'}"></i>
                </div>
                <div>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <p style="font-size:0.8rem; font-weight:700; color:white;">${t.title}</p>
                    ${t.method ? `<span style="font-size:0.55rem; background:rgba(124,58,237,0.3); color:#c4b5fd; padding:1px 5px; border-radius:4px;">${t.method}</span>` : ''}
                  </div>
                  <p style="font-size:0.62rem; color:#9ca3af;">${t.date} · ${t.time}</p>
                </div>
              </div>

              <div style="text-align:right;">
                <p style="font-size:0.88rem; font-weight:800; color:${t.isCredit?'#4ade80':'#f87171'};">
                  ${t.isCredit?'+':'-'} ₹ ${t.amount}
                </p>
                <span style="font-size:0.58rem; color:#9ca3af;">${t.status} &gt;</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 16. EXPERT DASHBOARD (Ref: 09.50.08.jpeg) ────────────── */
  'astro-dashboard': (params) => {
    const astro = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <!-- Header with Online Switch (Ref: 09.50.08.jpeg) -->
      <div class="screen-header" style="padding:12px 16px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="position:relative;">
            <img src="${astro.avatar}" style="width:42px; height:42px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
            <div class="${astro.isOnline?'online-dot':'offline-dot'}" style="width:11px; height:11px; border:2px solid #0f0a1e;"></div>
          </div>
          <div>
            <p style="font-size:0.92rem; font-weight:700; color:white;">Namaste, Arjun! 🙏</p>
            <p style="font-size:0.65rem; color:var(--gold);">${astro.title}</p>
            <span style="font-size:0.58rem; color:#eab308; background:rgba(234,179,8,0.15); padding:1px 6px; border-radius:4px;">⭐ ${astro.experience} Experience</span>
          </div>
        </div>
        <button class="header-btn" onclick="Router.go('notifications')"><i class="bi bi-bell"></i></button>
      </div>

      <div class="screen-body pb-nav">
        <!-- Online Switcher Banner (Ref: 09.50.08.jpeg) -->
        <div style="margin:0 16px 14px; background:#0f0a1e; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-size:0.8rem; font-weight:700; color:${astro.isOnline?'#4ade80':'#f87171'};">
              ● You are ${astro.isOnline ? 'Online' : 'Offline'}
            </p>
            <p style="font-size:0.62rem; color:#9ca3af;">${astro.isOnline ? 'Available for new consultations' : 'Offline mode active'}</p>
          </div>
          <div onclick="App.ExpertService.toggleOnline()" style="width:46px; height:26px; border-radius:13px; background:${astro.isOnline?'#7c3aed':'#374151'}; padding:2px; cursor:pointer; display:flex; align-items:center; justify-content:${astro.isOnline?'flex-end':'flex-start'};">
            <div style="width:22px; height:22px; border-radius:50%; background:white;"></div>
          </div>
        </div>

        <!-- Today's Overview Stats (Ref: 09.50.08.jpeg) -->
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between mb-8">
            <p style="font-size:0.78rem; font-weight:700; color:white;"><i class="bi bi-calendar-check text-purple me-1"></i>Today's Overview</p>
            <span style="font-size:0.6rem; color:#9ca3af;">22 May 2026, Thursday</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; text-align:center;">
            <div>
              <p style="font-size:0.58rem; color:#9ca3af;">Total Consults</p>
              <p style="font-size:0.95rem; font-weight:800; color:white; margin-top:2px;">${astro.todayStats.total}</p>
            </div>
            <div>
              <p style="font-size:0.58rem; color:#9ca3af;">Completed</p>
              <p style="font-size:0.95rem; font-weight:800; color:#4ade80; margin-top:2px;">${astro.todayStats.completed}</p>
            </div>
            <div>
              <p style="font-size:0.58rem; color:#9ca3af;">Upcoming</p>
              <p style="font-size:0.95rem; font-weight:800; color:#38bdf8; margin-top:2px;">${astro.todayStats.upcoming}</p>
            </div>
            <div>
              <p style="font-size:0.58rem; color:#9ca3af;">Earnings</p>
              <p style="font-size:0.95rem; font-weight:800; color:var(--gold); margin-top:2px;">₹ ${astro.todayStats.earnings.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <!-- New Consultation Requests (Ref: 09.50.08.jpeg) -->
        <div class="flex-between" style="padding:0 16px; margin-bottom:8px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">New Consultation Requests <span style="background:#7c3aed; color:white; font-size:0.6rem; padding:1px 6px; border-radius:10px;">${DATA.astroConsultations.length}</span></p>
          <span style="font-size:0.68rem; color:#a78bfa; cursor:pointer;" onclick="Router.go('astro-consults')">View All &gt;</span>
        </div>

        <div style="padding:0 16px 14px; display:flex; flex-direction:column; gap:8px;">
          ${DATA.astroConsultations.map(req => `
            <div class="card" style="padding:12px; cursor:pointer;" onclick="Router.go('astro-consult-detail', {id:'${req.id}'})">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${req.clientAvatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
                  <div>
                    <div style="display:flex; align-items:center; gap:4px;">
                      <span style="font-size:0.85rem; font-weight:700; color:white;">${req.clientName}</span>
                      <span style="width:8px; height:8px; border-radius:50%; background:#4ade80;"></span>
                    </div>
                    <p style="font-size:0.68rem; color:var(--gold);"><i class="bi bi-${req.type==='Chat'?'chat-fill':'telephone-fill'} me-1"></i>${req.type} Consultation</p>
                    <p style="font-size:0.62rem; color:#9ca3af;">${req.time} · ${req.clientLanguages}</p>
                  </div>
                </div>

                <div style="text-align:right;">
                  <p style="font-size:0.88rem; font-weight:800; color:#4ade80;">₹ ${req.amount}</p>
                  <button class="btn-primary" style="margin-top:4px; padding:5px 14px; font-size:0.68rem; border-radius:8px;" onclick="event.stopPropagation(); App.ExpertService.acceptRequest('${req.id}')">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 17. EXPERT CONSULTATION DETAILS (Ref: 09.54.24.jpeg) ── */
  'astro-consult-detail': (params) => {
    const req = DATA.astroConsultations.find(r => r.id === (params && params.id)) || DATA.astroConsultations[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Consultation Details</div>
        <button class="header-btn"><i class="bi bi-three-dots-vertical"></i></button>
      </div>

      <div class="screen-body" style="padding-bottom:80px;">
        <!-- Client Hero Card -->
        <div style="margin:0 16px 14px;" class="card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div style="display:flex; gap:12px; align-items:center;">
              <img src="${req.clientAvatar}" style="width:54px; height:54px; border-radius:50%; object-fit:cover; border:2px solid #7c3aed;">
              <div>
                <div style="display:flex; align-items:center; gap:6px;">
                  <span style="font-size:0.92rem; font-weight:700; color:white;">${req.clientName}</span>
                  <span style="background:rgba(124,58,237,0.3); color:#c4b5fd; font-size:0.55rem; padding:1px 6px; border-radius:4px;">${req.clientStatus}</span>
                </div>
                <p style="font-size:0.68rem; color:#9ca3af; margin-top:2px;">${req.clientAge}, ${req.clientDob} · ${req.clientBirthTime}</p>
                <p style="font-size:0.65rem; color:#9ca3af;"><i class="bi bi-globe me-1"></i>${req.clientLanguages}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Session Schedule -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:8px;"><i class="bi bi-chat-dots-fill text-purple me-1"></i>${req.type} Consultation</p>
          <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:#9ca3af;">
            <span>Duration: <strong style="color:white;">${req.duration}</strong></span>
            <span>Scheduled: <strong style="color:white;">${req.date}, ${req.time}</strong></span>
            <span>Amount: <strong style="color:#4ade80;">₹ ${req.amount}</strong></span>
          </div>
          <button class="btn-primary w-full" style="margin-top:10px; padding:10px; border-radius:10px; font-size:0.75rem;" onclick="App.ExpertService.acceptRequest('${req.id}')">
            Start Consultation
          </button>
        </div>

        <!-- Birth Details & Lagna Kundli Preview -->
        <div style="margin:0 16px 14px;" class="card">
          <div class="flex-between mb-8">
            <p style="font-size:0.82rem; font-weight:700; color:white;">Birth Details</p>
            <span style="font-size:0.65rem; color:#a78bfa; cursor:pointer;" onclick="Router.go('kundali')">View Kundli &gt;</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:#9ca3af; line-height:1.6;">
            <div>
              <p>DOB: <strong style="color:white;">${req.clientDob}</strong></p>
              <p>TOB: <strong style="color:white;">${req.clientBirthTime}</strong></p>
              <p>POB: <strong style="color:white;">${req.clientBirthPlace}</strong></p>
              <p>Zodiac: <strong style="color:var(--gold);">${req.clientZodiac}</strong></p>
            </div>
            <div style="width:100px; height:100px; background:#08031a; border:1px solid rgba(234,179,8,0.3); border-radius:8px; display:flex; align-items:center; justify-content:center;">
              <svg viewBox="0 0 100 100" width="90" height="90"><rect x="5" y="5" width="90" height="90" fill="none" stroke="#eab308" stroke-width="0.8"/><line x1="5" y1="5" x2="95" y2="95" stroke="#eab308" stroke-width="0.5"/><line x1="95" y1="5" x2="5" y2="95" stroke="#eab308" stroke-width="0.5"/><polygon points="50,5 5,50 50,95 95,50" fill="none" stroke="#eab308" stroke-width="0.8"/></svg>
            </div>
          </div>
        </div>

        <!-- User Question -->
        <div style="margin:0 16px 14px;" class="card">
          <p style="font-size:0.82rem; font-weight:700; color:white; margin-bottom:4px;">User's Question / Concern</p>
          <p style="font-size:0.72rem; color:#9ca3af; line-height:1.4;">"${req.clientQuestion}"</p>
        </div>
      </div>

      <!-- Sticky Actions Bar -->
      <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(8,5,24,0.98); border-top:1px solid rgba(255,255,255,0.08); padding:10px 16px; display:flex; gap:10px; z-index:50;">
        <button class="btn-outline flex-1" style="padding:12px; border-radius:10px; font-size:0.78rem; font-weight:700;" onclick="App.ExpertService.acceptRequest('${req.id}')">
          <i class="bi bi-chat-dots-fill me-1"></i> Send Message
        </button>
        <button class="btn-primary flex-1" style="background:#22c55e; border-color:#22c55e; padding:12px; border-radius:10px; font-size:0.78rem; font-weight:700;" onclick="App.ExpertService.acceptRequest('${req.id}')">
          <i class="bi bi-telephone-fill me-1"></i> Start Audio Call
        </button>
      </div>
    </div>
    `;
  },

  /* ── 18. EXPERT ACTIVE CONSULTATION (Ref: 09.55.37.jpeg) ──── */
  'astro-consult-live': (params) => {
    const req = DATA.astroConsultations.find(r => r.id === (params && params.id)) || DATA.astroConsultations[0];
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column; height:100%;">
      <!-- Top Header -->
      <div class="screen-header" style="padding:10px 14px;">
        <button class="header-btn" onclick="Router.go('astro-dashboard')"><i class="bi bi-arrow-left"></i></button>
        <div style="flex:1; min-width:0; margin-left:6px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Consultation in Progress</p>
          <p style="font-size:0.62rem; color:#4ade80;">Connected with ${req.clientName} ●</p>
        </div>
        <button onclick="App.ExpertService.endLiveSession('${req.id}')" style="background:#ef4444; color:white; border:none; border-radius:20px; padding:6px 12px; font-size:0.68rem; font-weight:700; cursor:pointer;">
          End Consultation
        </button>
      </div>

      <!-- Client Details Strip (Ref: 09.55.37.jpeg) -->
      <div style="background:#160e35; border-bottom:1px solid rgba(139,92,246,0.2); padding:8px 14px; display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; gap:8px; align-items:center;">
          <img src="${req.clientAvatar}" style="width:34px; height:34px; border-radius:50%; object-fit:cover;">
          <div>
            <p style="font-size:0.78rem; font-weight:700; color:white;">${req.clientName} <span style="font-size:0.55rem; color:#c4b5fd;">(${req.clientStatus})</span></p>
            <p style="font-size:0.6rem; color:#9ca3af;">Time Left: <strong style="color:#4ade80;">28:15</strong> | Amount: <strong style="color:var(--gold);">₹ ${req.amount}</strong></p>
          </div>
        </div>
      </div>

      <!-- Messages Area -->
      <div id="astro-live-messages-scroll" style="flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px;">
        <div style="align-self:flex-start; max-width:82%; background:#160d33; border:1px solid rgba(139,92,246,0.3); color:white; padding:10px 14px; border-radius:14px 14px 14px 2px; font-size:0.78rem;">
          Namaste Pandit ji! ${req.clientQuestion}
          <div style="font-size:0.58rem; color:#9ca3af; margin-top:4px;">12:31 PM</div>
        </div>
      </div>

      <!-- Composer Bar -->
      <div style="padding:8px 12px; background:#080313; border-top:1px solid rgba(255,255,255,0.08); display:flex; gap:8px; align-items:center;">
        <input type="text" id="astro-live-input" placeholder="Type astrological guidance..." onkeydown="if(event.key==='Enter') App.sendAstroLiveMessage()" style="flex:1; background:#0f0a1e; border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:10px 14px; color:white; font-size:0.8rem; outline:none;">
        <button onclick="App.sendAstroLiveMessage()" style="width:40px; height:40px; border-radius:50%; background:#22c55e; border:none; color:white; display:flex; align-items:center; justify-content:center; cursor:pointer;">
          <i class="bi bi-send-fill"></i>
        </button>
      </div>

      <!-- Quick Actions (Ref: 09.55.37.jpeg) -->
      <div style="background:#0c0822; padding:8px 12px; display:flex; justify-content:space-around; border-top:1px solid rgba(139,92,246,0.2);">
        <button style="font-size:0.62rem; color:#c4b5fd; text-align:center;" onclick="App.showToast('Remedy shared with client ✓')">
          <i class="bi bi-flower1" style="font-size:1.1rem; display:block;"></i> Remedy
        </button>
        <button style="font-size:0.62rem; color:#c4b5fd; text-align:center;" onclick="App.showToast('Consultation note saved ✓')">
          <i class="bi bi-journal-text" style="font-size:1.1rem; display:block;"></i> Note
        </button>
        <button style="font-size:0.62rem; color:#c4b5fd; text-align:center;" onclick="App.showToast('Kundli chart shared with client ✓')">
          <i class="bi bi-grid-3x3" style="font-size:1.1rem; display:block;"></i> Kundli
        </button>
      </div>
    </div>
    `;
  },

  /* ── 19. EXPERT EARNINGS (Ref: 09.57.36.jpeg) ─────────────── */
  'astro-earnings': (params) => {
    const astro = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('astro-dashboard')"><i class="bi bi-list"></i></button>
        <div style="text-align:center;">
          <p style="font-size:0.95rem; font-weight:700; color:white;">Earnings</p>
          <p style="font-size:0.6rem; color:#9ca3af;">Track your income and performance</p>
        </div>
        <button class="header-btn"><i class="bi bi-calendar-month"></i></button>
      </div>

      <div class="screen-body pb-nav" style="padding:16px;">
        <!-- Total Earnings Card (Ref: 09.57.36.jpeg) -->
        <div style="background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:18px; padding:16px; margin-bottom:14px;">
          <p style="font-size:0.72rem; color:#9ca3af;">Total Earnings</p>
          <h2 style="font-size:1.9rem; font-weight:800; color:white; margin:2px 0;">₹ ${astro.earningsMonth.toLocaleString()}</h2>
          <p style="font-size:0.65rem; color:#4ade80; margin-bottom:12px;">↑ 18.6% from Apr 2026</p>

          <!-- 3-Column Breakdown: Chat, Audio Call, Other (STRICTLY NO VIDEO CALL) -->
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; border-top:1px solid rgba(255,255,255,0.06); padding-top:10px; text-align:center;">
            <div>
              <p style="font-size:0.58rem; color:#c4b5fd;"><i class="bi bi-chat-fill me-1"></i>Chat</p>
              <p style="font-size:0.8rem; font-weight:700; color:white; margin-top:2px;">₹ ${astro.breakdown.chat.toLocaleString()}</p>
            </div>
            <div>
              <p style="font-size:0.58rem; color:#86efac;"><i class="bi bi-telephone-fill me-1"></i>Audio Call</p>
              <p style="font-size:0.8rem; font-weight:700; color:white; margin-top:2px;">₹ ${astro.breakdown.call.toLocaleString()}</p>
            </div>
            <div>
              <p style="font-size:0.58rem; color:#eab308;"><i class="bi bi-three-dots me-1"></i>Other</p>
              <p style="font-size:0.8rem; font-weight:700; color:white; margin-top:2px;">₹ ${astro.breakdown.other.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <!-- 4 Summary Cards (Ref: 09.57.36.jpeg) -->
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px; margin-bottom:14px;">
          <div class="card" style="padding:10px 12px;">
            <p style="font-size:0.62rem; color:#9ca3af;">This Week</p>
            <p style="font-size:0.95rem; font-weight:800; color:white; margin-top:2px;">₹ ${astro.earningsWeek.toLocaleString()}</p>
            <span style="font-size:0.55rem; color:#4ade80;">↑ 12.4%</span>
          </div>
          <div class="card" style="padding:10px 12px;">
            <p style="font-size:0.62rem; color:#9ca3af;">This Month</p>
            <p style="font-size:0.95rem; font-weight:800; color:white; margin-top:2px;">₹ ${astro.earningsMonth.toLocaleString()}</p>
            <span style="font-size:0.55rem; color:#4ade80;">↑ 18.6%</span>
          </div>
          <div class="card" style="padding:10px 12px;">
            <p style="font-size:0.62rem; color:#9ca3af;">This Year</p>
            <p style="font-size:0.95rem; font-weight:800; color:white; margin-top:2px;">₹ ${astro.earningsYear.toLocaleString()}</p>
            <span style="font-size:0.55rem; color:#4ade80;">↑ 22.3%</span>
          </div>
          <div class="card" style="padding:10px 12px;">
            <p style="font-size:0.62rem; color:#9ca3af;">Total Earnings</p>
            <p style="font-size:0.95rem; font-weight:800; color:var(--gold); margin-top:2px;">₹ ${astro.earningsTotal.toLocaleString()}</p>
            <span style="font-size:0.55rem; color:#a78bfa;">Lifetime</span>
          </div>
        </div>

        <button class="btn-primary w-full" style="padding:12px; border-radius:12px; font-weight:700; background:#22c55e; border-color:#22c55e;" onclick="App.showToast('Withdrawal request submitted to your bank account ✓')">
          Withdraw Payout to Bank
        </button>
      </div>
    </div>
    `;
  },

  /* ── 20. EXPERT PROFILE SCREEN (Ref: 09.58.48.jpeg) ───────── */
  'astro-profile-expert': (params) => {
    const astro = DATA.currentAstrologer;
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <div style="text-align:left;">
          <p style="font-size:0.95rem; font-weight:700; color:white;">My Profile</p>
          <p style="font-size:0.6rem; color:#9ca3af;">Manage your profile and preferences</p>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="header-btn"><i class="bi bi-share"></i></button>
          <button class="header-btn" onclick="Router.go('settings')"><i class="bi bi-gear"></i></button>
        </div>
      </div>

      <div class="screen-body pb-nav" style="padding:16px;">
        <!-- Profile Card (Ref: 09.58.48.jpeg) -->
        <div style="margin-bottom:14px; background:linear-gradient(135deg,#1f0c3d,#110626); border:1px solid rgba(139,92,246,0.3); border-radius:18px; padding:16px;">
          <div style="display:flex; gap:12px; align-items:center;">
            <div class="astro-avatar-wrap">
              <img src="${astro.avatar}" style="width:68px; height:68px; border-radius:50%; object-fit:cover; border:2.5px solid #7c3aed;">
              <div class="online-dot" style="width:12px; height:12px; border:2px solid #0f0a1e;"></div>
            </div>
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:4px;">
                <h3 style="font-size:1rem; font-weight:700; color:white;">${astro.fullName}</h3>
                <i class="bi bi-patch-check-fill text-purple"></i>
              </div>
              <span style="font-size:0.6rem; background:rgba(124,58,237,0.3); color:#c4b5fd; padding:1px 6px; border-radius:4px;">Verified Astrologer</span>
              <p style="font-size:0.65rem; color:#9ca3af; margin-top:2px;">★ ${astro.rating} (${astro.reviewsCount} Reviews) | Exp. ${astro.experience}</p>
            </div>
          </div>
        </div>

        <!-- 4 Stats Grid (Ref: 09.58.48.jpeg) -->
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; margin-bottom:14px; text-align:center;">
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.55rem; color:#9ca3af;">Total Consults</p>
            <p style="font-size:0.85rem; font-weight:700; color:white;">${astro.totalConsultations}</p>
          </div>
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.55rem; color:#9ca3af;">Happy Clients</p>
            <p style="font-size:0.85rem; font-weight:700; color:#4ade80;">${astro.happyClients}</p>
          </div>
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.55rem; color:#9ca3af;">Avg. Rating</p>
            <p style="font-size:0.85rem; font-weight:700; color:#eab308;">${astro.rating} ★</p>
          </div>
          <div class="card" style="padding:10px 4px;">
            <p style="font-size:0.55rem; color:#9ca3af;">Response</p>
            <p style="font-size:0.85rem; font-weight:700; color:#38bdf8;">2 min</p>
          </div>
        </div>

        <!-- Menu Links -->
        <div class="menu-group mb-16">
          <div class="menu-row" onclick="Router.go('astro-earnings')">
            <div class="menu-row-icon icon-green"><i class="bi bi-wallet2"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Payout &amp; Bank Details</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
          <div class="menu-row" onclick="App.showToast('KYC Verified ✓')">
            <div class="menu-row-icon icon-blue"><i class="bi bi-shield-check"></i></div>
            <div class="menu-row-text"><p class="menu-row-title">Verification</p></div>
            <span style="font-size:0.65rem; color:#4ade80;">Verified</span>
          </div>
          <div class="menu-row" onclick="App.AuthService.logout()">
            <div class="menu-row-icon" style="background:rgba(239,68,68,0.2);"><i class="bi bi-box-arrow-right" style="color:#f87171;"></i></div>
            <div class="menu-row-text"><p class="menu-row-title" style="color:#f87171;">Log Out</p></div>
            <i class="bi bi-chevron-right menu-row-arrow"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  /* ── 21. EXPERT SESSIONS LIST ─────────────────────────────── */
  'astro-consults': (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.go('astro-dashboard')"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Consultations Queue</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${DATA.astroConsultations.map(c => `
            <div class="card" style="padding:12px; cursor:pointer;" onclick="Router.go('astro-consult-detail', {id:'${c.id}'})">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; gap:10px; align-items:center;">
                  <img src="${c.clientAvatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
                  <div>
                    <p style="font-size:0.85rem; font-weight:700; color:white;">${c.clientName}</p>
                    <p style="font-size:0.68rem; color:var(--gold);">${c.type} · ${c.duration}</p>
                    <p style="font-size:0.62rem; color:#9ca3af;">${c.date}, ${c.time}</p>
                  </div>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:0.85rem; font-weight:700; color:#4ade80;">+₹ ${c.amount}</span>
                  <span class="badge badge-confirmed" style="display:block; margin-top:4px; font-size:0.55rem;">Confirmed</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 22. FAVOURITES SCREEN ────────────────────────────────── */
  favourites: (params) => {
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
          </div>
        ` : Screens.renderAstrologerCards(favs)}
      </div>
    </div>
    `;
  },

  /* ── 23. NOTIFICATIONS SCREEN ─────────────────────────────── */
  notifications: (params) => {
    return `
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
    `;
  },

  /* ── 24. APP DRAWER ───────────────────────────────────────── */
  'app-drawer': (params) => {
    return `
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
          <span style="color:#eab308; font-weight:700; font-size:0.85rem;">₹ ${DATA.currentUser.walletBalance}</span>
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
    `;
  },

  /* ── 25. KUNDALI SCREEN ───────────────────────────────────── */
  kundali: (params) => {
    return `
    <div class="screen cosmic-bg" style="display:flex; flex-direction:column;">
      <div class="screen-header">
        <button class="header-btn" onclick="Router.back()"><i class="bi bi-arrow-left"></i></button>
        <div style="font-size:0.95rem; font-weight:700; color:white;">Janam Kundli</div>
        <div style="width:38px;"></div>
      </div>
      <div class="screen-body pb-nav" style="padding:16px;">
        <div class="card mb-16" style="text-align:center; padding:16px;">
          <p style="font-size:0.85rem; font-weight:700; color:white;">Kundli for ${DATA.currentUser.name}</p>
          <p style="font-size:0.7rem; color:#eab308; margin-top:2px;">Cancer Lagna · Scorpio Moon</p>
          <div style="margin:16px auto; width:220px; height:220px; background:#0c0822; border:1px solid rgba(234,179,8,0.4); border-radius:8px; display:flex; align-items:center; justify-content:center;">
            <svg viewBox="0 0 200 200" width="200" height="200">
              <rect x="5" y="5" width="190" height="190" fill="none" stroke="#eab308" stroke-width="1.2"/>
              <line x1="5" y1="5" x2="195" y2="195" stroke="rgba(234,179,8,0.4)" stroke-width="1"/>
              <line x1="195" y1="5" x2="5" y2="195" stroke="rgba(234,179,8,0.4)" stroke-width="1"/>
              <polygon points="100,5 5,100 100,195 195,100" fill="none" stroke="#eab308" stroke-width="1.2"/>
              <text x="100" y="65" fill="#fff" font-size="10" text-anchor="middle" font-weight="700">La (Cancer)</text>
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
    `;
  },

  /* ── 26. MATCHMAKING SCREEN ───────────────────────────────── */
  matchmaking: (params) => {
    return `
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
    `;
  },

  /* ── 27. POOJA & REMEDIES ─────────────────────────────────── */
  'pooja-remedies': (params) => {
    return `
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
              <div>
                <span style="font-size:0.62rem; color:var(--gold); font-weight:600;">${p.deity}</span>
                <h4 style="font-size:0.9rem; font-weight:700; color:white; margin:2px 0 4px;">${p.title}</h4>
                <p style="font-size:0.7rem; color:#9ca3af; line-height:1.4;">${p.desc}</p>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:1rem; font-weight:800; color:#4ade80;">₹ ${p.price}</span>
                <button class="btn-primary btn-sm" style="padding:6px 14px; font-size:0.72rem; border-radius:8px;" onclick="App.showToast('Puja booked! Our temple priest will perform sankalp.'); Router.go('home');">
                  Book Puja
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
  },

  /* ── 28. SETTINGS & PREFERENCES ───────────────────────────── */
  settings: (params) => {
    return `
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
    `;
  },

  /* ── 29. LEGAL DOC ────────────────────────────────────────── */
  'legal-doc': (params) => {
    return `
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
    `;
  }
};
