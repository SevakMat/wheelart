import express from "express";
import {
  getAllRimsFilters,
  getAllTiresFilters,
} from "../controllers/filters.controller";

const router = express.Router();

router.post("/all-rim-filters", getAllRimsFilters);

router.post("/all-tire-filters", getAllTiresFilters);

export default router;
