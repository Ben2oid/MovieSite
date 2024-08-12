import express from "express";
import {
  getMovieById,
  getMovies,
  getTrailer,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/:id/trailer", getTrailer);

export default router;
