const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex((p) => p.id === id);

      existingProductIndex !== -1
        ? cart.products[existingProductIndex].qty++
        : cart.products.push({ id, qty: q });

      cart.totalPrice += productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }
};
