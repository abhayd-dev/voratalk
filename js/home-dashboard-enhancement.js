/* ============================================================
   VoraTalk / AstroTalkz — Premium Home & Expert Dashboard Layer
   Adds decision-useful KPI modules to the prototype home screens.
   No existing routes or business logic are changed.
   ============================================================ */
(function () {
  const $ = (s, root = document) => root.querySelector(s);

  const userKpis = `
    <section class="premium-kpi-module premium-user-kpis" aria-label="Your activity overview">
      <div class="premium-kpi-heading">
        <div>
          <span class="premium-eyebrow">YOUR OVERVIEW</span>
          <h3>At a glance</h3>
        </div>
        <span class="premium-live"><i></i> Live</span>
      </div>
      <div class="premium-kpi-grid">
        <div class="premium-kpi-card gold">
          <div class="premium-kpi-icon"><i class="bi bi-wallet2"></i></div>
          <div class="premium-kpi-value">₹1,250</div>
          <div class="premium-kpi-label">Wallet Balance</div>
          <span class="premium-kpi-meta">Ready to consult</span>
        </div>
        <div class="premium-kpi-card purple">
          <div class="premium-kpi-icon"><i class="bi bi-chat-heart"></i></div>
          <div class="premium-kpi-value">12</div>
          <div class="premium-kpi-label">Consultations</div>
          <span class="premium-kpi-meta">3 this month</span>
        </div>
        <div class="premium-kpi-card blue">
          <div class="premium-kpi-icon"><i class="bi bi-bookmark-heart"></i></div>
          <div class="premium-kpi-value">8</div>
          <div class="premium-kpi-label">Saved Experts</div>
          <span class="premium-kpi-meta">2 online now</span>
        </div>
        <div class="premium-kpi-card pink">
          <div class="premium-kpi-icon"><i class="bi bi-stars"></i></div>
          <div class="premium-kpi-value">1,250</div>
          <div class="premium-kpi-label">Reward Points</div>
          <span class="premium-kpi-meta">Level 3 member</span>
        </div>
      </div>
    </section>`;

  const expertKpis = `
    <section class="premium-kpi-module premium-expert-kpis" aria-label="Expert business overview">
      <div class="premium-kpi-heading">
        <div>
          <span class="premium-eyebrow">TODAY'S PERFORMANCE</span>
          <h3>Practice overview</h3>
        </div>
        <button class="premium-date-chip" type="button"><i class="bi bi-calendar3"></i> Today</button>
      </div>
      <div class="premium-kpi-grid expert-grid">
        <div class="premium-kpi-card gold">
          <div class="premium-kpi-topline"><div class="premium-kpi-icon"><i class="bi bi-currency-rupee"></i></div><span class="premium-trend up">+18%</span></div>
          <div class="premium-kpi-value">₹8,420</div>
          <div class="premium-kpi-label">Today's Earnings</div>
          <span class="premium-kpi-meta">₹42,680 this month</span>
        </div>
        <div class="premium-kpi-card purple">
          <div class="premium-kpi-topline"><div class="premium-kpi-icon"><i class="bi bi-headset"></i></div><span class="premium-trend">Live</span></div>
          <div class="premium-kpi-value">07</div>
          <div class="premium-kpi-label">Active Consultations</div>
          <span class="premium-kpi-meta">2 waiting in queue</span>
        </div>
        <div class="premium-kpi-card blue">
          <div class="premium-kpi-topline"><div class="premium-kpi-icon"><i class="bi bi-people"></i></div><span class="premium-trend up">+12%</span></div>
          <div class="premium-kpi-value">38</div>
          <div class="premium-kpi-label">Consultations Today</div>
          <span class="premium-kpi-meta">31 completed</span>
        </div>
        <div class="premium-kpi-card pink">
          <div class="premium-kpi-topline"><div class="premium-kpi-icon"><i class="bi bi-star-fill"></i></div><span class="premium-rating-dot"></span></div>
          <div class="premium-kpi-value">4.9 <small>/ 5</small></div>
          <div class="premium-kpi-label">Expert Rating</div>
          <span class="premium-kpi-meta">125 reviews</span>
        </div>
      </div>
    </section>`;

  const expertQuickActions = `
    <section class="premium-quick-actions">
      <div class="premium-section-title"><span>Quick Actions</span><small>Manage your practice</small></div>
      <div class="premium-action-grid">
        <button onclick="Router.go('astro-consults')"><i class="bi bi-chat-square-text"></i><span>Consultations</span><b>07 active</b></button>
        <button onclick="Router.go('astro-earnings')"><i class="bi bi-bar-chart-line"></i><span>Earnings</span><b>View reports</b></button>
        <button onclick="Router.go('astro-profile-expert')"><i class="bi bi-calendar2-week"></i><span>Availability</span><b>Set schedule</b></button>
        <button onclick="Router.go('astro-profile-expert')"><i class="bi bi-person-badge"></i><span>Profile</span><b>92% complete</b></button>
      </div>
    </section>`;

  function injectUser() {
    const viewport = $('#screen-viewport');
    if (!viewport || viewport.dataset.premiumHome === 'user') return;
    const screen = $('.screen', viewport);
    if (!screen || !(screen.innerText || '').includes('Find Guidance')) return;

    const discover = Array.from(screen.querySelectorAll('*')).find(el => el.children.length === 0 && el.textContent.trim() === 'Discover');
    const host = discover && discover.parentElement;
    if (host) {
      host.insertAdjacentHTML('beforebegin', userKpis);
    } else {
      screen.insertAdjacentHTML('afterbegin', userKpis);
    }
    viewport.dataset.premiumHome = 'user';
  }

  function injectExpert() {
    const viewport = $('#screen-viewport');
    if (!viewport || viewport.dataset.premiumHome === 'expert') return;
    const screen = $('.screen', viewport);
    if (!screen) return;
    const text = screen.innerText || '';
    if (!(text.includes('Dashboard') || text.includes('Earnings') || text.includes('Consultations'))) return;
    if (STATE && STATE.currentRole !== 'astrologer') return;

    const body = $('.screen-body', screen) || screen;
    body.insertAdjacentHTML('afterbegin', expertQuickActions + expertKpis);
    viewport.dataset.premiumHome = 'expert';
  }

  function enhance() {
    const viewport = $('#screen-viewport');
    if (!viewport) return;
    viewport.dataset.premiumHome = '';
    injectUser();
    if (viewport.dataset.premiumHome !== 'user') injectExpert();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const viewport = $('#screen-viewport');
    if (!viewport) return;
    const observer = new MutationObserver(() => requestAnimationFrame(enhance));
    observer.observe(viewport, { childList: true, subtree: true });
    setTimeout(enhance, 50);
  });
})();
