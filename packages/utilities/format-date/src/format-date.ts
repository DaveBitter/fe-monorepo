const formatDate = (date, locale = "en", options = {}) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export default formatDate;
