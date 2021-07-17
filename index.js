const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");

dotenv.config();

// connect to db
const DB_DETAILS = process.env.DB_DETAILS;

mongoose.connect(
  DB_DETAILS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

// middlewares
app.use(express.json());

// add route middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));
