require("dotenv").config({path:"./config/.env"});

const express = require("express");
const connectDB = require("./config/connectDB");
const auth = require("./routes/auth");
const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', auth)

app.listen(process.env.Port || process.env.port, (err)=>{
   err? console.log(`server connected failed`)
   : console.log(`server connected succefuly to port : ${process.env.Port}`)
})
