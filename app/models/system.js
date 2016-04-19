import DS from 'ember-data';

export default DS.Model.extend({
  system:     DS.attr('string'),
  updater:    DS.attr('string'),
  x:          DS.attr('number'),
  y:          DS.attr('number'),
  z:          DS.attr('number'),
  poi_name:   DS.attr('string'),
  notes:      DS.attr('string'),
  image_url:  DS.attr('string'),
  tags:       DS.attr('array'),
  updaters:   DS.attr('array'),
  creator:    DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  worlds:     DS.hasMany('world'),
  stars:      DS.hasMany('star')
});
