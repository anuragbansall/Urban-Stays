require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// Import routes
const listingRoutes = require("./routes/listingRoutes");

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method")); // Use method-override for PUT and DELETE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("ejs", ejsMate);

// Error handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

// Define routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Use the listing routes
app.use("/listings", listingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
