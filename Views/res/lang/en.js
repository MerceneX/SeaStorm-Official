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
		navigation
	},
	About: {
		layout: "main",
		title: "About",
		navigation
	}
};
