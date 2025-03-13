const User = require("../models/User");
const wrapAsync = require("../utils/wrapAsync");

const signup = wrapAsync(async (req, res) => {
  const { email, username, password } = req.body;

  const newUser = new User({
    email,
    username,
  });

  const registeredUser = await User.register(newUser, password);

  req.login(registeredUser, (err) => {
    if (err) {
      req.flash("error", "Something went wrong!");
      return res.redirect("/signup");
    }
    req.flash("success", "Welcome to Yelp Camp!");
    res.redirect("/listings");
  });
});

module.exports = {
  signup,
};
