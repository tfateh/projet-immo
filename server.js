require("dotenv").config({path:"./config/.env"});

const { Logger } = require("concurrently");
const express = require("express");
const connectDB = require("./config/connectDB");
const Products = require("./Models/Products");
const User = require("./Models/User");
const auth = require("./routes/auth");
const app = express();

app.use(express.json());

connectDB();




app.use('/auth', auth);
app.use('/user', User);
app.use('/product', Products);

app.listen(process.env.Port || process.env.port, (err)=>{
   err? console.log(`server connected failed`)
   : console.log(`server connected succefuly to port : ${process.env.Port}`)
})
