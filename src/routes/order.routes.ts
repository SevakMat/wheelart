import express from 'express';
import { getAllRimsHandler} from '../controllers/rims.controller';
import { createOrderHandler } from '../controllers/orders.controller';

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get('/all', getAllRimsHandler);


router.post('/create',createOrderHandler)


export default router;
