import ActiveModelAdapter from 'active-model-adapter';
import ENV from '../config/environment';

export default ActiveModelAdapter.extend({
  host: ENV["apiHostName"],
  namespace: 'api/v2'
  //headers: Ember.computed('session.authToken', function() {
    //return {
      //"API_KEY": this.get("session.authToken"),
      //"ANOTHER_HEADER": "Some header value"
    //};
  //})
});
