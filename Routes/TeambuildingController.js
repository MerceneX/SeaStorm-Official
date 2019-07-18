const express = require("express"),
	router = express.Router(),
	setupDataObject = require("./lib/setupDataObject");

router.get("/", (req, res) => {
	const data = {
		Teambuilding: setupDataObject(
			req.data.Teambuilding,
			req.originalUrl,
			"Teambuilding"
		)
	};
	res.render("teambuilding", data.Teambuilding);
});

module.exports = router;
