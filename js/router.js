/* ============================================================
   AstroTalkz by vorabion — Router / Navigation Manager
   Manages screen history, role routing, back navigation & fallbacks
   ============================================================ */

const Router = {
  history: [],

  /* Navigate to a new screen, push to history */
  go(screenId, params = {}) {
    if (!screenId) return;
    this.history.push({ screenId, params });
    App.render(screenId, params);
  },

  /* Go back in history */
  back() {
    if (this.history.length > 1) {
      this.history.pop();
      const prev = this.history[this.history.length - 1];
      App.render(prev.screenId, prev.params);
    } else {
      // Fallback to the active role's real dashboard/home screen.
      // Use currentRole (the canonical state property) instead of the
      // old/non-existent STATE.role property.
      if (STATE.currentRole === 'astrologer') {
        this.reset('astro-dashboard');
      } else {
        this.reset('home');
      }
    }
  },

  /* Replace current screen without adding to history */
  replace(screenId, params = {}) {
    if (this.history.length > 0) {
      this.history[this.history.length - 1] = { screenId, params };
    } else {
      this.history.push({ screenId, params });
    }
    App.render(screenId, params);
  },

  /* Reset history and start fresh (used on role switch, login, logout) */
  reset(screenId, params = {}) {
    this.history = [{ screenId, params }];
    App.render(screenId, params);
  },

  current() {
    if (this.history.length === 0) return null;
    return this.history[this.history.length - 1];
  }
};
