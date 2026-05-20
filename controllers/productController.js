
const products = [
  { id: 1, name: "Clavier mécanique", price: 8500 },
  { id: 2, name: "Souris sans fil", price: 3200 },
  { id: 3, name: "Écran 24 pouces", price: 28000 }
];

export function getAllproducts(req, res)  {
  res.render("products", { title: "products", products: products });
}