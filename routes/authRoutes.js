const express = require("express");
const { signup, login, logout } = require("../controllers/authControllers");
const { saveRedirectUrl } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/signup", signup);

router.post("/login", saveRedirectUrl, login);

router.get("/logout", logout);

module.exports = router;
