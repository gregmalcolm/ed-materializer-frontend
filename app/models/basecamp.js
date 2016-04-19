import DS from 'ember-data';

export default DS.Model.extend({
  updater:              DS.attr('string'),
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  landing_zone_terrain: DS.attr('string'),
  terrain_hue_1:        DS.attr('number'),
  terrain_hue_2:        DS.attr('number'),
  terrain_hue_3:        DS.attr('number'),
  landing_zone_lat:     DS.attr('number'),
  landing_zone_lon:     DS.attr('number'),
  notes:                DS.attr('string'),
  image_url:            DS.attr('string'),
  created_at:           DS.attr('date'),
  updated_at:           DS.attr('date'),
  updaters:             DS.attr('array'),

  creator:              DS.attr('string'),
  survey:               DS.hasMany('survey'),
  world:                DS.hasMany('world'),
});
