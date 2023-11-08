var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render('index')
});

router.get("/homecss", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/stylesheets/index.css"));
});

router.get("/headercss", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/stylesheets/header.css"));
});

router.get("/maincss", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/stylesheets/main.css"));
});

router.get("/footercss", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/stylesheets/footer.css"));
});

module.exports = router;
