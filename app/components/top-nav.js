import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  q: null,

  didInsertElement() {
    this._super(...arguments);
    this.$("#responsive-menu a, button") .on("click", function() {
          $("#responsive-menu").hide();
    });
  },

  displayIfAuthenticated: Ember.computed("session.isAuthenticated", function() {
    return this.get("session.isAuthenticated") ? "display: block;"
                                               : "display: none;";
  }),
  displayUnlessAuthenticated: Ember.computed("session.isAuthenticated", function() {
    return this.get("session.isAuthenticated") ? "display: none;"
                                               : "display: block;";

  }),
});
