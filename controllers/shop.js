const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "/",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Home",
      path: "/",
    });
  });
};

exports.getProduct = (req, res, next) => {
  prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", { product: product });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    prods: "Products",
    pageTitle: "Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(product.id, product.price);
  });
  res.redirect("shop/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    prods: "products",
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
