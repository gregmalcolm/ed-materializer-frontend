import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return {
      survey: this.store.findRecord('survey', params['survey-id']),
    };
  },

  afterModel(model) {
    model.world = this.modelFor('surveys.system');
  },
});
