import DS from 'ember-data';

export default DS.Model.extend({
  system_name:        DS.attr('string'),
  updater:            DS.attr('string'),
  world:              DS.attr('string'),
  world_type:         DS.attr('string'),
  mass:               DS.attr('number'),
  radius:             DS.attr('number'),
  gravity:            DS.attr('number'),
  surface_temp:       DS.attr('number'),
  surface_pressure:   DS.attr('number'),
  orbit_period:       DS.attr('number'),
  rotation_period:    DS.attr('number'),
  semi_major_axis:    DS.attr('number'),
  terrain_difficulty: DS.attr('number'),
  vulcanism_type:     DS.attr('string'),
  rock_pct:           DS.attr('number'),
  metal_pct:          DS.attr('number'),
  ice_pct:            DS.attr('number'),
  reserve:            DS.attr('string'),
  arrival_point:      DS.attr('number'),
  notes:              DS.attr('string'),
  terraformable:      DS.attr('string'),
  atmosphere_type:    DS.attr('string'),
  created_at:         DS.attr('date'),
  updated_at:         DS.attr('date'),
  image_url:          DS.attr('string'),
  //updaters:           DS.attr('array'),

  creator:            DS.attr('string'),
  system:             DS.belongsTo('system'),
  surveyz:            DS.hasMany('survey'), // Calling it "surveys" causes a javascript bug for some reason
});
