var mongoose = require("mongoose");


var pageSchema = mongoose.Schema({
	title: { type: String, required: true },
	urlTitle: {type: String, required: true},
	content: { type: String, required: true},
	created: { type: Date, default: Date.now}
});

// create route virtual
pageSchema.virtual("route").get(function () {
	return "/pages" + this.urlTitle;
});

function generateUrlTitle (title) {
  if (typeof title !== 'undefined' && title !== '') {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2, 7);
  }
}

//create pre hook for urlTitle
pageSchema.pre("validate", function (next) {
	this.urlTitle = generateUrlTitle(this.title);
	next();
});


var Page = mongoose.model("Page", pageSchema);

module.exports = Page;
