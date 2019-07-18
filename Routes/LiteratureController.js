const express = require("express"),
	router = express.Router(),
	setupDataObject = require("./lib/setupDataObject");

router.get("/", (req, res) => {
	const data = {
		Literature: setupDataObject(
			req.data.Literature,
			req.originalUrl,
			"Literature"
		)
	};
	res.render("literature", data.Literature);
});

module.exports = router;
