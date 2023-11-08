var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("home/index");
});

router.get("/product", function (req, res, next) {
  res.render("product/index");
});

router.get("/categories", function (req, res, next) {
  res.render("categories/index");
});

router.get("/store", function (req, res, next) {
  res.render("store/index");
});

router.get("/checkout", function (req, res, next) {
  res.render("checkout/index");
});
module.exports = router;
