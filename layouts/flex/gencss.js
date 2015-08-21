var sass = require("node-sass");
var fs = require("fs");


sass.render({ file: "styles.scss" }, function (error, cssContent) {
	fs.writeFile("styles.css", cssContent.css.toString(), function (error) {
		if(error) return console.error(error);
		console.log("CSS generated!");
	});
});