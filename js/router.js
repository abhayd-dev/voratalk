/* ============================================================
   AstroTalkz by vorabion — Router / Navigation Manager
   Manages screen history, back navigation, and screen rendering
   ============================================================ */

const Router = {
  history: [],

  /* Navigate to a new screen, push to history */
  go(screenId, params = {}) {
    this.history.push({ screenId, params });
    App.render(screenId, params);
  },

  /* Go back in history */
  back() {
    if (this.history.length <= 1) return;
    this.history.pop();
    const prev = this.history[this.history.length - 1];
    App.render(prev.screenId, prev.params);
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

  /* Reset history and start fresh (used on role switch) */
  reset(screenId, params = {}) {
    this.history = [{ screenId, params }];
    App.render(screenId, params);
  },

  current() {
    if (this.history.length === 0) return null;
    return this.history[this.history.length - 1];
  }
};
