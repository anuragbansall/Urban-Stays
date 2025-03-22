const protect = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to access this page");
    return res.redirect("/login");
  }

  next();
};

module.exports = protect;
