const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(201).json({
    success: true,
    message: "Successfull!",
  });
});

module.exports = router