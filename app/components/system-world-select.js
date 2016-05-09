import Ember from 'ember';
import stringUtils from '../utils/strings';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  world: null,
  worlds: null,
  systemName: null,
  worldName: null,

  onTextChange: Ember.on('init', Ember.observer('systemName', 'worldName', function() {
    if (this.get('systemName')) {
      Ember.run.debounce(this, this._updateSurveyListings, 180);
    }
  })),

  hasSystemText: Ember.computed('systemName', {
    get() {
      return this.get('systemName.length') > 0;
    }
  }),

  knownWorld: Ember.computed('firstWorld.system_name',
                             'firstWorld.world',
                             'systemName',
                             'worldName', {
    get() {
      return this.get('firstWorld.system_name') ===
               this.get('systemName') &&
             this.get('firstWorld.world') ===
               this.get('worldName');
    },
  }),

  selectingWorld: Ember.computed.not('knownWorld'),

  fullSystem: Ember.computed('systemName', 'worldName', {
    get() {
      let systemName = this.get('systemName');
      let worldName = this.get('worldName');
      if (systemName && worldName) {
        return stringUtils.humanize(`${systemName} ${worldName}`);
      } else {
        return null;
      }
    }
  }),

  actions: {
    selectWorld(world) {
      this.set('systemName', world.get('system_name'));
      this.set('worldName', world.get('world'));
    },
  },

  _updateSurveyListings() {
    this.get('store').queryRecord('world', {
      per_page: 8,
      system_like: this.get('systemName'),
      world_like: this.get('worldName'),
    }).then( (worlds) => {
      this.set('worlds', worlds);
      this.set('firstWorld', worlds.objectAt(0));
    });
  },
});
