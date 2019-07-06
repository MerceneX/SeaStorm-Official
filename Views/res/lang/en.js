const navigation = {
	home: { name: "Home", link: "/en" },
	sschool: { name: "Sailing School", link: "/en" },
	strips: { name: "Sailing Trips", link: "/en" },
	tbuild: { name: "Team Building", link: "/en" },
	slit: { name: "Literature", link: "/en" },
	about: { name: "About", link: "/en/about" },
	language: { name: "Language" }
};

module.exports = {
	Home: {
		layout: "main",
		title: "Home",
		css: "/style/homepage.css",
		navigation,
		heading1: "Experience with us",
		expo1: "Saling School",
		expo2: "Sailing Trips",
		expo3: "Teambuilding"
	},
	About: {
		layout: "main",
		title: "About",
		navigation
	}
};
