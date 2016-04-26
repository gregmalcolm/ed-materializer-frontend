import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model(params) {
    return {
      survey: this.store.createRecord('survey', {
        surveyed_by: this.get('session.data.authenticated.name'),
      }),
    };
  },

  afterModel(model) {
    model.world = this.modelFor('surveys.system');
  },
});
