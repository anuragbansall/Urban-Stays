const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");

const addReview = wrapAsync(async (req, res) => {
  const listingId = req.params.id;
  const { comment, rating } = req.body;

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

module.exports = {
  addReview,
};
