import Ember from 'ember';

export default Ember.Service.extend({
  errors: null,

  latestErrors: Ember.computed("errors", function() {
    let errors = this.get("errors");
    this.set("errors", null);
    return errors;
  }),

  latestNotices: Ember.computed("notices", function() {
    let notices = this.get("notices");
    this.set("notices", null);
    return notices;
  }),

  failure(errorObj) {
    let errors;
    if (errorObj.responseJSON) {
      errors = this._jsonErrorsAsText(errorObj.responseJSON);
    } else if (errorObj.isAdapterError) {
      errors = this._adapterErrors(errorObj);
    } else if (errorObj.responseText) {
      errors = errorObj.responseText;
    } else if (errorObj.statusText) {
      errors = errorObj.statusText;
    } else {
      errors = errorObj;
    }

    this.set("errors", errors);
  },

  notice(message) {
    this.set("notices", message);
  },

  _jsonErrorsAsText(json) {
    if (json.errors) {
      json = json.errors;
    }

    if (typeof json === "string" || json instanceof String) {
      return json;
    } else {
      if (!(json instanceof Array)) {
        json = this._errorsInObjectAsArray(json);
      }

      return this._errorsInArrayAsHtml(json);
    }
  },

  _adapterErrors(errorObj) {
    if (errorObj.errors && errorObj.errors.length > 0) {
      return errorObj.errors.map( function(error) {
        return `<p>${error.detail}</p>`;
      }).join('');
    } else {
      return errorObj.message;
    }
  },

  _errorsInObjectAsArray(hash) {
    if (hash['full_messages']) {
      return hash['full_messages'];
    }
    else
    {
      let items = [];

      Object.keys(hash).forEach((key)=> {
        let prefix = "";
        if (key !== "error" && key !== "base") {
          prefix = this._titleize(key);
        }
        items.push(`${prefix} ${hash[key]}`);
      });
      return items;
    }
  },

  _errorsInArrayAsHtml(lines) {
    if (lines && lines.length > 0) {
      return lines.map( function(line) {
        return `<p>${line}</p>`;
      }).join("");
    } else {
      return "";
    }
  },

  _titleize(str) {
    if (str && str.length > 0) {
      return `${str[0].toUpperCase()}${str.slice(1)}`.replace(/_/g, ' ');
    } else {
      return "";
    }
  },
});
