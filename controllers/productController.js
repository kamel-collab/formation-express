

import { products } from "../data/products.js";
export function getAllproducts(req, res)  {
  res.render("products", { title: "products", products: products });
}

export function getProductById(req, res)  {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId); 
  if (product) {
    res.render("productDetail", { title: product.name, product: product });
  } else {
    res.status(404).send("Produit non trouvé");
  }     
} 
export function createProduct(req, res)  {
  res.render("createProduct", { title: "Create Product" });
}
export function saveProduct(req, res)  {
  //recuperer les donnée
  console.log(req.body);
  
  const { name, price } = req.body;
  //verifier les donnée 
  if (!name || !price) {
    res.status(400).send("Veuillez remplir tous les champs");
    return;
  }
  //enregistrer le produit
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: parseFloat(price)
  };
  products.push(newProduct);
  res.redirect("/products");
}