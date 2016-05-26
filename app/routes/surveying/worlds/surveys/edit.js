import BaseWorldRoute from './base';

export default BaseWorldRoute.extend({
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.redirectTo('show', transition.params);
    }
  },
  actions: {
    willTransition: function() {
      let survey = this.get('controller.model');
      if (survey) {
        survey.rollbackAttributes();
      }
    },
  },
});
