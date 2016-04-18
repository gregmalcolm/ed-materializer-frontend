import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model() {
    return this.store.query('survey', { per_page: 50,
                                        sort: 'id',
                                        direction: 'desc'});
  }
});
