import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  flash: Ember.inject.service('flash'),

  _accept() {
    this.get('flash').notice('Please confirm your account by clicking the link in the email we just sent.');
  },

  _reject(reason) {
    console.error("Error", reason);
  },

  actions: {
    signUp() {
      Ember.$.post(`${ENV.apiHostName}/auth`,
                  { name: this.get('name'),
                    email: this.get('email'),
                    password: this.get('password'),
                    password_confirmation: this.get('passwordConfirmation'),
                    confirm_success_url: `${ENV.hostName}/sign-in?email=${this.get('email')}`})
             .success(() => {
               this.transitionToRoute('index').then(this._accept.bind(this),this._reject.bind(this));
             })
             .error((reason) => {
               this.get('flash').failure(reason);
             });
    }
  }
});
