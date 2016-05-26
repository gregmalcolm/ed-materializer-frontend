import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      world: this.store.findRecord('world', params['world-id']),
      surveys: this.store.queryRecord('survey', { world_id: params['world-id'] }),
    });
  },
});
