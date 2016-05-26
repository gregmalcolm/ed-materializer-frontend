import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  surveySorting: ['surveyed_at', 'commander', 'surveyed_by', 'basecamp'],
  sortedSurveys: Ember.computed.sort('model.surveys', 'surveySorting'),
});
