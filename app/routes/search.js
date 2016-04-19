import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    return this.get("store").query('system', { per_page: 20,
                                               q: transition.queryParams.q,
                                               sort: 'system',
                                               direction: 'asc'});
  },
  queryParams: {
    q: {
      refreshModel: true
    }
  },
});
