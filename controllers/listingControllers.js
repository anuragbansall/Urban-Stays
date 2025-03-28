const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Joi = require("joi");
const ExpressError = require("../utils/ExpressError");

const joiSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().allow("", null),
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

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
      },
    })
    .populate("owner");

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  res.render("listings/show", { listing });
});

const createListing = (req, res) => {
  return res.render("listings/new");
};

const postListing = wrapAsync(async (req, res, next) => {
  const { title, description, price, location, country, image } = req.body;
  const owner = req.user._id;

  validateListing(req.body);

  const newListing = await Listing.create({
    title,
    description,
    price,
    location,
    country,
    owner,
    image: {
      url: req.file.path,
      filename: req.file.filename,
    },
  });

  if (!newListing) {
    req.flash("error", "Failed to create listing");
    throw new ExpressError(500, "Failed to create listing");
  }

  req.flash("success", "Listing created successfully");

  res.redirect(`/listings/view/${newListing._id}`);
});

const editListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  if (!listing.owner.equals(req.user._id)) {
    req.flash("error", "You do not have permission to edit this listing");
    return res.redirect(`/listings/view/${listing._id}`);
  }

  res.render("listings/edit", { listing });
});

const updateListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, price, location, country, image } = req.body;

  validateListing(req.body);

  const updatedListing = await Listing.findById(id);

  if (!updatedListing) {
    throw new ExpressError(404, "Listing not found");
  }

  if (!updatedListing.owner.equals(req.user._id)) {
    req.flash("error", "You do not have permission to edit this listing");
    return res.redirect(`/listings/view/${updatedListing._id}`);
  }

  await Listing.findByIdAndUpdate(id, {
    title,
    description,
    price,
    location,
    country,
    image: {
      url: req.file ? req.file.path : updatedListing.image.url,
      filename: req.file ? req.file.filename : updatedListing.image.filename,
    },
  });

  req.flash("success", "Listing updated successfully");

  res.redirect(`/listings/view/${updatedListing._id}`);
});

const deleteListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  const deletedListing = await Listing.findById(id);

  if (!deletedListing) {
    throw new ExpressError(404, "Listing not found");
  }

  if (!deletedListing.owner.equals(req.user._id)) {
    req.flash("error", "You do not have permission to delete this listing");
    return res.redirect(`/listings/view/${deletedListing._id}`);
  }

  await deletedListing.deleteOne();

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
