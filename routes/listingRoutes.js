const express = require("express");
const Listing = require("../models/listing");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const listings = await Listing.find();
    res.render("listings", { listings });
  } catch (err) {
    next(err);
  }
});

router.get("/view/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");
    res.render("listings/show", { listing });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("listings/new");
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { title, description, price, location, country } = req.body;
  try {
    const newListing = await Listing.create({
      title,
      description,
      price,
      location,
      country,
    });
    res.redirect(`/listings/view/${newListing._id}`); // Use _id instead of id
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");
    res.render("listings/edit", { listing });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, description, price, location, country, image } = req.body;
  try {
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
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
