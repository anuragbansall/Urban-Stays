const protect = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You need to be logged in to access this page");
    return res.redirect("/login");
  }

  next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.redirectUrl = req.session.returnTo;
    delete req.session.returnTo;
  }

  next();
};

module.exports = {
  protect,
  saveRedirectUrl,
};
