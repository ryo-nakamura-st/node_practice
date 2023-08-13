const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", { path: "add-product" });
};

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const imgUrl = req.body.imgUrl;
  const discription = req.body.discription;
  const product = new Product(title, price, imgUrl, discription);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", { prods: products, path: "admin/products" });
  });
};
