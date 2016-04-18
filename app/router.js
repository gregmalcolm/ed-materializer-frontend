import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');
  this.route('sign-in');
  this.route('register');
  this.route('registrations', function() {
    this.route('confirm');
  });
  this.route('search');
});

export default Router;
