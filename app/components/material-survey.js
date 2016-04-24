import Ember from 'ember';
import Materials from '../utils/materials';

export default Ember.Component.extend({
  survey: null,
  rarity: null,
  materials: Ember.computed("", function() {
    return Materials.filter((mat) => {
      let rarity = this.get('rarity');
      return rarity === null || mat.get('rarity') === rarity;
    });
  }),
});
