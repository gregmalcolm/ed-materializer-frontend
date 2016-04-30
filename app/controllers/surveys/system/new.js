import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

  presentSystemName: Ember.computed('model.world.system_name',
                                    'model.world.world', {
    get() {
      return `${this.get('model.world.system_name')} ${this.get('model.world.world')}`.toUpperCase();
    }
  }),

  actions: {
    create() {
      let world = this.get('model.world');
      world.setProperties({
        updater: this.get('session.data.authenticated.name'),
      });
      if (world.get('isNew')) {
        world.save()
             .then( (/*world*/) => {
               this._createSurvey();
             })
             .catch(xhr => {
               this.get("flash").failure(xhr);
             });
      } else {
        this._createSurvey();
      }
    },
  },

  _createSurvey() {
    let survey = this.get('model.survey');
    survey.setProperties({
      world: this.get('model.world'),
      commander: this.get('session.data.authenticated.name'),
    });
    survey.save()
          .then((/*survey*/) => {
            console.log("success!");
          })
          .catch(xhr => {
            this.get("flash").failure(xhr);
          });
  },
});
