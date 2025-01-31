import showSkills from "../js/showSkills";

test("extract special skills with default description", () => {
	const character = {
		special: [
			{
				id: 1,
				name: "Мощный удар",
				icon: "http://...",
				description: "Наносит огромный урон",
			},
			{
				id: 2,
				name: "Щит",
				icon: "http://...",
			},
		],
	};

	const expected = [
		{
			id: 1,
			name: "Мощный удар",
			icon: "http://...",
			description: "Наносит огромный урон",
		},
		{
			id: 2,
			name: "Щит",
			icon: "http://...",
			description: "Описание недоступно",
		},
	];

	const result = showSkills(character);

	expect(result).toEqual(expected);
});
