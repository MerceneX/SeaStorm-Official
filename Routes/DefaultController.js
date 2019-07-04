const express = require("express"),
	router = express.Router();

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
	res.render("About", data.About);
});
function setupDataObject(data, url, active) {
	data.current = url.substring(4);
	data.active = { [active]: true };
	return data;
}
module.exports = router;
