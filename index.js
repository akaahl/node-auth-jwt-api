const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// connect to db
const DB_DETAILS = process.env.DB_DETAILS;

mongoose.connect(DB_DETAILS, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

// import routes
const authRoute = require("./routes/auth");

// add route middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));
