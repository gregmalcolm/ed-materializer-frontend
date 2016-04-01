import Ember from 'ember';

export default Ember.Component.extend({
  flashes: Ember.inject.service('flash'),

  latestErrors: Ember.computed("errors", function() {
    let errors = this.get("errors");
    this.set("errors", null);
    return errors;
  }),

  latestNotices: Ember.computed("notices", function() {
    let notices = this.get("notices");
    this.set("notices", null);
    return notices;
  })

});
