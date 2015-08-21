var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();
module.exports = router;


router.get("/:fileName", function (request, response, next) {
	var fileName = request.params.fileName;
	var filePath = path.join(__dirname + "/../public/" + fileName);
	console.log("Requested static file: " + filePath);
	fs.readFile(filePath, {encoding: "utf8"}, function (error, content) {
		if(error) return next();
		response.send(content);
	});
});