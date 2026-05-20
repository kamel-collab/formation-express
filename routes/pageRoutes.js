import express from "express";
import { homePage } from "../controllers/pageController.js";
const pageRoutes = express.Router();
pageRoutes.get("/", homePage);

export default pageRoutes;