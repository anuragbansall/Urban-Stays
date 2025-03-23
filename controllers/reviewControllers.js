const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");
const joi = require("joi");
const ExpressError = require("../utils/ExpressError");

// Joi Schema for Review Validation
const joiSchema = joi.object({
  comment: joi.string().required(),
  rating: joi.number().min(1).max(5).required(),
});

// Validate Review Data
const validateReview = (data, req, res) => {
  const { error } = joiSchema.validate(data);
  if (error) {
    req.flash("error", error.details.map((err) => err.message).join(", "));
    return res.redirect("back");
  }
};

// Add a Review
const addReview = wrapAsync(async (req, res) => {
  const listingId = req.params.id;
  const { comment, rating } = req.body;
  const owner = req.user._id;

  validateReview(req.body, req, res);

  const listing = await Listing.findById(listingId);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  if (listing.owner.equals(req.user._id)) {
    req.flash("error", "You cannot review your own listing");
    return res.redirect(`/listings/view/${listingId}`);
  }

  const review = new Review({
    comment,
    rating,
    listing: listingId,
    owner,
  });
  await review.save();

  listing.reviews.push(review);
  await listing.save();

  req.flash("success", "Review added successfully");
  res.redirect(`/listings/view/${listingId}`);
});

// Delete a Review
const deleteReview = wrapAsync(async (req, res) => {
  const reviewId = req.params.id;
  const review = await Review.findById(reviewId).populate("listing");

  if (!review || !review.listing) {
    req.flash("error", "Review not found");
    return res.redirect("/listings");
  }

  if (!review.owner.equals(req.user._id)) {
    req.flash("error", "You can only delete your own review");
    return res.redirect(`/listings/view/${review.listing._id}`);
  }

  const listing = await Listing.findById(review.listing._id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  await Review.findByIdAndDelete(reviewId);
  listing.reviews.pull(reviewId);
  await listing.save();

  req.flash("success", "Review deleted successfully");
  res.redirect(`/listings/view/${listing._id}`);
});

module.exports = {
  addReview,
  deleteReview,
};
