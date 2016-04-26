import Ember from 'ember';
import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend({
  authorize(data, block) {
    const { uid, accessToken, client }  = data;
    if (!Ember.isEmpty(uid) &&
        !Ember.isEmpty(accessToken) &&
        !Ember.isEmpty(client)) {
      block('uid', uid);
      block('access-token', accessToken);
      block('client', client);
    }
  }
});
