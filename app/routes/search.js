import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    const q = transition.queryParams.q;
    var model = new Ember.Object({
      isLoaded: false,
      systems: this._findSystems(q),
      worlds: this._findWorlds(q),
      stars: this._findStars(q),
    });


    new Ember.RSVP.hashSettled({
      systems: model.get('systems'),
      worlds: model.get('worlds'),
      stars: model.get('stars'),
    }).then(() => {
      model.set('isLoaded', true);
    });
    return model;
  },

  queryParams: {
    q: {
      refreshModel: true
    }
  },

  _findSystems(q) {
    return this.store.query('system', {
      per_page: 20,
      q: q,
      sort: 'system',
      direction: 'asc',
      include: ['worlds', 'stars']
    });
  },

  _findWorlds(q) {
    return this.store.query('world', {
      per_page: 20,
      full_world_like: q,
      sort: 'world',
      direction: 'asc',
      include: ['systems']
    });
  },

  _findStars(q) {
    return this.store.query('star', {
      per_page: 20,
      full_star_like: q,
      sort: 'star',
      direction: 'asc',
      include: ['systems']
    });
  },

});
