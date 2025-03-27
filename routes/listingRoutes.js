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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

const router = express.Router();

router
  .route("/")
  .get(getListing)
  .post(protect, upload.single("image"), postListing);

router.route("/view/:id").get(getListingById);

router.route("/new").get(protect, createListing);

router.route("/:id/edit").get(protect, editListing);

router.route("/:id").put(protect, updateListing).delete(protect, deleteListing);

module.exports = router;
