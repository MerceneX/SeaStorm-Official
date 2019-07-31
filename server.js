const express = require("express"),
	app = express(),
	path = require("path"),
	routes = require("./Routes/DefaultController"),
	hbs = require("express-handlebars"),
	favicon = require("express-favicon"),
	secure = require("express-force-https");

app.use(secure);
app.use("/style", express.static(__dirname + "/Views/res/styles"));
app.use("/img", express.static(__dirname + "/Views/res/img"));
app.set("views", __dirname + "/Views");

app.set("view engine", "hbs");
app.engine(
	"hbs",
	hbs({
		extname: "hbs",
		defaultLayout: "main",
		layoutsDir: __dirname + "/Views/layouts",
		partialsDir: __dirname + "/Views/partials/"
	})
);
const supportedLocales = ["sl"];

app.use(favicon(__dirname + "/Views/res/img/favicon.gif"));
app.use("/:locale", routes);
app.param("locale", (req, res, next) => {
	if (supportedLocales.includes(req.params.locale)) {
		req.data = require(`./Views/res/lang/${req.params.locale}.js`);
	} else {
		res.redirect("/sl");
	}
	next();
});
app.get("*", (req, res) => {
	res.redirect("/sl");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
