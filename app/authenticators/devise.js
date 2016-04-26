import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import Ember from 'ember';
import ENV from '../config/environment';

const { RSVP, isEmpty, run } = Ember;

export default DeviseAuthenticator.extend({
  authPath: `${ENV.apiHostName}/auth`,

  serverTokenEndpoint: Ember.computed("authPath", function() {
    return `${this.get("authPath")}/sign_in`;
  }),

  restore(data){
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(data.accessToken) &&
          !isEmpty(data.expiry) &&
          !isEmpty(data.tokenType) &&
          !isEmpty(data.uid) &&
          !isEmpty(data.client)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      const { identificationAttributeName } =
        this.getProperties('identificationAttributeName');
      const data = { password };
      data[identificationAttributeName] = identification;

      this.makeRequest(data).then(function(response, status, xhr) {
        var result = {
          accessToken: xhr.getResponseHeader('access-token'),
          expiry:      xhr.getResponseHeader('expiry'),
          tokenType:   xhr.getResponseHeader('token-type'),
          uid:         xhr.getResponseHeader('uid'),
          client:      xhr.getResponseHeader('client'),
          name:        xhr.responseJSON.data.name,
        };
        run(null, resolve, result);
      }, function(xhr) {
        run(null, reject, xhr);
      });
    });
  },

  invalidate(headers) {
    return new RSVP.Promise((resolve) => {
      return Ember.$.ajax({
        url: `${this.authPath}/sign_out`,
        dataType: 'json',
        type: 'DELETE',
        data: {
          'access-token': headers.accessToken,
          'client': headers.client,
          'uid': headers.uid
        }
      })
      .complete(() => {
        // Don't care if you succeeded or not. Session is over.
        resolve();
      });
    });
  }
});
