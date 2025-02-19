const mongoose = require("mongoose");
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/urbanStays";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;