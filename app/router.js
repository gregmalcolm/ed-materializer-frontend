import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-in');
  this.route('register');
  this.route('registrations', function() {
    this.route('confirm');
  });
  this.route('search');
  this.route('worlds', function() {
    this.route('system', {path: '/:system-name/:world-name'}, function() {
      this.route('new');
      this.route('show', {path: '/:survey-id'});
      this.route('edit', {path: '/:survey-id/edit'});
    });
  });
});

export default Router;
