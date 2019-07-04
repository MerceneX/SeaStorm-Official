const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: { name: "Šola Jadranja", link: "/sl" },
	strips: { name: "Izlet", link: "/sl" },
	tbuild: { name: "Teambuilding", link: "/sl" },
	slit: { name: "Literatura", link: "/sl" },
	about: { name: "O Nas", link: "/sl/about" },
	language: { name: "Jezik" }
};

module.exports = {
	Home: {
		layout: "main",
		title: "Domov",
		css: "/style/homepage.css",
		navigation
	},
	About: {
		layout: "main",
		title: "O Nas",
		navigation
	}
};
