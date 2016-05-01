import Ember from 'ember';
import Materials from '../utils/materials';
import StringUtils from '../utils/strings';

export default Ember.Component.extend({
  survey: null,
  discoveredMaterialsList: Ember.computed('survey.created_at', function() {
    let discoveries = [];
    for (var mat of Materials) {
      if (this.get(`survey.${mat.name}`) > 0) {
        discoveries.push(StringUtils.titleize(mat.name));
      }
    }
    return discoveries.join(', ');
  }),
});
