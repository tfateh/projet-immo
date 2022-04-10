const express = require("express");
const {
  addProducts,
  deleteProducts,
  getProductsById,
  getAllProducts,
  updateProduct,
} = require("../controlles/products.controlls");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

//  http://localhost:9000/product/addProduct
// add product

Router.post("/addProduct", isAuth(), addProducts);

//  http://localhost:9000/product/updateProduct/:idProduct
// update Product
Router.put("/updateProduct/:idProduct", isAuth(), updateProduct);

//  http://localhost:9000/product/deleteProduct/:idProduct
// delete Product

Router.delete("/deleteProduct/:idProduct", isAuth(), deleteProducts);

//  http://localhost:9000/product/products
//getAllProducts
Router.get("/products", isAuth(), getAllProducts);

//  http://localhost:9000/product/:id
// get Product by id

Router.get("/:id", getProductsById);

module.exports = Router;