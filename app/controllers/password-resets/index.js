import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  flash: Ember.inject.service('flash'),

  actions: {
    requestPasswordReset() {
      Ember.$.post(`${ENV.apiHostName}/auth/password`,
                  { email: this.get('email'),
                    redirect_url: `${ENV.hostName}/password-resets/update?email=${this.get('email')}`})
             .success(() => {
               this.get('flash').notice('The password reset email has been sent.');
             })
             .fail((xhr) => {
               this.get('flash').failure(xhr);
             });
    }
  },

  _resolve() {
    this.get("flash").transitionNotice('index', 'The password reset email has been sent.');
  },

  _reject(reason) {
    console.error("Error", reason);
  },
});
