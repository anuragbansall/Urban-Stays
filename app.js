const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Listing = require("./models/listing");

connectDB();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/testListings", async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
