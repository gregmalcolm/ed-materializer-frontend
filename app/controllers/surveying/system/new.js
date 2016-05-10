import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

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
          .then((survey) => {
            this.transitionToRoute('surveying.system.edit',
                                   survey.get("id"))
                .then((transition) => {
                  Ember.run.scheduleOnce('afterRender',
                                     transition.get("controller"),
                                     function() {
                                       Ember.run.later(()=> {
                                         this.get("flash").notice("Survey created");
                                       }, 100);
                                     });
                });
          })
          .catch(xhr => {
            this.get("flash").failure(xhr);
          });
  },
});
