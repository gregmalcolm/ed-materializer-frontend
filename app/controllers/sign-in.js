import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  flash: Ember.inject.service('flash'),
  queryParams: ['email'],

  _reject: function(reason) {
    this.get("flash").failure(reason);
  },

  actions: {
    authenticate(){
      this.get('session')
          .authenticate('authenticator:devise',
                        this.get('email'),
                        this.get('password'))
          .catch(this._reject.bind(this));
    }
  }
});
