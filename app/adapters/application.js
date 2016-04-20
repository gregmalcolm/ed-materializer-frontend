import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV["apiHostName"],
  namespace: 'api/v2'
  //headers: Ember.computed('session.authToken', function() {
    //return {
      //"API_KEY": this.get("session.authToken"),
      //"ANOTHER_HEADER": "Some header value"
    //};
  //})
});
