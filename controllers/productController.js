import productModel from "../models/productModel.js";

const getProducts = async (req,res) => {
    const products = await productModel.find();
    res.render("products/index", {products});
};

const addProduct = async (req,res) =>{
    const product = req.body;
    await productModel.create(product);//mongoose will automatically create a new document in the products collection with the data from the request body and then we will redirect to the products page to see the updated list of products
    res.redirect("/products");
};

const addProductForm = async (req,res) => {
    res.render("products/add");
};

const deleteProduct = async (req,res) => {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id);//this is a mongoose command which acts like deleteOne form mongodb
    res.redirect("/products");
};

const editProductForm = async (req,res) => {
    const id = req.params.id;
    const product = await productModel.findOne({_id: id});
    res.render("products/edit", {product});
}

const saveProduct = async (req, res) => {
    const id = req.params.id; 
    await productModel.findByIdAndUpdate(id, req.body);
    res.redirect("/products");
}

export {getProducts, addProduct, addProductForm, deleteProduct, editProductForm, saveProduct};
