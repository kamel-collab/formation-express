import express from 'express';
import { getAllProducts, getProductById, searchProducts } from '../controllers/productController.js';
const route = express.Router();

route.get('/products', getAllProducts);
route.get('/products/:id', getProductById);
route.get('/search', searchProducts);