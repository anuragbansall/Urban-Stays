const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");
const joi = require("joi");
const ExpressError = require("../utils/ExpressError");

const joiSchema = joi.object({
  comment: joi.string().required(),
  rating: joi.number().min(1).max(5).required(),
});

const validateReview = (data) => {
  const { error } = joiSchema.validate(data);
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
};

const addReview = wrapAsync(async (req, res) => {
  const listingId = req.params.id;
  const { comment, rating } = req.body;

  validateReview(req.body);

  const listing = await Listing.findById(listingId);
  if (!listing) {
    return res.status(404).send("Listing not found");
  }

  const review = new Review({ comment, rating, listing: listingId });
  await review.save();
  listing.reviews.push(review);
  await listing.save();

  res.redirect(`/listings/view/${listingId}`);
});

const deleteReview = wrapAsync(async (req, res) => {
  const reviewId = req.params.id;
  const review = await Review.findById(reviewId);

  if (!review) return res.status(404).send("Review not found");

  const listing = await Listing.findById(review.listing);
  if (!listing) return res.status(404).send("Listing not found");

  await Review.findByIdAndDelete(reviewId);
  listing.reviews.pull(reviewId);
  await listing.save();

  res.redirect(`/listings/view/${listing._id}`);
});

module.exports = {
  addReview,
  deleteReview,
};
