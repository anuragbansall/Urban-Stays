const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const { data } = require("./data/initialData");
const Listing = require("./models/listing");

async function init() {
  try {
    await connectDB();

    await Listing.deleteMany({});
    await Listing.create(data);

    console.log("Test listings created successfully");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed.");
  }
}

init();
