const mongoose = require("mongoose");
const Review = require("./review");

const listingSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/046/952/344/large_2x/empty-state-data-not-found-illustration-free-vector.jpg",
    set: (value) =>
      !value
        ? "https://static.vecteezy.com/system/resources/previews/046/952/344/large_2x/empty-state-data-not-found-illustration-free-vector.jpg"
        : value,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)(\?.*)?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid image URL!`,
    },
  },

  price: {
    type: Number,
    required: true,
    min: [1, "Price must be at least 1"],
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Review.deleteMany({ listing: listing._id });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
