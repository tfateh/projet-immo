const express= require('express')
const { userRegister } = require('../controlles/user.controlles')


const Router = express.Router()

Router.post('/register',userRegister)

module.exports = Router;