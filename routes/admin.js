const express = require('express')
const isAuth = require("../middlewares/passeport-setup");
const isAdmin = require("../middlewares/admin");
const { deleteProducts, deleteProductByAdmin } = require('../controllers/products.controlls');
const { getAllUsers } = require('../controllers/user.controller');


const Router = express.Router()

//  http://localhost:9000/root/deleteProduct/:idProduct

Router.delete("/deleteProducts/:idProduct", isAuth(),isAdmin(), deleteProductByAdmin);


//  http://localhost:9000/root/getUsers

Router.get('/getUsers',isAuth(),isAdmin(),getAllUsers)


module.exports = Router