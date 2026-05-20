import express from "express";
 import productRoutes from "./routes/productRoutes.js";
 import pageRoutes from "./routes/pageRoutes.js";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRoutes);
app.use("/products", productRoutes);


app.listen(PORT, () => {
console.log(`Serveur lancé sur http://localhost:${PORT}`);
});