import express from "express";
 import route from "./routes/productRoutes.js";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "Accueil" });
});
app.use("/products", route);
 

app.listen(PORT, () => {
console.log(`Serveur lancé sur http://localhost:${PORT}`);
});