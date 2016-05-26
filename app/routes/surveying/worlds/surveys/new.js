import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model() {
    return this.store.createRecord('survey', {
        surveyed_by: this.get('session.data.authenticated.name'),
    });
  },

  afterModel(model) {
    const surveys = this.modelFor('surveying.worlds.surveys');
    model.set('world', surveys.world);
  },

});
