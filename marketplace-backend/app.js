require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

mongoose
  .connect("mongodb://heroku_xmjgnm0h:tkrhq4atgoon5ksq8l177t9tnu@ds343718.mlab.com:43718/heroku_xmjgnm0h", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(
  cors({
    // credentials: true,
    origin: ["http://localhost:3001", "http://online-marketplace.s3-website.eu-west-2.amazonaws.com"]
    // Vary: "Origin" // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
app.use("/", index);
app.use("/api", require("./routes/group-routes"));
app.use("/api", require("./routes/product-routes"));
app.use("/api", require("./routes/productGroup-routes"));
app.use("/api", require("./routes/purchase-routes"));
app.use("/api", require("./routes/user-routes"));
app.use("/api", require("./routes/vendor-routes"));

module.exports = app;
