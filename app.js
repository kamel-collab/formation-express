import express from "express";

import { connectDB } from "./config/database.js";
 
import pageRoutes from "./routes/pageRoutes.js";
import productRoutes from "./routes/productRoutes.js";
 
const app = express();
const PORT = 3000;
 
app.set("view engine", "ejs");
 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
 
app.use("/", pageRoutes);
app.use("/products", productRoutes);
 
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page introuvable"
  });
});
 

async function startServer() {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`Serveur lance sur http://localhost:${PORT}`);
  });
}
 
startServer();


 
