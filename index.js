const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

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
app.use("/api/user/posts", postRoute);

app.listen(3000, () => console.log("Server up and running"));
