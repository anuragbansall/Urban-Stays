const express = require("express");
const { signup, login, logout } = require("../controllers/authControllers");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", logout);

module.exports = router;
