import productModel from "../models/productModel.js";

const getProducts = async (req,res) => {
    const products = await productModel.find();
    res.render("products/index", {products});
};

const addProduct = async (req,res) =>{
    const product = req.body;
    await productModel.create(product);
    res.redirect("/products");
};

const addProductForm = async (req,res) => {
    res.render("products/add");
};

export {getProducts, addProduct, addProductForm};
