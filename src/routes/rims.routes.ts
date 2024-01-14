import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler, getRimsByCarInputArgsHandler, getAllCarsTypesHandler, getModelByCarHandler, getYearByCarHandler, getModificationsByCarHandler, getSingleRimDataHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);

router.post('/where', getRimsByInputArgsHandler);

// es vekaluma mashni tvyalnery i gnum api ic vekalum db um searcha anum beruma
router.post('/by-car', getRimsByCarInputArgsHandler);

router.get('/makes', getAllCarsTypesHandler);

router.get('/models', getModelByCarHandler);

router.get('/years', getYearByCarHandler);

router.get('/modifications', getModificationsByCarHandler);

router.post('/:id', getSingleRimDataHandler);


export default router;
