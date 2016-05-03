import Ember from 'ember';

export default Ember.Component.extend({
  survey: null,
  mat: null,
  editing: false,

  fullNameChanged: Ember.observer('', function() {
    // deal with the change
    console.log(`fullName changed to: ${this.get('fullName')}`);
  }),

  viewing: Ember.computed.not("editing"),

  onMat: Ember.on('init', function() {
    let mat = this.get('mat.name');
    if (mat) {
      let matAttr = `survey.${mat.name}`;
      this.matValue = Ember.computed(matAttr, {
        get: () => {
          return this.get(`survey.${this.get('mat.name')}`);
        },
        set: (key, value) => {
          this.set(`survey.${this.get('mat.name')}`, value);
          return value;
        }
      });
    }
  }),
});
