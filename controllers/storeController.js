import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    const products = await productModel.find();
    res.render("store/products",{products})
}

export {showProducts}