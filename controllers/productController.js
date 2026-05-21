
import Product from "../models/Product.js";
import mongoose from "mongoose";


export async function getAllproducts(req, res)  {
  //recuperer les rpoduit depuis mongo
  const products = await Product.find();

  res.render("products", { title: "products", products: products });
}

export function getProductById(req, res)  {
/*  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId); 
  if (product) {
    res.render("productDetail", { title: product.name, product: product });
  } else {
    res.status(404).send("Produit non trouvé");
  }   */  
} 
export function createProduct(req, res)  {
res.render("createProduct", { title: "Create Product" });
}
export async function saveProduct(req, res)  {
//rcuperer les champ du formulaire
  const { name, price } = req.body;
//creer lenregitrment mongo db
await Product.create({ name, price });

//redirection vers la page de listage des produits
res.redirect("/products");
}