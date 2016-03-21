import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  application: Ember.inject.controller('application'),
  flash: Ember.inject.service('flash'),

  _accept: function(model) {
  },

  _reject: function(reason) {
    this.get("flash")
        .failure(reason);
  },

  actions: {
    authenticate(){
      this.get('session')
          .authenticate('authenticator:devise',
                        this.get('email'),
                        this.get('password'))
          .then(this._accept.bind(this), this._reject.bind(this));
    }
  }
});
