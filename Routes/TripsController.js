const express = require("express"),
	router = express.Router(),
	setupDataObject = require("./lib/setupDataObject");

router.get("/", (req, res) => {
	const data = {
		Trips: setupDataObject(req.data.Trips, req.originalUrl, "Trips")
	};
	res.render("trips", data.Trips);
});
module.exports = router;
