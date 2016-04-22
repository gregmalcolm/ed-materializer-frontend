export default {
  titleize(str) {
    if (str && str.length >= 2) {
      return `${str[0].toUpperCase()}${str.slice(1)}`;
    } else {
      return str;
    }
  }
};
