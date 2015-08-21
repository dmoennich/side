var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wikidan");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var Page = require("./pages");

module.exports = {
	Page: Page
};









