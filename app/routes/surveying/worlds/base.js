import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model(params) {
    return this.store.findRecord('world', params['world-id']);
  },
});
