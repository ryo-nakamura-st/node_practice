const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

const p = path.join(rootDir, "data", "products.json");
module.exports = class Product {
  constructor(title, price, imgUrl, discription) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.discription = discription;
  }

  save() {
    this.id = Math.random();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log();
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(prodId, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id == prodId);
      cb(product);
    });
  }
};
