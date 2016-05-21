import BaseWorldController from './base';

export default BaseWorldController.extend({
  actions: {
    create() {
      this.get('model').setProperties({
        system_name: this.get('systemName'),
        world: this.get('worldName'),
      });
      this.saveAndExit("World created successfully");
    },
  },
});
