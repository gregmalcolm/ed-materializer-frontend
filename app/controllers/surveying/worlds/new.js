import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    create() {
      let world = this.get('model');
      world.setProperties({
        updater: this.get('session.data.authenticated.name'),
      });
      world.save()
           .then(world => {
             this.transitionToRoute('model.world.show', world.id);
           })
           .catch(xhr => {
             this.get("flash").failure(xhr);
           });
    },
  },
});
