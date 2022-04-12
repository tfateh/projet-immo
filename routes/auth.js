const express = require("express");
const { userRegister, userLogin } = require("../controlles/auth.controlles");
const isAuth = require("../middlewares/passeport-setup");
const { registerRules, loginRules,validator } = require("../middlewares/validator");

const Router = express.Router();

// POST register user
// POST  "http://localhost:9000/auth/register"
// @desc  : user register

Router.post("/register",registerRules(),validator,userRegister);

// POST login user
// POST  "http://localhost:9000/auth/login"
// @desc  : user login

Router.post("/login",loginRules(),validator, userLogin);

// GET currentUser
// GET "http://localhost:9000/auth/currentUser"
// @desc get authenticated user

Router.get("/currentUser", isAuth(), (req, res) => {
  res.send(req.user);
});

module.exports = Router;