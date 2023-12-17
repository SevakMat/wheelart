import express from 'express';
import { getAllFilters } from '../controllers/filters.controller';

const router = express.Router();

router.post('/all-filters', getAllFilters);

export default router;
