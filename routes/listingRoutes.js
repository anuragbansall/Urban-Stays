const express = require("express");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get(
  "/",
  wrapAsync(async (req, res, next) => {
    const listings = await Listing.find();
    res.render("listings", { listings });
  })
);

router.get(
  "/view/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");
    res.render("listings/show", { listing });
  })
);

router.get("/new", (req, res) => {
  res.render("listings/new");
});

router.post(
  "/",
  wrapAsync(async (req, res, next) => {
    console.log(req.body);
    const { title, description, price, location, country } = req.body;

    const newListing = await Listing.create({
      title,
      description,
      price,
      location,
      country,
    });
    res.redirect(`/listings/view/${newListing._id}`); // Use _id instead of id
  })
);

router.get(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");
    res.render("listings/edit", { listing });
  })
);

router.put(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const { title, description, price, location, country, image } = req.body;

    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        location,
        country,
        image,
      },
      { new: true }
    );
    res.redirect(`/listings/view/${updatedListing._id}`);
  })
);

router.delete(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

module.exports = router;
