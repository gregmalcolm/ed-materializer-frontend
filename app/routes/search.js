import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    let model = Ember.Object.create({
      isLoaded: false,
    });
    model.systems = this._findSystems(params, transition, model)
    return model;
  },
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  _findSystems(params, transition, model) {
    let systems = this.store
      .query('system', { per_page: 20,
                         q: transition.queryParams.q,
                         sort: 'system',
                         direction: 'asc',
                         include: ['worlds', 'stars']});
    systems.then(() => {
      model.set('isLoaded', true);
    });
    return systems;
  },

});
