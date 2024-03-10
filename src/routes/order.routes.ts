import express from 'express';
import { getAllRimsHandler} from '../controllers/rims.controller';
import { createOrderHandler, getUserOrdersListHandler } from '../controllers/orders.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);


router.post('/create',createOrderHandler)
router.get('/orders/:id',getUserOrdersListHandler)


export default router;
