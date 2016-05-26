import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

  saveAndExit(successMessage) {
    var updater = this.get('session.data.authenticated.name');
    var model = this.get('model');
    var system = model.get('system');
    model.set('updater', updater);
    system.setProperties({
      updater: updater,
      system: model.get('system_name'),
    });
    this._findSystem(system)
        .then(system => {
          return system.save()
                       .then(() => {
                         model.save()
                              .then(() => {
                                this.transitionToRoute('surveying.worlds.show', model.id)
                                    .then((transition) => {
                                      this.get("flash").transitionNotice(transition, successMessage);
                                    });
                              })
                              .catch(xhr => {
                                this.transitionToRoute('surveying.worlds.show', model.id)
                                  .then((transition) => {
                                    this.get("flash").transitionFailure(transition, xhr);
                                 });
                              });
                       }, this._reject.bind(this));
        }, this._reject.bind(this));
  },

  _findSystem(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let system = this.get('store').peekRecord('system',
                                                model.get('id'));
      if (system) {
        resolve(system);
      } else {
        this.get('store').queryRecord('system', {
          system: model.get('system'),
        })
        .then(systems => {
          if (systems.length > 0) {
            model.set('id', systems.objectAt(0).get('id'));
            resolve(system);
          } else {
            resolve(model);
          }
        })
        .catch(xhr => {
          reject(xhr);
        });
      }
    });
  },

  _reject(xhr) {
    this.get("flash").failure(xhr);
  },
});
