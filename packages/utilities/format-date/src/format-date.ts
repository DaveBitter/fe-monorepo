const formatDate = (date: string | Date, locale = 'en', options = {}) =>
	new Intl.DateTimeFormat(locale, options).format(new Date(date));

export default formatDate;
