import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  routing: Ember.inject.service('-routing'),
  q: null,
  envText: ENV.envText,

  didInsertElement() {
    this._super(...arguments);
    this.$("#responsive-menu a, button").on("click", () => {
      if (this.$("span.hamburger").is(":visible")) {
        this.$("#responsive-menu").hide();
      }
    });
  },

  actions: {
    search() {
      this.get('routing').transitionTo('search', undefined, {
        q: this.get('q')
      });
    },
  },
});
