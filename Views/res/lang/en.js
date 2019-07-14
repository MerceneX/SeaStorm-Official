const navigation = {
	home: { name: "Home", link: "/en" },
	sschool: {
		name: "Sailing School",
		link: "/en",
		dropdown: [
			{ name: "Beginner Course", link: "/en" },
			{ name: "Intermediate Course", link: "/en" },
			{ name: "Individual Course", link: "/en" }
		]
	},
	strips: {
		name: "Sailing Trips",
		link: "/en",
		dropdown: [
			{ name: "4h Trip", link: "/en" },
			{ name: "1 Day Trip", link: "/en" },
			{ name: "2 Day Trip", link: "/en" },
			{ name: "3 Day Trip", link: "/en" },
			{ name: "Weekly Trip", link: "/en" }
		]
	},
	tbuild: { name: "Team Building", link: "/en" },
	slit: {
		name: "Literature",
		link: "/en",
		dropdown: [
			{ name: "Navigation", link: "/en" },
			{ name: "Manouvering", link: "/en" },
			{ name: "Maintenance", link: "/en" }
		]
	},
	about: { name: "About", link: "/en/about" },
	language: { name: "Language" }
};

const global = {
	more1: "More..."
};

module.exports = {
	Home: {
		layout: "main",
		title: "SeaStorm Sailing",
		css: "/style/homepage.css",
		navigation,
		heading1: "Experience with us",
		expo1: {
			title: "Saling School",
			text:
				"We offer a wide variety of courses for the more, less and inexperienced. We've prepared a beginner intermediate and individual course for all lovers of the sport who would like to have a go at it themselves.",
			more: global.more1
		},
		expo2: {
			title: "Sailing Trips",
			text:
				"The experince of sailing is something special wheter it is a short or a long trip, the memories last. This is why we offer trips in all shapes and sizes, so you can choose an unforgetable experience to tell all your friends about it.",
			more: global.more1
		},
		expo3: {
			title: "Teambuilding",
			text:
				"On the open sea, where waves shake the deck we find out what we're made of! Is your team ready to stand as one when it's time to sail? Schedule a teambuilding sailing trip and we'll find out.",
			more: global.more1
		}
	},
	About: {
		layout: "main",
		title: "About",
		navigation
	}
};
