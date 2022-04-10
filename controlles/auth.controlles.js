const Users = require('../Models/Users');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

exports.userRegister = async (req,res)=>{
    const newUser = await new Users({...req.body});
    const email = newUser.email;
try {
    const user = await Users.findOne({ email });
    if (user) return res.status(402).json({ msg: "User already exist" });

    const payload = {
        id: newUser._id,
        fullName:newUser.fullName,
        email:newUser.email,
        phone:newUser.phone,
        adresse:newUser.adresse,


    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    newUser.save();
    res.status(202).json({ msg: "Register success", token: `Bearer ${token}` });

} catch (error) {
    console.log(error);
    res.status(402).json({ msg: "User register failed", errors: error });
}
};
// user log
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

    if (!user) return res.status(402).json({ msg: "Bad credentiels" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(402).json({ msg: "Bad credentiels" });

    const payload = {
        id: newUser._id,
        fullName:newUser.fullName,
        email:newUser.email,
        phone:newUser.phone,
        adresse:newUser.adresse,
    };
    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);
    res.status(201).json({ token: `Bearer ${token}` });   
    } catch (error) {
        res.status(401).json({ errors: error });  
    }
};
