import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  world: null,
  systemName: null,
  worldName: null,

  onTextChange: Ember.on('init', Ember.observer('systemName', 'worldName', function() {
    if (this.get('systemName') && this.get('worldName')) {
      Ember.run.debounce(this, this._updateSurveyListings, 180);
    }
  })),

  _updateSurveyListings() {
    this.get('store').queryRecord('world', {
      system: this.get('systemName'),
      world: this.get('worldName')
    }).then( (world) => {
      this.set('world', world.objectAt(0));
    });
  },
});
