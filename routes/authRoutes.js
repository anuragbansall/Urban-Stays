const express = require("express");
const { signup, login, logout } = require("../controllers/authControllers");
const { saveRedirectUrl } = require("../middlewares/authMiddleware");
const router = express.Router();

router
  .route("/signup")
  .get((req, res) => {
    res.render("auth/signup");
  })
  .post(signup);

router
  .route("/login")
  .get((req, res) => {
    res.render("auth/login");
  })
  .post(saveRedirectUrl, login);

router.route("/logout").get(logout);

module.exports = router;
