import Ember from 'ember';
//import SurveysController from '../surveys';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  world: null,
  systemName: null,
  worldName: null,
  queryParams: ['systemName', 'worldName'],

  fullSystem: Ember.computed('systemName', 'worldName', {
    get() {
      let systemName = this.get('systemName');
      let worldName = this.get('worldName');
      if (systemName && worldName) {
        return `${systemName} ${worldName}`;
      } else {
        return null;
      }
    }
  }),

  actions: {
    newSurvey() {
      this.transitionToRoute('worlds.system.new', this.get('systemName'),
                                                  this.get('worldName'));
    },
    edit(surveyId) {
      this.transitionToRoute('worlds.system.edit', this.get('systemName'),
                                                   this.get('worldName'),
                                                   surveyId);
    },
    show(surveyId) {
      this.transitionToRoute('worlds.system.show', this.get('systemName'),
                                                   this.get('worldName'),
                                                   surveyId);
    },
  },

  surveySorting: ['surveyed_at', 'commander', 'surveyed_by', 'basecamp'],
  sortedSurveys: Ember.computed.sort('world.surveys', 'surveySorting'),
});
