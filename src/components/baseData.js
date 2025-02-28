export const baseState = {
	personal: { show: true, name: "", email: "", tel: "" },
	education: { show: true, cards: [{ name: "", degree: "" }] },
	experience: {
		id: crypto.randomUUID(),
		show: true,
		cards: [{ name: "", duration: "", position: "" }],
	},
};

export const example = {
	personal: {
		show: true,
		name: "Jarod Tarot",
		email: "jarodthetarotreader@tarot.com",
		tel: "900-500-100",
	},
	education: {
		show: true,
		cards: [
			{
				id: crypto.randomUUID(),
				name: "u of u",
				degree: "bachelors of bachelorhood",
			},
			{
				id: crypto.randomUUID(),
				name: "university of earth",
				degree: "masters of bachelorhood",
			},
		],
	},
	experience: {
		show: true,
		cards: [
			{
				id: crypto.randomUUID(),
				name: "the tarot company",
				duration: "1 year",
				position: "intern",
			},
			{
				id: crypto.randomUUID(),
				name: "the tarot company",
				duration: "2 years",
				position: "full time employee",
			},
			{
				id: crypto.randomUUID(),
				name: "the magic factory",
				duration: "3 years",
				position: "regional manager",
			},
			{
				id: crypto.randomUUID(),
				name: "Jarod Tarot evil Inc.",
				duration: "5 years",
				position: "CEO",
			},
		],
	},
};
