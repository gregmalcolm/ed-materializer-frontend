import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  q: null,

  didInsertElement() {
    this._super(...arguments);
    this.$("#responsive-menu a, button").on("click", () => {
      this.$("#responsive-menu").hide();
    });
  },
});
