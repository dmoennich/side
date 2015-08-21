var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	first: {type: String, required: true},
	last: {type: String, required: true},
	age: {type: Number},
	email: {type: String, required: true}
});


// userSchema.statics.findOrCreate = function (props) {
//   var self = this;
//   return self.findOne({email: props.email}).exec().then(function(user){
//     if (user) return user;
//     else return self.create({
//       email: props.email,
//       name:  props.name
//     });
//   });
// };

userSchema.statics.findDan = function () {
	return this.findOne({first: "Daniel"}).exec();
};

var User = mongoose.model("User", userSchema);


module.exports = User;