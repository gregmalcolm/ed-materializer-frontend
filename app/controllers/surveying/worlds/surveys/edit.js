import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),

  actions: {
    save() {
      let survey = this.get('model');
      survey.save()
            .then(() => {
              this.get("flash").notice("Survey updated");
            })
            .catch(xhr => {
              this.get("flash").failure(xhr);
            });
      },
  },
});
