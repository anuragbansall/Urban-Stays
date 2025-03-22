const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Joi = require("joi");
const ExpressError = require("../utils/ExpressError");

const joiSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().allow("", null),
  price: Joi.number().min(1).required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
});

const validateListing = (data) => {
  const { error } = joiSchema.validate(data);
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
};

const getListing = wrapAsync(async (req, res, next) => {
  const listings = await Listing.find();
  res.render("listings", { listings });
});

const getListingById = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  await listing.populate("reviews");

  res.render("listings/show", { listing });
});

const createListing = (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("listings/new");
  }
  req.flash("error", "You need to be logged in to create a listing");
  res.redirect("/login");
};

const postListing = wrapAsync(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to create a listing");
    return res.redirect("/login");
  }

  const { title, description, price, location, country } = req.body;

  validateListing(req.body);

  const newListing = await Listing.create({
    title,
    description,
    price,
    location,
    country,
  });

  if (!newListing) {
    req.flash("error", "Failed to create listing");
    throw new ExpressError(500, "Failed to create listing");
  }

  req.flash("success", "Listing created successfully");

  res.redirect(`/listings/view/${newListing._id}`);
});

const editListing = wrapAsync(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to edit a listing");
    return res.redirect("/login");
  }

  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  res.render("listings/edit", { listing });
});

const updateListing = wrapAsync(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to edit a listing");
    return res.redirect("/login");
  }

  const { id } = req.params;
  const { title, description, price, location, country, image } = req.body;

  validateListing(req.body);

  const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedListing) {
    throw new ExpressError(404, "Listing not found");
  }

  req.flash("success", "Listing updated successfully");

  res.redirect(`/listings/view/${updatedListing._id}`);
});

const deleteListing = wrapAsync(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to delete a listing");
    return res.redirect("/login");
  }

  const { id } = req.params;

  const deletedListing = await Listing.findByIdAndDelete(id);

  if (!deletedListing) {
    throw new ExpressError(404, "Listing not found");
  }

  req.flash("success", "Listing deleted successfully");

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
