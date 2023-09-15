import moment from 'moment';

const durationString = (from: string, to: string, format: string = 'MMM YYYY') => {
	
	const fromDate = moment(from, format);
	const toDate = to === 'Present' ? moment() : moment(to, format);

	const years: number = toDate.diff(fromDate, 'years');
	fromDate.add(years, 'years');

	const months: number = toDate.diff(fromDate, 'months') + 1;
	var text: string = '';

	if (years) {
		text += `${years} yrs `;
	}

	if (months) {
		text += `${months} mos`;
	}
	
	return text;
};

export default durationString;