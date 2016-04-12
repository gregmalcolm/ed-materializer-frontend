//import Ember from 'ember';
import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model() {
    return this.store.query('system', {sort: 'created_at', direction: 'desc'});
  }
});
