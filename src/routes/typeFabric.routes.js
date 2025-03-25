import { Router } from 'express';
import { createTypeFabric, updateTypeFabric, deleteTypeFabricById, getAllTypeFabric, getTypeFabricById } from '../controllers/typeFabric.controller.js';

const route = Router();

route.post('/typeFabric', createTypeFabric);

route.put('/typeFabric/:id', updateTypeFabric);

route.delete('/typeFabric/:id', deleteTypeFabricById);

route.get('/typeFabric', getAllTypeFabric);

route.get('/typeFabric/:id', getTypeFabricById);

export default route;