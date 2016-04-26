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
    let system = this.modelFor('surveys.system');
    model.systemName = system.systemName;
    model.worldName = system.worldName;
  },
});
