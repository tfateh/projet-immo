const Products = require ("../Models/Products")
const Users = require("../Models/Users")



exports.userRegister = async (req,res)=>{
  const newUser = await new Users ({...req.body}) 
  const email = req.body.email
  const Users = await Users.findOne({email})  
  try {
      if(Users) return res.status(401).json({msg:'user exist'})
      await newUser.save()
      res.status(201).json({msg:'new User Register Succefuly'})
  } catch (error) {
     res.status(402).json({msg:'Register User Failed'}) 
  }
};

exports.getAllUsers = async (req, res) => {

  try {
      const users = await Users.find();

       res.status(200).json({ msg: "Found all users" , users})
      
  } catch (error) {
    res.status(401).json({ errors: [{ msg: "Wrong page" }] });
  }
};

exports.deleteUsers = async (req,res)=>{

  const user = await Users.findOne({ _id: req.params.userId} );
    try {
      
      if(user.role === "admin") return res.status(403).json({msg:"Cant delete an admin "})
      await Users.findByIdAndDelete({_id:req.params.userId})
      await Products.deleteMany({userId:req.params.userId})
      res.status(201).json({msg:"deleted"})
      

    } catch (error) {
      res.status(401).json({ errors: [{ msg: "Not authorized" }] });
    
}
}