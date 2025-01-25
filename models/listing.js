const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/046/952/344/large_2x/empty-state-data-not-found-illustration-free-vector.jpg",
    set: (value) =>
      !value
        ? "https://static.vecteezy.com/system/resources/previews/046/952/344/large_2x/empty-state-data-not-found-illustration-free-vector.jpg"
        : value,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/.test(v);
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
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
