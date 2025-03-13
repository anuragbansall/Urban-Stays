const express = require("express");
const { signup } = require("../controllers/authControllers");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", signup);

module.exports = router;
