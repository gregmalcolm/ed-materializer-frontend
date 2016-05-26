import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

  actions: {
    create() {
      let survey = this.get('model');
      survey.setProperties({
        commander: this.get('session.data.authenticated.name'),
      });
      survey.save()
            .then((survey) => {
              this.transitionToRoute('surveying.worlds.surveys.edit',
                                     survey.get('world.id'),
                                     survey.get('id'))
                  .then((transition) => {
                     this.get("flash").transitionNotice(transition, "Survey created successfully");
                  });
            })
            .catch(xhr => {
              this.get("flash").failure(xhr);
            });
    },
  },
});
