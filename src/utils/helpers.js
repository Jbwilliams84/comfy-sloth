export const formatPrice = (number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100);
};

export const getUniqueValues = (data, type) => {
	// iterating over all products and grabbing the category and only listing them once
	let unique = data.map((item) => item[type]);
	if (type === 'colors') {
		unique = unique.flat();
	}
	return ['all', ...new Set(unique)];
	console.log(unique);
};
