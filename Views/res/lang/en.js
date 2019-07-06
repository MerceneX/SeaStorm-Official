const navigation = {
	home: { name: "Home", link: "/en" },
	sschool: { name: "Sailing School", link: "/en" },
	strips: { name: "Sailing Trips", link: "/en" },
	tbuild: { name: "Team Building", link: "/en" },
	slit: { name: "Literature", link: "/en" },
	about: { name: "About", link: "/en/about" },
	language: { name: "Language" }
};

const global = {
	more1: "More..."
};

module.exports = {
	Home: {
		layout: "main",
		title: "Home",
		css: "/style/homepage.css",
		navigation,
		heading1: "Experience with us",
		expo1: {
			title: "Saling School",
			text:
				"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
			more: global.more1
		},
		expo2: {
			title: "Sailing Trips",
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
		title: "About",
		navigation
	}
};
