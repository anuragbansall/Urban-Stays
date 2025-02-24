const express = require("express");
const { addReview } = require("../controllers/reviewControllers");
const router = express.Router();

router.post("/:id", addReview);

module.exports = router;
