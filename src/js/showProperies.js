export default function showProperties(obj, order) {
	const result = [];

	for (const key of order) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			{
				result.push({ key, value: obj[key] });
			}
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
