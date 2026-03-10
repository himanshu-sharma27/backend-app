import {getProducts , addProduct,addProductForm,deleteProduct,editProductForm,saveProduct} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);// This will be the route for getting all the products and rendering the products page with the products data from the database
productRouter.get("/add", addProductForm);// This will be the route for rendering the add product page where we can add a new product to the database
productRouter.post("/add", addProduct);// This will be the route for adding a new product to the database and then redirecting to the products page to see the updated list of products
productRouter.get("/:id/delete", deleteProduct);// This will be the route for deleting a product from the database and then redirecting to the products page to see the updated list of products
productRouter.get("/:id/edit",editProductForm);
productRouter.post("/:id/save",saveProduct);
export {productRouter};

