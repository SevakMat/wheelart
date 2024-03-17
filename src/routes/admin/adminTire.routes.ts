import express from 'express';
import { createTireHandler, deleteTireHandler, getAllTiresHandler, getTireByIdHandler, updateTireHandler } from '../../controllers/admin/tires/adminTires.controller';

const router = express.Router();

// Route to get all tires
router.get('/all', getAllTiresHandler);

// Route to create a new tire
router.post('/create', createTireHandler);

// Route to get a tire by ID
router.get('/:id', getTireByIdHandler);

// Route to update a tire by ID
router.put('/:id', updateTireHandler);

// Route to delete a tire by ID
router.delete('/:id', deleteTireHandler);

export default router;
