export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    //newSurvey() {
      //this.transitionToRoute('surveying.system.new', this.get('systemName'),
                                                  //this.get('worldName'));
    //},
    //edit(surveyId) {
      //this.transitionToRoute('surveying.system.edit', this.get('systemName'),
                                                   //this.get('worldName'),
                                                   //surveyId);
    //},
    //show(surveyId) {
      //this.transitionToRoute('surveying.system.show', this.get('systemName'),
                                                   //this.get('worldName'),
                                                   //surveyId);
    //},
  },

  surveySorting: ['surveyed_at', 'commander', 'surveyed_by', 'basecamp'],
  sortedSurveys: Ember.computed.sort('model.surveys', 'surveySorting'),
});
