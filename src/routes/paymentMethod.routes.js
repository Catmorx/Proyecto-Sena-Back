import { Router} from 'express';
import { createPaymentMethod, updatePaymentMethod, deletePaymentMethodById, getAllPaymentMethod, getPaymentMethodById } from '../controllers/paymentMethod.controller.js';

const route = Router();

route.post('/paymentMethod', createPaymentMethod);

route.put('/paymentMethod/:id', updatePaymentMethod);

route.delete('/paymentMethod/:id', deletePaymentMethodById);

route.get('/paymentMethod', getAllPaymentMethod);

route.get('/paymentMethod/:id', getPaymentMethodById);

export default route;