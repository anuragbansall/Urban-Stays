require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");

// Import routes
const listingRoutes = require("./routes/listingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method")); // Use method-override for PUT and DELETE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "mySuperSecretCode",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy()); // Use the User model for authentication
passport.serializeUser(User.serializeUser()); // Serialize user data to store in session
passport.deserializeUser(User.deserializeUser()); // Deserialize user data from session to use in routes

app.engine("ejs", ejsMate);

// Pass flash messages to all routes and templates
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.user = req.user;
  next();
});

// Define routes
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Listing routes
app.use("/listings", listingRoutes);
app.use("/reviews", reviewRoutes);

// Auth routes
app.use("/", authRoutes);

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
