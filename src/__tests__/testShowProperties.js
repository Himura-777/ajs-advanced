import showProperties from "../js/showProperies";

test("sorting properties", () => {
	const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

	const order = ["name", "level"];

	const finalResult = [
		{ key: "name", value: "мечник" },
		{ key: "level", value: 2 },
		{ key: "attack", value: 80 },
		{ key: "defence", value: 40 },
		{ key: "health", value: 10 },
	];

	const result = showProperties(obj, order);
	expect(result).toEqual(finalResult);
});

test("sorting properties with missing ordered keys", () => {
	const obj = { attack: 80, defence: 40, health: 10 };
	const order = ["name", "level"];

	const expected = [
		{ key: "attack", value: 80 },
		{ key: "defence", value: 40 },
		{ key: "health", value: 10 },
	];

	const result = showProperties(obj, order);
	expect(result).toEqual(expected);
});
