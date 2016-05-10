import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  world: null,
  systemName: null,
  worldName: null,
  queryParams: ['systemName', 'worldName'],


  actions: {
    newWorld() {

    },
    editWorld() {
    },
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

  //surveySorting: ['surveyed_at', 'commander', 'surveyed_by', 'basecamp'],
  //sortedSurveys: Ember.computed.sort('world.surveys', 'surveySorting'),
});
