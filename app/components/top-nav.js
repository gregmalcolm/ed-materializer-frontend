import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
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
});
