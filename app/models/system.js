import DS from 'ember-data';

export default DS.Model.extend({
  system:    DS.attr('string'),
  updater:   DS.attr('string'),
  x:         DS.attr('number'),
  y:         DS.attr('number'),
  z:         DS.attr('number'),
  poi_name:  DS.attr('string'),
  notes:     DS.attr('string'),
  image_url: DS.attr('string'),
  tags:      DS.attr(),
  creator:   DS.attr('string'),
  worlds:    DS.hasMany('world')
});
