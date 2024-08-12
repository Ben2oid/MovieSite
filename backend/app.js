import express from "express";
import "dotenv/config";
import { connectMongoDb } from "./src/index.js";
import movieRoutes from "./src/routes/movieRoutes.js";

export const app = express();
app.use(express.json());

connectMongoDb();

app.use("/api/movies", movieRoutes);
