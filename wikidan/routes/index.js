var express = require("express");

var router = express.Router();
module.exports = router;


// logging
router.use(require("./logging"));


// serve static pages
router.use(require("./static"));

// Basic routes
router.get("/", function (request, response) {
	response.send("Homepage, booom!");
});

// Other routes
router.use("/pages", require("./pages"));


// Errors
router.use(function (error, request, response, next) {
	response.send("Error occured: " + error.message);
});

router.use(function (request, response, next) {
	response.statusCode = 404;
	response.send("4oh4 - page " + request.path + " not found :-(");
});




