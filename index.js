const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const authRoutes = require("./routes/authRoutes");
const postRoute = require("./routes/posts");

dotenv.config();

// connect to db
const DB_DETAILS = process.env.DB_DETAILS;

mongoose
  .connect(DB_DETAILS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("server up and running");
  })
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(express.static("public"));

// set view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home", { title: "Homepage" }));
app.get("/tutorials", (req, res) =>
  res.render("tutorials", { title: "Tutorials" })
);

// add route middleware
app.use("/api/user", authRoute);
app.use("/api/user/posts", postRoute);
app.use("/", authRoutes);
