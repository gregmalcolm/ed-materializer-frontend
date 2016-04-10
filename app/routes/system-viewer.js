//import Ember from 'ember';
import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model() {
    this.store.findAll('system');
  }
});
