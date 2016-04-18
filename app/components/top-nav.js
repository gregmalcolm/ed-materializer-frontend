import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  q: null,

  actions: {
    invalidateSession(){
      this.get('session').invalidate();
    }
  }
});
