import express from 'express';
import { createRimHandler, deleteRimHandler, getAllRimsHandler, getRimByIdHandler, updateRimHandler } from '../../controllers/admin/rims/adminRims.controller';

const router = express.Router();

// Route to get all rims
router.get('/all', getAllRimsHandler);

// Route to get a rim by ID
router.get('/:id', getRimByIdHandler);

// Route to update a rim by ID
router.put('/:id', updateRimHandler);

// Route to delete a rim by ID
router.delete('/:id', deleteRimHandler);

// Route to create a new rim
router.post('/create', createRimHandler);

export default router;
