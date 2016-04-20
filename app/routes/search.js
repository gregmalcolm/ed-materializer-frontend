import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    return { systems: this._findSystems(params, transition)};
  },
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  _findSystems(params, transition) {
    return this.store
               .query('system', { per_page: 20,
                                  q: transition.queryParams.q,
                                  sort: 'system',
                                  direction: 'asc'});
  },
});
