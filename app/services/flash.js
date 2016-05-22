import Ember from 'ember';

export default Ember.Service.extend({
  errors: null,
  notices: null,

  latestErrors: Ember.computed("errors", function() {
    return this._latestMessage("errors");
  }),

  latestNotices: Ember.computed("notices", function() {
    return this._latestMessage("notices");
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

    this._setMessage('errors', errors);
  },

  notice(message) {
    this._setMessage('notices', message);
  },

  transitionNotice(transition, message, delay) {
    if (!delay) {
      delay = 140;
    }
    Ember.run.scheduleOnce('afterRender', transition.get("controller"),
      function() {
        Ember.run.later(()=> {
          this.get("flash").notice(message);
        }, delay);
      });
  },

  transitionFailure(transition, xhr, delay) {
    if (!delay) {
      delay = 140;
    }
    Ember.run.scheduleOnce('afterRender', transition.get("controller"),
      function() {
        Ember.run.later(()=> {
          this.get("flash").failure(xhr);
        }, delay);
      });
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

  _setMessage(messageName, message) {
    this.set(messageName, message);
    if (message) {
      window.scrollTo(0,0);
    }
  },

  _clearMessage(messageName) {
    this.set(messageName, null);
  },

  _latestMessage(messageName) {
    let message = this.get(messageName);
    this._clearMessage(messageName);
    return message;
  },
});
