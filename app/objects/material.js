import Ember from 'ember';
import StringUtils from '../utils/strings';

export default Ember.Object.extend({
  code: null,
  name: null,
  rarity: null,
  score: null,

  niceName: Ember.computed('name', function() {
    return StringUtils.titleize(this.get('name'));
  }),
});
