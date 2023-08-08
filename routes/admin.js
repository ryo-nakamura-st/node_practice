const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log(rootDir);
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
