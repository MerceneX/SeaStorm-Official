const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: {
		name: "Šola Jadranja",
		link: "/sl",
		dropdown: [
			{ name: "Začetni Tečaj", link: "#" },
			{ name: "Nadaljevalni Tečaj", link: "#" },
			{ name: "Individualni Tečaj", link: "#" },
			{ name: "Postani Voditelj Čolna", link: "#" }
		]
	},
	strips: {
		name: "Jadralski Izleti",
		link: "/sl",
		dropdown: [
			{ name: "4-urni Izlet", link: "#" },
			{ name: "1-dnevni Izlet", link: "#" },
			{ name: "2-dnevni Izlet", link: "#" },
			{ name: "3-dnevni Izlet", link: "#" },
			{ name: "Tedenski Izlet", link: "#" }
		]
	},
	tbuild: { name: "Teambuilding", link: "/sl" },
	slit: {
		name: "Literatura",
		link: "/sl",
		dropdown: [
			{ name: "Navigacija", link: "#" },
			{ name: "Manevriranje", link: "#" },
			{ name: "Vzdrževanje", link: "#" }
		]
	},
	about: { name: "O Nas", link: "/sl/about" },
	language: { name: "Language" }
};

const global = {
	more1: "Več..."
};

module.exports = {
	Home: {
		layout: "main",
		title: "SeaStorm Sailing",
		css: "/style/homepage.css",
		navigation,
		heading1: "Doživite z nami",
		expo1: {
			title: "Šola Jadranja",
			text:
				"Ponujam izobraževanja v več različnih okusih za bolj, manj in neizkušene. Pripravil sem začetni, nadaljevalni in individualni tečaj za vse ljubitelje športa. Za vse ki želite narediti korak dalje, pa nudim tečaj za voditelja čolna.",
			more: global.more1
		},
		expo2: {
			title: "Jadralski Izleti",
			text:
				"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
			more: global.more1
		},
		expo3: {
			title: "Teambuilding",
			text:
				"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
			more: global.more1
		}
	},
	About: {
		layout: "main",
		title: "O Nas",
		navigation
	}
};
