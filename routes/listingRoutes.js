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
const multer = require("multer");
const { cloudinary, storage } = require("../config/cloudConfig");
const upload = multer({ storage });

const router = express.Router();

router
  .route("/")
  .get(getListing)
  .post(protect, upload.single("image"), postListing);

router.route("/view/:id").get(getListingById);

router.route("/new").get(protect, createListing);

router.route("/:id/edit").get(protect, editListing);

router
  .route("/:id")
  .put(protect, upload.single("image"), updateListing)
  .delete(protect, deleteListing);

module.exports = router;
