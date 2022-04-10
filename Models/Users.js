const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email: String,
    password:String,
    phone:Number,
    adresse:String,
    role: {
        type: String,
        enum: ["admin", "client"],
        default: "client",
      },
      products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Products'
      }]
})

module.exports = mongoose.model('User',userSchema);