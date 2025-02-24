require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// Import routes
const listingRoutes = require("./routes/listingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const ExpressError = require("./utils/ExpressError");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method")); // Use method-override for PUT and DELETE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("ejs", ejsMate);

// Define routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Listing routes
app.use("/listings", listingRoutes);
app.use("/reviews", reviewRoutes);

// Page not found error handler
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("error", { status, message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
