const navigation = {
	home: { name: "Domov", link: "/sl" },
	sschool: {
		name: "Šola Jadranja",
		link: "/sl/School",
		dropdown: [
			{ name: "Začetni Tečaj", link: "/sl" },
			{ name: "Nadaljevalni Tečaj", link: "/sl" },
			{ name: "Individualni Tečaj", link: "/sl" }
		]
	},
	strips: {
		name: "Jadralski Izleti",
		link: "/sl/Trips",
		dropdown: [
			{ name: "4-urni Izlet", link: "/sl" },
			{ name: "1-dnevni Izlet", link: "/sl" },
			{ name: "2-dnevni Izlet", link: "/sl" },
			{ name: "3-dnevni Izlet", link: "/sl" },
			{ name: "Tedenski Izlet", link: "/sl" }
		]
	},
	tbuild: { name: "Teambuilding", link: "/sl/Teambuilding" },
	slit: {
		name: "Literatura",
		link: "/sl/Literature",
		dropdown: [
			{ name: "Navigacija", link: "/sl" },
			{ name: "Manevriranje", link: "/sl" },
			{ name: "Vzdrževanje", link: "/sl" }
		]
	},
	about: { name: "O Nas", link: "/sl/About" },
	language: { name: "Language" }
};

const meta = {};

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
				"Ponujamo izobraževanja v več različnih okusih za bolj, manj in neizkušene. Pripravili smo vam začetni, nadaljevalni in individualni tečaj za vse ljubitelje športa, ki bi se radi v njem sami poskusili.",
			more: global.more1
		},
		expo2: {
			title: "Jadralski Izleti",
			text:
				"Doživetje jadranja je nekaj prav posebnega, kratko ali dolgotrajno tvori nepozabne spomine. Zato ponujamo časovno prilagodljive izlete, katerih se boste spominjali še dolgo in veseli o nijh pripovedovali prijateljem.",
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
		css: "/style/about.css",
		content: {
			p1:
				"Sem Jure Srše, velik navdušenec nad morjem in jadranjem. Z lepotami in nevarnostmi morja sem se srečeval že od mladih nog. " +
				"Sprva sem pridobil znanje plovbe z motornim čolnom. Po končani srednji šoli je sledila logična odločitev za vpis na Fakulteto za pomorstvo in promet smer Navtika. " +
				"V času študija sem imel možnost učenja jadranja na šolski regatni jadrnici Solaria, s katero smo se udeležili tudi regat po Sloveniji.",
			p2:
				"Po diplomiranju sem se vpisal na podiplomski študij smer Pomorski sistemi, kjer sem še poglobil svoje znanje o pomorstvu.",
			p3:
				"Leto dni sem nabiral izkušnje iz pomorstva na tovorni ladji oceanske plovbe kot častnik v pripravništvu. Pridobil sem številna znanja iz mornarskih veščin, " +
				"komunikacijskih, navigacijskih naprav, terestrične in astronomske navigacije, delo v kolektivu. Po končanem pripravništvu sem naredil izpit za Častnika krovne straže. " +
				"Nekaj časa sem se aktivno udeleževal regat na slovenski in hrvaški obali. Nato se mi je ponudila priložnost zaposlitve kot Častniku krovne straže na motorni jahti Esmeralda; " +
				"kjer sem prav tako delal eno leto. Med samim delom na jahti se mi je ponudila priložnost zaposlitve na Fakulteti za pomorstvo in promet. " +
				"Priložnost sem izkoristil in postal asistent na področju pomorstva, kjer sem še danes."
		},
		contactInfo: {
			title: "Kontakt",
			name: {
				description: "Ime in Priimek",
				value: "asist. Jure Srše, mag. inž. pom."
			},
			address: {
				description: "Naslov",
				value: "Plečnikova 2 a; 3000 Celje"
			},
			phone: {
				description: "Mobitel",
				value: "070/729-903"
			},
			email: {
				description: "E-Mail",
				value: "info@seastorm-sailing.com"
			},
			website: {
				description: "Spletna Stran",
				value: "www.seastorm-sailing.com"
			}
		},
		navigation
	},
	School: {
		layout: "main",
		title: "Šola Jadranja",
		navigation
	},
	Trips: {
		layout: "main",
		title: "Jadralski Izleti",
		css: "/style/trips.css",
		dailyTrip: {
			title: "Enodnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Sobota oz. nedelja 9.00-18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "290€"
				},
				skiper: {
					value: "Skiper vključen"
				}
			}
		},
		twoDayTrip: {
			title: "Dvodnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od sobote 9.00 do nedelje 18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "530€"
				},
				skiper: {
					value: "Skiper vključen"
				}
			}
		},
		threeDayTrip: {
			title: "Trodnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od petka 9.00 do nedelje 18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "790€"
				},
				skiper: {
					value: "Skiper vključen"
				}
			}
		},
		weeklyTrip: {
			title: "Tedenski Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od sobote 15.00 do sobote 9.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "1880€"
				},
				skiper: {
					value: "Skiper vključen"
				}
			}
		},
		navigation
	},
	Teambuilding: {
		layout: "main",
		title: "Teambuilding",
		navigation
	},
	Literature: {
		layout: "main",
		title: "Literatura",
		navigation
	}
};
