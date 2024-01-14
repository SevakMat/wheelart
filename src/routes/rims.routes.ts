import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler, getRimsByCarInputArgsHandler, getAllCarsTypesHandler, getModelByCarHandler, getYearByCarHandler, getModificationsByCarHandler, getSingleRimDataHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);

router.post('/where', getRimsByInputArgsHandler);

// return car makes
router.get('/makes', getAllCarsTypesHandler);

// return car models
router.get('/models', getModelByCarHandler);

// return car models
router.get('/years', getYearByCarHandler);

// return car modifications
router.get('/modifications', getModificationsByCarHandler);

// es ashxatuma palyubomu
router.post('/rim/:id', getSingleRimDataHandler);

// es vekaluma mashni tvyalnery i gnum api ic vekalum db um searcha anum beruma
router.post('/by-car', getRimsByCarInputArgsHandler);


export default router;
