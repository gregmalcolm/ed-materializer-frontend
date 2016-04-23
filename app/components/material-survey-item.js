import Ember from 'ember';

export default Ember.Component.extend({
  survey: null,
  mat: null,

  fullNameChanged: Ember.observer('', function() {
    // deal with the change
    console.log(`fullName changed to: ${this.get('fullName')}`);
  }),

  onMat: Ember.on('init', function() {
    let mat = this.get('mat.name')
    if (mat) {
      let matAttr = `survey.${mat.name}`;
      this.matValue = Ember.computed(matAttr, {
        get: (key) => {
          //console.log(`get ${this.get('mat.name')}`);
          return this.get(`survey.${this.get('mat.name')}`);
        },
        set: (key, value) => {
          //console.log(`set ${this.get('mat.name')}`);
          this.set(`survey.${this.get('mat.name')}`, value);
          return value;
        }
      });
    }
  }),
});
