const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    typeOfTransaction:String,
    description:String,
    price:Number,
    area:Number,
    adresseProduct:String,
    dateOfCreactionProduct: {
        type: Date,
        default: Date.now(),
      },

});

module.exports = mongoose.model("Product",productShema);