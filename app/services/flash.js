import Ember from 'ember';

export default Ember.Service.extend({
  errors: null,

  _jsonErrorsAsText(json) {
    if (json.errors) {
      json = json.errors;
    }

    if (typeof json === "string" || json instanceof String) {
      return json;
    } else {
      return this._errorsInHashAsText(json);
    }
  },

  _errorsInHashAsText(hash) {
    let text = "";
    Object.keys(hash).forEach(function(key) {
      text += "<p>";
      if (key !== "error" && key !== "base") {
        text += _.titleize(key);
      }
      text += `${hash[key]}</p>`;
    });

    return text;
  },

  failure(xhr) {
    let errors;
    if (xhr.responseJSON) {
      errors = this._jsonErrorsAsText(xhr.responseJSON);
    } else if (xhr.responseText) {
      errors = xhr.responseText;
    } else {
      errors = xhr;
    }

    this.set("errors", errors);
  }
});
