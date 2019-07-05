const express = require("express"),
	app = express(),
	path = require("path"),
	routes = require("./Routes/DefaultController"),
	hbs = require("express-handlebars"),
	favicon = require("serve-favicon");

app.use("/style", express.static(__dirname + "/Views/res/styles"));
app.use("/img", express.static(__dirname + "/Views/res/img"));
app.set("views", __dirname);

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
app.use(favicon(__dirname + "/Views/res/img/favicon.svg"));
app.use("/:locale", routes);
app.param("locale", (req, res, next) => {
	req.data = require(`./Views/res/lang/${req.params.locale}.js`);
	next();
});
app.get("*", (req, res) => {
	res.redirect("/sl");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
