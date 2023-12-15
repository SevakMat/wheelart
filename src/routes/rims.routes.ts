import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler, getRimsByCarInputArgsHandler, getAllCarsTypesHandler, getModelByCarHandler, getYearByCarHandler, getModificationsByCarHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);

router.post('/where', getRimsByInputArgsHandler);

// es vekaluma mashni tvyalnery i gnum api ic vekalum db um searcha anum beruma
router.post('/by-car', getRimsByCarInputArgsHandler);

router.get('/all-cars', getAllCarsTypesHandler);

router.get('/all-models', getModelByCarHandler);

router.get('/all-years', getYearByCarHandler);

router.get('/all-modifications', getModificationsByCarHandler);



export default router;
