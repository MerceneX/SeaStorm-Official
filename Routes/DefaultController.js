const express = require("express"),
	router = express.Router(),
	school = require("./SchoolController"),
	trips = require("./TripsController"),
	teambuilding = require("./TeambuildingController"),
	literature = require("./LiteratureController"),
	setupDataObject = require("./lib/setupDataObject");

router.use("/School", school);
router.use("/Trips", trips);
router.use("/Teambuilding", teambuilding);
//router.use("/Literature", literature);

router.get("/", (req, res) => {
	const data = {
		Home: setupDataObject(req.data.Home, req.originalUrl, "Home")
	};
	res.render("homepage", data.Home);
});

router.get("/About", (req, res) => {
	const data = {
		About: setupDataObject(req.data.About, req.originalUrl, "About")
	};
	res.render("about", data.About);
});

module.exports = router;
