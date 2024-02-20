
import express from 'express';
import { getAllRimsHandler } from '../controllers/rims.controller';
import { getSingleTireDataHandler } from '../controllers/tires.controller';

const router = express.Router();

router.get('/tire/:id', getSingleTireDataHandler);

export default router;
