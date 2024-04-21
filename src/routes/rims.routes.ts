import express from "express";
import {
  getAllRimsHandler,
  getRimsByCarInputArgsHandler,
  getCarsMakeHandler,
  getSingleRimDataHandler,
  getCarDatailsHandler,
  getPopularRimsDataHandler,
} from "../controllers/rims.controller";

const router = express.Router();

router.get("/all", getAllRimsHandler);

router.get("/makes", getCarsMakeHandler);

router.post("/rim/:id", getSingleRimDataHandler);

router.get("/rim/popular-rims", getPopularRimsDataHandler);

// es vekaluma mashni tvyalnery i gnum api ic vekalum db um searcha anum beruma
router.post("/by-car", getRimsByCarInputArgsHandler);

router.post("/car-details", getCarDatailsHandler);

export default router;
