const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: {
		name: "Šola Jadranja",
		link: "/sl",
		dropdown: [
			{ name: "Začetni Tečaj", link: "/sl" },
			{ name: "Nadaljevalni Tečaj", link: "/sl" },
			{ name: "Individualni Tečaj", link: "/sl" }
		]
	},
	strips: {
		name: "Jadralski Izleti",
		link: "/sl",
		dropdown: [
			{ name: "4-urni Izlet", link: "/sl" },
			{ name: "1-dnevni Izlet", link: "/sl" },
			{ name: "2-dnevni Izlet", link: "/sl" },
			{ name: "3-dnevni Izlet", link: "/sl" },
			{ name: "Tedenski Izlet", link: "/sl" }
		]
	},
	tbuild: { name: "Teambuilding", link: "/sl" },
	slit: {
		name: "Literatura",
		link: "/sl",
		dropdown: [
			{ name: "Navigacija", link: "/sl" },
			{ name: "Manevriranje", link: "/sl" },
			{ name: "Vzdrževanje", link: "/sl" }
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
				"Ponujamo izobraževanja v več različnih okusih za bolj, manj in neizkušene. Pripravili smo vam začetni, nadaljevalni in individualni tečaj za vse ljubitelje športa.",
			more: global.more1
		},
		expo2: {
			title: "Jadralski Izleti",
			text:
				"Doživetje jadranja je nekaj prav posebnega, kratko ali dolgotrajno tvorni nepozabne spomine. Zato ponujamo časovno prilagodljive izlete, katerih se boste spominjali še dolgo in veseli o nijh pripovedovali prijateljem.",
			more: global.more1
		},
		expo3: {
			title: "Teambuilding",
			text:
				"Na odprtem morju, ko valovi zatresejo tla pod nogamo izvemo iz kakšnega testa smo v resnici! Je vaša ekipa pripravljena stopiti skupaj in zapluti res enotno? Pridite na teambulding in izvedeli boste.",
			more: global.more1
		}
	},
	About: {
		layout: "main",
		title: "O Nas",
		navigation
	}
};
