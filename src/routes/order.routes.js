import { Router} from 'express';
import { createOrder, updateOrder, deleteOrderById, getAllOrder, getOrderById, deleteOrderByIdItem } from '../controllers/order.controller.js';

const route = Router();

route.post('/order', createOrder);

route.put('/order/:id', updateOrder);

route.delete('/order/:id', deleteOrderById);
route.delete('/orderItem/:id', deleteOrderByIdItem);
 
route.get('/order', getAllOrder);

route.get('/order/:id', getOrderById);

export default route;