const express = require("express");
const protect = require("../middlewares/authMiddleware");
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

router.get("/", getListing);

router.get("/view/:id", getListingById);

router.get("/new", protect, createListing);

router.get("/:id/edit", protect, editListing);

router.post("/", protect, postListing);

router.put("/:id", protect, updateListing);

router.delete("/:id", protect, deleteListing);

module.exports = router;
