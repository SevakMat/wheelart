import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler, getRimsByCarInputArgsHandler, getAllCarsHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);
router.post('/where', getRimsByInputArgsHandler);

router.post('/by-car', getRimsByCarInputArgsHandler);

router.get('/all-cars', getAllCarsHandler);

export default router;
