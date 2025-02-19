const express = require("express");
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

router.get("/new", createListing);

router.post("/", postListing);

router.get("/:id/edit", editListing);

router.put("/:id", updateListing);

router.delete("/:id", deleteListing);

module.exports = router;
