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
	more1: "Več...",
	moreInformation1:
		"Za več informacij nas <a href='/sl/About'>kontaktirajte</a>"
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
				"Ponujamo izobraževanja v več različnih okusih za bolj ali manj izkušene. Pripravili smo vam začetni, nadaljevalni in individualni tečaj za vse ljubitelje jadranja, ki bi radi pridobili izkušnje za varno plovbo.",
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
				"Na odprtem morju, ko valovi zamajajo tla pod nogami izvemo iz kakšnega testa smo v resnici. Je vaša ekipa pripravljena sodelovati in zajadrati enotno? Pridite na teambuilding in izvedeli boste.",
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
		css: "/style/school.css",
		beginnerCourse: {
			title: "Začetni Tečaj",
			info: {
				schedule: {
					desc: "Termin",
					value: "Predvidoma ob sobotah in nedeljah"
				},
				location: {
					desc: "Lokacija Tečaja",
					value: "Slovensko morje z izhodiščem marina Izola"
				},
				shortDescription: {
					desc: "Opis",
					value:
						"Spoznavanje jadranja na 10-meterski jadrnici. Čas izvajanja je dva dni."
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "210€ na osebo"
				},
				extra: global.moreInformation1
			}
		},
		intermediateCourse: {
			title: "Nadaljevalni Tečaj",
			info: {
				schedule: {
					desc: "Termin",
					value: "Predvidoma ob sobotah in nedeljah"
				},
				location: {
					desc: "Lokacija Tečaja",
					value: "Slovensko morje z izhodiščem marina Izola"
				},
				shortDescription: {
					desc: "Opis",
					value:
						"Tečaj jadranja na 10-meterski jadrnici za že izkušene. Čas izvajanja je dva dni."
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "240€ na osebo"
				},
				extra: global.moreInformation1
			}
		},
		individualCourse: {
			title: "Individualni Tečaj",
			info: {
				schedule: {
					desc: "Termin",
					value: "Po dogovoru"
				},
				location: {
					desc: "Lokacija Tečaja",
					value: "Slovensko morje z izhodiščem marina Izola"
				},
				shortDescription: {
					desc: "Opis",
					value:
						"Učenje jadranja na 10-meterski jadrnici, krojeno po vaših željah in sposobnostih."
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "Po dogovoru"
				},
				extra: global.moreInformation1
			}
		},
		navigation
	},
	Trips: {
		layout: "main",
		title: "Jadralski Izleti",
		css: "/style/trips.css",
		fourHTrip: {
			title: "4-Urni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Po dogovoru" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "170€"
				},
				skiper: {
					value: "Skiper vključen"
				},
				extra: global.moreInformation1
			}
		},
		dailyTrip: {
			title: "1-Dnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Sobota oz. nedelja 9.00-18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
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
				},
				extra: global.moreInformation1
			}
		},
		twoDayTrip: {
			title: "2-Dnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od sobote 9.00 do nedelje 18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
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
				},
				extra: global.moreInformation1
			}
		},
		threeDayTrip: {
			title: "3-Dnevni Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od petka 9.00 do nedelje 18.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
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
				},
				extra: global.moreInformation1
			}
		},
		weeklyTrip: {
			title: "Tedenski Izlet",
			info: {
				schedule: { desc: "Termin", value: "Od sobote 15.00 do sobote 9.00" },
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
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
				},
				extra: global.moreInformation1
			}
		},
		specialTrip: {
			title: "Posebna ponudba",
			info: {
				schedule: { desc: "Termin", value: "Po dogovoru" },
				description: {
					desc: "Opis",
					value:
						"Imate idejo za jadralsko izkušnjo? Skupaj jo lahko uresničimo."
				},
				location: {
					desc: "Kraj Najema",
					value: "Slovensko morje z izhodiščem marina Izola"
				},
				boat: {
					desc: "Plovilo",
					value: "Elan 333"
				},
				price: {
					desc: "Cena",
					value: "Po dogovoru"
				},
				skiper: {
					value: "Skiper vključen"
				},
				extra: global.moreInformation1
			}
		},
		navigation
	},
	Teambuilding: {
		layout: "main",
		title: "Teambuilding",
		content: {
			p1:
				"Teambuilding bo potekal na 10-metrski jadrnici, ki sprejme do 8 ljudi vključno s skiperjem. V primeru večjega števila udeležencev, se lahko organizira dodatna jadrnica.",
			p2:
				"Organiziramo teambuilding na jadrnici za vaš delovni kolektiv. Poskrbimo, da se boste s sodelavci skozi proces jadranja in nepozabnega doživetja še bolj povezali in delovali kot skupina, ki se zaveda pomembnosti vsakega člana za doseganje ciljev na delovnem mestu.",
			p3:
				"Zberemo se ob 09.00 v marini Izola. Med samim jadranjem bo tudi čas za malico, počitek in kopanje. Vrnitev v matično marino je predvidena ob 18.00.",
			price: "Cena teambuildinga znaša 350€ na skupino."
		},
		navigation
	},
	Literature: {
		layout: "main",
		title: "Literatura",
		navigation
	}
};
