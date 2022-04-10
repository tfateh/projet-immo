const Users = require("../models/User");



const isAdmin = () => async (req,res,next)=>{
    const user = await Users.findOne({ _id: req.user._id } );
          if (user.role !== "admin") {
            return res.status(403).send({error: { status:403, message:'not Access.'}});
          }
          next();
  
}

module.exports = isAdmin