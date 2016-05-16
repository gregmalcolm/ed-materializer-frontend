import Ember from 'ember';

export default Ember.Component.extend({
  world: null,
  systemName: null,
  worldName: null,
  isEditing: false,
  worldTypes: {
    'Landables': {
      'Metal Rich': {name: 'Metal Rich'},
      'High Metal Content': {name: 'High Metal Content'},
      'Rocky World': {name: 'Rocky World'},
      'Icy World': {name: 'Icy World'},
      'Rocky Ice World': {name: 'Rocky Ice World'},
    },
    'Atmospheres': {
      'Water World': {name: 'Water World'},
      'Earth-like World': {name: 'Earth-like World'},
      'Ammonia World': {name: 'Ammonia World'},
    },
    'Gas Giants': {
      'Class I': {name: 'Class I'},
      'Class II': {name: 'Class II'},
      'Class III': {name: 'Class III'},
      'Class IV': {name: 'Class IV'},
      'Class V': {name: 'Class V'},
      'Helium Rich': {name: 'Helium Rich'},
      'With Ammonia Based Life': {name: 'With Ammonia Based Life'},
      'With Water Based Life': {name: 'With Water Based Life'},
    },
    'Other': {
      'Water Giant': {name: 'Water Giant'},
    },
  },
});
