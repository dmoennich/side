var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mymong");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
//db.once ...
module.exports = {
	User: require("./user"),
	Hobby: require("./hobbies"),
};