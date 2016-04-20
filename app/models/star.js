import DS from 'ember-data';

export default DS.Model.extend({
  system_name:       DS.attr('string'),
  updater:           DS.attr('string'),
  star:              DS.attr('string'),
  spectral_class:    DS.attr('string'),
  spectral_subclass: DS.attr('string'),
  solar_mass:        DS.attr('number'),
  solar_radius:      DS.attr('number'),
  star_age:          DS.attr('number'),
  orbit_period:      DS.attr('number'),
  arrival_point:     DS.attr('number'),
  luminosity:        DS.attr('string'),
  notes:             DS.attr('string'),
  surface_temp:      DS.attr('number'),
  created_at:        DS.attr('date'),
  updated_at:        DS.attr('date'),
  image_url:         DS.attr('string'),
  updaters:          DS.attr('array'),

  creator:           DS.attr('string'),
  system:            DS.belongsTo('system'),
  surveys:           DS.hasMany('survey'),
});
