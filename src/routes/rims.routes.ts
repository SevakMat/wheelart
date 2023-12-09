import express from 'express';
import { getAllRimsHandler, getRimsByInputArgsHandler } from '../controllers/rims.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);
router.post('/where', getRimsByInputArgsHandler);

export default router;
