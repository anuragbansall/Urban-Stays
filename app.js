const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
