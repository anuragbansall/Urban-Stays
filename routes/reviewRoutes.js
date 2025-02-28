const express = require("express");
const { addReview, deleteReview } = require("../controllers/reviewControllers");
const router = express.Router();

router.post("/:id", addReview);

router.delete("/:id", deleteReview);

module.exports = router;
