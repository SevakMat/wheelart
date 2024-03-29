import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler, getRimsByCarInputArgsHandler, getCarsTypesHandler, getSingleRimDataHandler, getCarDatailsHandler, getPopularRimsDataHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);

router.post('/where', getRimsByInputArgsHandler);

// return car makes
router.get('/makes', getCarsTypesHandler);

// // return car models
// router.get('/models', getModelByCarHandler);

// // return car models
// router.get('/years', getYearByCarHandler);

// // return car modifications
// router.get('/modifications', getModificationsByCarHandler);

router.post('/rim/:id', getSingleRimDataHandler);

router.get('/rim/popular-rims', getPopularRimsDataHandler);

// es vekaluma mashni tvyalnery i gnum api ic vekalum db um searcha anum beruma
router.post('/by-car', getRimsByCarInputArgsHandler);

router.post('/car-details', getCarDatailsHandler);



export default router;
