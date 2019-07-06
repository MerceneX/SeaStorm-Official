const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: { name: "Šola Jadranja", link: "/sl" },
	strips: { name: "Jadralski Izleti", link: "/sl" },
	tbuild: { name: "Teambuilding", link: "/sl" },
	slit: { name: "Literatura", link: "/sl" },
	about: { name: "O Nas", link: "/sl/about" },
	language: { name: "Language" }
};

const global = {
	more1: "Več..."
};

module.exports = {
	Home: {
		layout: "main",
		title: "Domov",
		css: "/style/homepage.css",
		navigation,
		heading1: "Doživite z nami",
		expo1: {
			title: "Šola Jadranja",
			text:
				"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
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
