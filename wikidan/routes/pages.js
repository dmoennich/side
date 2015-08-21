var router = require("express").Router();
var query = require("querystring");
module.exports = router;
var Page = require("../models").Page;


var bodyParser = function (request, response, next) {
	var bodyText = "";
	request.setEncoding("utf8");
	request.on("data", function (textChunk) {
		bodyText += textChunk;
	});
	request.on("end", function () {
		var body = query.parse(bodyText);
		console.dir(body);
		request.body = body;
		next();
	});
};


router.use(bodyParser);


router.get("/add", function (request, response) {
	response.render("addpage");
});

router.post("/", function (request, response, next) {

	var pageValues = {
		content: request.body.content,
		title: request.body.title
	};

	var page = new Page(pageValues);
	page.save().then(function (savedPage) {
		response.send("Page saved!" + JSON.stringify(savedPage));
	}).then(null, next);

});


router.get("/:urlTitle", function (request, response, next) {
	var urlTitle = request.params.urlTitle;
	Page.findOne({urlTitle: urlTitle}).exec().then(function (page) {
		if (!page) {
			return next();
		}
		console.log("the page:", page);
		response.render("page", {page: page});
	}).then(null, function (error) {
		next(error);
	});

});






