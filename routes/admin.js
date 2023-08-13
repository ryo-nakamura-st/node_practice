const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

const adminController = require("../controllers/admin");
const { isModuleNamespaceObject } = require("util/types");

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProducts);

module.exports = router;
