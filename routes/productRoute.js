import {getProducts} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);// This will be the route for getting all the products and rendering the products page with the products data from the database

export {productRouter};