import express from 'express';
import { createOrderHandler, deleteOrderHandler, getAllOrdersHandler, getOrderByIdHandler, getUserOrdersListHandler, updateOrderHandler, } from '../../controllers/admin/orders/adminOrders.controller';

const router = express.Router();

// Route to create a new order
router.post('/create', createOrderHandler);

// Route to get user's orders list
router.get('/user/:id', getUserOrdersListHandler);

// Route to get all orders
router.get('/all', getAllOrdersHandler);

// Route to get an order by ID
router.get('/:id', getOrderByIdHandler);

// Route to update an order by ID
router.put('/:id', updateOrderHandler);

// Route to delete an order by ID
router.delete('/:id', deleteOrderHandler);

export default router;
