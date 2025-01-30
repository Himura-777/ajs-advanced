export default function showProperties(obj, order) {
	const result = [];

	for (const key of order) {
		if (obj.hasOwnProperty(key)) {
			result.push({ key, value: obj[key] });
		}
	}

	const remainingProps = [];
	for (const key in obj) {
		if (!order.includes(key)) {
			remainingProps.push(key);
		}
	}
	remainingProps.sort();

	for (const key of remainingProps) {
		result.push({ key, value: obj[key] });
	}

	return result;
}
