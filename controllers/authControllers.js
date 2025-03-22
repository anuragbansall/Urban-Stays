const passport = require("passport");
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

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      req.flash("error", info?.message || "Invalid credentials");
      return res.redirect("/login");
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      const redirectUrl = res.locals.redirectUrl || "/listings";

      res.redirect(redirectUrl);
    });
  })(req, res, next);
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect("/listings");
  });
};

module.exports = {
  signup,
  login,
  logout,
};
