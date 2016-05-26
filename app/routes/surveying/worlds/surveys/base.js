import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model(params) {
    return this.store.findRecord('survey', params['survey-id']);
  },
});
