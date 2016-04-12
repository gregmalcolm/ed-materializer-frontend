import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.world.system_name = payload.world.system;
    delete payload.world.system;

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

