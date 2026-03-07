import productModel from "../models/productModel.js";

const showProducts = (req,res) => {
    res.render("store/products",{products:productModel})
}

export {showProducts}