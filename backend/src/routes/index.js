const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  return res.status(201).json({
    success: true,
    message: "sdsdsdsdasdasdasd!",
  });
});

module.exports = router