var express = require("express");
var apiRoute = require("./apiRoutes.js");
var htmlRoute = require("./htmlRoutes.js");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))


app.use("/api", apiRoute);
app.use("/", htmlRoute);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});