import Ember from 'ember';
import Materials from '../utils/materials';
import StringUtils from '../utils/strings';

export default Ember.Component.extend({
  worldSurvey: null,
  discoveredMaterialsList: Ember.computed('worldSurvey.created_at', function() {
    let discoveries = [];
    for (var mat of Materials.materials) {
      if (this.get(`worldSurvey.${mat.name}`) === true) {
        discoveries.push(StringUtils.titleize(mat.name));
      }
    }
    return discoveries.join(', ');
  }),
});
