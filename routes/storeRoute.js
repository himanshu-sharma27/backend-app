import express from "express"
import { showProducts } from "../controllers/storeController.js";
const storeRouter = express.Router()

storeRouter.get("/",showProducts)

export {storeRouter}