const Products = require('../Models/Products');
const Products = require('../Models/Products');
const Users = require ('../Models/Users');

exports.addProducts = async (req,res)=>{
console.log(req.user._id);
const newProducts = new Products({
    userId: req.user._id,
    ...req.body,
});
try {
    const product = await newProducts.save();
    const user = await Users.findOne({_id: req.user._id});
    user.product=[...user.product,newProducts.id];
    await user.save(),
    res.status(201).json({mg:'Product add succefly'});
} catch (error) {
    console.log("add product failed", error);
    res.status(403).json({ errors: [{ msg: "Add product failed" }] });
}
};

//delet Product

exports.deleteProducts = async (req, res) => {
    try {
      const Products = await Products.findOne({ _id: req.params.idProducts });
  
      if (req.user._id.equals(Products.userId)) {
        await Products.findByIdAndDelete({
          _id: req.params.idProducts,
        });
  
        res.status(203).json({ msg: "Product deleted with success" });
      }
    } catch (error) {
      console.log("Delete product failed", error);
      res.status(402).json({ errors: [{ msg: "Delete product failed" }] });
    }
  };

  //get Product By Id

  exports.getProductsById = async (req, res) => {
    try {
      const Products = await Products.findById(req.params.id);
      res.status(200).json({ msg: "Fetch product with success", Products });
    } catch (error) {
      console.log("fetch product failed", error);
      res.status(400).json({ msg: "Fetch prodcut failed" });
    }
  };

  // get all products

  exports.getAllProducts = async (req, res) => {
    try {
      const allProducts = await Products.find();
      res.status(200).json({ msg: "Fetch products with success", allProducts });
    } catch (error) {
      console.log("get ", error);
      res.status(401).json({ errors: [{ msg: "Fetch products failed" }] });
    }
  };

  // Update Product

  exports.updateProduct = async (req, res) => {
    try {
      const product = await Products.findById(req.params.idProduct);
      if (req.user._id.equals(product.userId)) {
        await Products.findByIdAndUpdate(
          { _id: req.params.idProduct },
          { $set: { ...req.body } }
        );
  
        res.status(203).json({ msg: "Product updeted with success" });
      }
    } catch (error) {
      console.log(error);
      res.status(402).json({ errors: [{ msg: "Update product failed" }] });
    }
  };
// Delete By Admin
  exports.deleteProductByAdmin = async (req, res) => {
    try {
        await Products.findByIdAndDelete({_id: req.params.idProduct,});
  
        res.status(203).json({ msg: "Product deleted successfully" });
      
    } catch (error) {
      res.status(402).json({ errors: [{ msg: "Delete product failed" }] });
    }
  };