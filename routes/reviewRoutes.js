const express = require("express");
const { addReview, deleteReview } = require("../controllers/reviewControllers");
const router = express.Router();

router.route("/:id").post(addReview).delete(deleteReview);

module.exports = router;
