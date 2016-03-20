import Ember from "ember";
export default Ember.Component.extend({
  didInitAttrs() {
    Ember.run.schedule("afterRender", function() {
      Ember.$(document).foundation();
    });
  },
});
