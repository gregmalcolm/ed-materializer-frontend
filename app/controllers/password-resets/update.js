import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  flash: Ember.inject.service('flash'),

  queryParams: [
    'email',
    'client_id',
    'token',
    'uid'
  ],

  actions: {
    update() {
      Ember.$.ajax({
        url: `${ENV.apiHostName}/auth/password`,
        type: 'PUT',
        headers: {
          'access-token': this.get('token'),
          client: this.get('client_id'),
          uid: this.get('uid')
        },
        data: { email: this.get('email'),
                password: this.get('password'),
                password_confirmation: this.get('passwordConfirmation') }
      }).done(() => {
         this.transitionToRoute('sign-in')
             .then((transition) => {
               this.get("flash").transitionNotice(transition, 'Your password change was successful.');
             });
       })
       .fail((xhr) => {
         this.get('flash').failure(xhr);
       });
    }
  },
});
