const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");

const getListing = wrapAsync(async (req, res, next) => {
  const listings = await Listing.find();
  res.render("listings", { listings });
});

const getListingById = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);
  if (!listing) return res.status(404).send("Listing not found");
  res.render("listings/show", { listing });
});

const createListing = (req, res) => {
  res.render("listings/new");
};

const postListing = wrapAsync(async (req, res, next) => {
  const { title, description, price, location, country } = req.body;

  const newListing = await Listing.create({
    title,
    description,
    price,
    location,
    country,
  });
  res.redirect(`/listings/view/${newListing._id}`); // Use _id instead of id
});

const editListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) return res.status(404).send("Listing not found");
  res.render("listings/edit", { listing });
});

const updateListing = wrapAsync(async (req, res, next) => {
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
});

const deleteListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

module.exports = {
  getListing,
  getListingById,
  createListing,
  postListing,
  editListing,
  updateListing,
  deleteListing,
};
