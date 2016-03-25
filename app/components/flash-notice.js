import Ember from 'ember';

export default Ember.Component.extend({
  flashes: Ember.inject.service('flash'),

  latestErrors: Ember.computed("errors", function() {
    errors = this.get("errors")
    this.set("errors", null)
    errors
  })

});
