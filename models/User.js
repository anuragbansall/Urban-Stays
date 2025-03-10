const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  // username and password will be added by passport-local-mongoose
});

userSchema.plugin(passportLocalMongoose);

module.exports = new mongoose.model("User", userSchema);
