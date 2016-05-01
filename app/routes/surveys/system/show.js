import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      survey: this.store.findRecord('survey', params['survey-id']),
    };
  },

  afterModel(model) {
    model.world = this.modelFor('surveys.system');
  },
});
