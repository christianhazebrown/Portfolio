var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
   res.render("index" , {title: "home"});
});

router.get("/about", function (req, res) {
   res.render("about", {title: "about"});
});

module.exports = router;