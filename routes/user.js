const express = require("express");
const { getUserById, deleteUsers } = require("../controlles/user.controlles");
const isAuth = require("../middlewares/passeport-setup");

const Router = express.Router();

Router.delete("/deleteUser/:userId",isAuth(),isAdmin(),deleteUsers)

Router.get("/:userid", getUserById);

module.exports = Router;