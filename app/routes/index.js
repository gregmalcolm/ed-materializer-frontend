import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model() {
    return this.get("store").query('survey', { per_page: 100,
                                               sort: 'id',
                                               direction: 'desc',
                                               include: ['world']});
  }

});
