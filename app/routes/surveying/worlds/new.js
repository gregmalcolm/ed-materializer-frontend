import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model() {
    const user = this.get('session.data.authenticated.name');
    let system = this.store.createRecord('system', {updater: user});
    return this.store.createRecord('world', { system: system,
                                              updater: user});
  },

  queryParams: {
    systemName: {
      refreshModel: true
    },
    worldName: {
      refreshModel: true
    },
  },
});
