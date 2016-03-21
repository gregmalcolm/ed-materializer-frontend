import Ember from 'ember';

export default Ember.Component.extend({
  flashes: Ember.inject.service('flash')
});
