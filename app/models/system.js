import DS from 'ember-data';

export default DS.Model.extend({
  system: DS.attr('string'),
  x:      DS.attr('number'),
  y:      DS.attr('number'),
  z:      DS.attr('number')
});
