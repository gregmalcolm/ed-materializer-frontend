import Ember from 'ember';
import materials from '../utils/materials';

export default Ember.Component.extend({
  survey: null,
  rarity: null,
  editing: false,
  materials: Ember.computed("", function() {
    return materials.filter((mat) => {
      let rarity = this.get('rarity');
      return rarity === null || mat.get('rarity') === rarity;
    });
  }),
});
