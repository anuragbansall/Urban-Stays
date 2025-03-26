const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getListing,
  getListingById,
  createListing,
  postListing,
  editListing,
  updateListing,
  deleteListing,
} = require("../controllers/listingControllers");
const router = express.Router();

router.route("/").get(getListing).post(protect, postListing);

router.route("/view/:id").get(getListingById);

router.route("/new").get(protect, createListing);

router.route("/:id/edit").get(protect, editListing);

router.route("/:id").put(protect, updateListing).delete(protect, deleteListing);

module.exports = router;
