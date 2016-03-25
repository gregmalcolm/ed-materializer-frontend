import Ember from 'ember';

export default Ember.Service.extend({
  errors: null,

  _jsonErrorsAsText(json) {
    if (json.errors) {
      json = json.errors;
    }

    if (json instanceof Array) {
      return this._errorsInArrayAsText(json);
    } if (typeof json === "string" || json instanceof String) {
      return json;
    } else {
      return this._errorsInHashAsText(json);
    }
  },

  _errorsInHashAsText(hash) {
    let lines = [];
    Object.keys(hash).forEach((key)=> {
      let html = ""
      if (key !== "error" && key !== "base") {
        html += this._titleize(key);
      }
      html += `${hash[key]}`;
      lines.push(html);
    });

    return this._errorsInArrayAsText(lines);
  },

  _errorsInArrayAsText(lines) {
    if (lines && lines.length > 0) {
      return lines.map( function(line) {
        return `<p>${line}</p>`;
      });
    } else {
      return "";
    }
  },

  _titleize(str) {
    if (str && str.length > 0) {
      return `${str[0]}${str.slice(1)}`;
    } else {
      return "";
    }
  },

  latestErrors: Ember.computed("errors", function() {
    let errors = this.get("errors");
    this.set("errors", null);
    return errors;
  }),

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
