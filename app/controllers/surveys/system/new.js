import Ember from 'ember';

export default Ember.Controller.extend({
  presentSystemName: Ember.computed('model.systemName',
                                    'model.worldName', {
    get() {
      return `${this.get('model.systemName')} ${this.get('model.worldName')}`.toUpperCase();
    }
  }),

  actions: {
    create() {
    },
  }
});
