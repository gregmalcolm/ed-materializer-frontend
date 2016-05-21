import BaseWorldController from './base';

export default BaseWorldController.extend({
  actions: {
    save() {
      this.saveAndExit("World updated successfully");
    },
  },
});
