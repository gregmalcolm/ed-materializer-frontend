import Ember from 'ember';

export default Ember.Component.extend({
  systems: null,
  worlds: null,
  stars: null,

  results: Ember.computed('systems.[]',
                          'worlds.[]',
                          'stars.[]', function() {
    if (this.get('systems.length') > 0) {
      return this.get('systems');
    } else if (this.get('worlds.length') > 0) {
      return [ this.get('worlds').objectAt(0)
                               .get('system') ];
    } else if (this.get('stars.length') > 0) {
      return [ this.get('stars').objectAt(0)
                                .get('system') ];
    } else {
      return null;
    }
  }),
});
