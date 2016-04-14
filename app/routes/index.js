import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model() {
    return this.store.query('survey', { per_page: 20,
                                        sort: 'created_at',
                                        direction: 'desc'});
  }
});
