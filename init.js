const mongoose = require("mongoose");
const connectDB = require("./config/db");
const { data } = require("./data/initialData");
const Listing = require("./models/listing");

connectDB();

// Create some test listings
async function createTestListings() {
  try {
    await Listing.deleteMany({});
    await Listing.create(data);
    console.log("Test listings created successfully");
  } catch (err) {
    console.error(err);
  }
}

createTestListings();