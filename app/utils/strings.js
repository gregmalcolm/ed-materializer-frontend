export default {
  humanize(str) {
    if (str && str.length > 1) {
      return `${str[0].toUpperCase()}${str.slice(1)}`;
    } else {
      return str;
    }
  },
  titleize(str) {
    if (str && str.length > 1) {
      return `${str[0].toUpperCase()}${str.slice(1)}`;
    } else {
      return str;
    }
  },
};
