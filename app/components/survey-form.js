import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  editing: false,

  presentSystemName: Ember.computed('model.world.system_name',
                                    'model.world.world', {
    get() {
      return `${this.get('model.world.system_name')} ${this.get('model.world.world')}`.toUpperCase();
    }
  }),
});
