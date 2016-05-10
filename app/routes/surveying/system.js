import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.store.queryRecord('world', {
        system: params['system-name'],
        world: params['world-name']
      })
      .then(models => {
        if (models.length > 0) {
          resolve(models.objectAt(0));
        } else {
          let model = this.store.createRecord(
            'world', {system_name: params['system-name'],
                      world: params['world-name']});
          resolve(model);
        }
      })
      .catch(xhr => {
        reject(xhr);
      });
    });
  },
});
