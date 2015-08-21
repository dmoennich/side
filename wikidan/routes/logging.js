var express = require("express");
var router = express.Router();
module.exports = router;

router.use("/", function (request, response, next) {
	var startTime = Date.now();
	response.on("finish", function () {
		var timeSpendServing = Date.now() - startTime;
		console.log(request.method, request.path, response.statusCode, timeSpendServing, "ms");
	});
	next();
});