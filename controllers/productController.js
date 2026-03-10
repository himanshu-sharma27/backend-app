import productModel from "../models/productModel.js";

const getProducts = async (req,res) => {
    const products = await productModel.find();
    res.render("products/index", {products});
};

export {getProducts};

