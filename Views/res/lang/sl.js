const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: { name: "Šola Jadranja", link: "/sl" },
	strips: { name: "Jadralski Izleti", link: "/sl" },
	tbuild: { name: "Teambuilding", link: "/sl" },
	slit: { name: "Literatura", link: "/sl" },
	about: { name: "O Nas", link: "/sl/about" },
	language: { name: "Language" }
};

module.exports = {
	Home: {
		layout: "main",
		title: "Domov",
		css: "/style/homepage.css",
		navigation,
		heading1: "Doživite z nami",
		expo1: "Šola Jadranja",
		expo2: "Jadralski Izleti",
		expo3: "Teambuilding"
	},
	About: {
		layout: "main",
		title: "O Nas",
		navigation
	}
};
