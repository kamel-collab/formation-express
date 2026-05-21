import mongoose from "mongoose";
export async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gestion_produits_ejs");
    console.log("Connexion a MongoDB reussie");
  } catch (error) {
    console.error("Erreur de connexion a MongoDB");
    console.error(error.message);
    process.exit(1);
  }
}