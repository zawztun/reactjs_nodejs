var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("API is working on Express Server");
})
module.exports = router
