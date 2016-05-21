import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

  saveAndExit(successMessage) {
    let world = this.get('model');
    world.setProperties({
      updater: this.get('session.data.authenticated.name'),
    });
    world.save()
         .then(world => {
           this.transitionToRoute('surveying.worlds.show', world.id)
               .then((transition) => {
                 this.get("flash").transitionNotice(transition, successMessage);
              });
         })
         .catch(xhr => {
           this.get("flash").failure(xhr);
         });
  },
});
