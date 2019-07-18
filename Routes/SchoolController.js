const express = require("express"),
	router = express.Router(),
	setupDataObject = require("./lib/setupDataObject");

router.get("/", (req, res) => {
	const data = {
		School: setupDataObject(req.data.School, req.originalUrl, "School")
	};
	res.render("school", data.School);
});

module.exports = router;
