import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  session: Ember.inject.service('session'),
  world:       DS.belongsTo('world'),
  basecamp:    DS.belongsTo('basecamp'),
  basecamp_id: DS.attr('number'),
  //system:      DS.belongsTo('system'),
  commander:   DS.attr('string'),
  resource:    DS.attr('string', {defaultValue: 'BINARY'}),
  notes:       DS.attr('string'),
  surveyed_by: DS.attr('array'),
  surveyed_at: DS.attr('date',  {defaultValue: moment().utc().toString()}),
  error_flag:  DS.attr('boolean'),
  error_description: DS.attr('string'),
  image_url:   DS.attr('string'),
  carbon:      DS.attr('number'),
  iron:        DS.attr('number'),
  nickel:      DS.attr('number'),
  phosphorus:  DS.attr('number'),
  sulphur:     DS.attr('number'),
  arsenic:     DS.attr('number'),
  chromium:    DS.attr('number'),
  germanium:   DS.attr('number'),
  manganese:   DS.attr('number'),
  selenium:    DS.attr('number'),
  vanadium:    DS.attr('number'),
  zinc:        DS.attr('number'),
  zirconium:   DS.attr('number'),
  cadmium:     DS.attr('number'),
  mercury:     DS.attr('number'),
  molybdenum:  DS.attr('number'),
  niobium:     DS.attr('number'),
  tin:         DS.attr('number'),
  tungsten:    DS.attr('number'),
  antimony:    DS.attr('number'),
  polonium:    DS.attr('number'),
  ruthenium:   DS.attr('number'),
  technetium:  DS.attr('number'),
  tellurium:   DS.attr('number'),
  yttrium:     DS.attr('number'),
  created_at:  DS.attr('date'),
  updated_at:  DS.attr('date'),
  creator:     DS.attr('string'),
  isOwner:     Ember.computed('commander', 'session.isAuthenticated', {
    get() {
      return (this.get('session.data.authenticated.role') === 'admin' ||
          this.get('commander') ===
            this.get('session.data.authenticated.name'));
    }
  }),
});
