const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/checkout", shopController.getCheckout);
router.get("/products/:productId", shopController.getProduct);

module.exports = router;
