var express = require("express");
var router = express.Router();
var cors = require("cors");

/* GET home page. */
router.post("/", cors(), function (req, res, next) {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

module.exports = router;
