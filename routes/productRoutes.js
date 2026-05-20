import express from "express";
import { getAllproducts,getProductById ,createProduct,saveProduct} from "../controllers/productController.js";
const productRoutes = express.Router();
productRoutes.get("/", getAllproducts);
productRoutes.post("/", saveProduct);
productRoutes.get("/create", createProduct);
productRoutes.get("/:id", getProductById);

export default productRoutes;