//import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.redirectTo('show', transition.params);
    }
  },
  actions: {
    willTransition: function() {
      let world = this.get('controller.model');
      if (world) {
        let system =
          this.get("store").peekRecord('system', world.get('system.id'));
        if (system) {
          system.rollbackAttributes();
        }
        world.rollbackAttributes();
      }
    },
  },
});
