// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
// const formidableMiddleware = require('express-formidable');

const rcaller = require("./rcaller");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(formidableMiddleware({
  encoding: 'utf-8',
  uploadDir: __dirname + '/uploads',
  // multiples: true, 
}));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome" });
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/task1", (req, res) => {
  res.render("task1", { title: "Visualization", uploaded: false });
});

app.get("/task1/:id", function (req, res) {
  var ID = req.params.id;
  rcaller(1, ID);
  res.render("task1", { title: "Visualization", uploaded: true, ID });
});

app.get("/task1/download/:id", function (req, res) {
  var ID = req.params.id;
  res.download("uploads/" + ID + ".jpg");
});

app.post("/task1", (req, res) => {
  var filename = path.basename(req.files.upload.path);
  req.params = {"id": filename};
  res.redirect("/task1/" + filename);
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});