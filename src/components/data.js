const baseState = {
	personal: { show: true, name: "", email: "", tel: "" },
	education: { show: true, cards: [{ name: "", degree: "" }] },
	experience: { show: true, cards: [{ name: "", duration: "", position: "" }] },
};

const example = {
	personal: {
		show: true,
		name: "Jarod Tarot",
		email: "jarodthetarotreader@tarot.com",
		tel: "900-500-100",
	},
	education: {
		show: true,
		cards: [
			{ name: "u of u", degree: "bachelors of bachelorhood" },
			{ name: "university of earth", degree: "masters of bachelorhood" },
		],
	},
	experience: {
		show: true,
		cards: [
			{ name: "the tarot company", duration: "1 year", position: "intern" },
			{
				name: "the tarot company",
				duration: "2 years",
				position: "full time employee",
			},
			{
				name: "the magic factory",
				duration: "3 years",
				position: "regional manager",
			},
			{ name: "Jarod Tarot evil Inc.", duration: "5 years", position: "CEO" },
		],
	},
};
