const formatDate = (date: string | Date, locale = "en", options = {}) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export default formatDate;
