import { Router} from 'express';
import { createTypeTax, updateTypeTax, deleteTypeTaxById, getAllTypeTax, getTypeTaxById } from '../controllers/typeTax.controller.js';

const route = Router();

route.post('/typeTax', createTypeTax);

route.put('/typeTax/:id', updateTypeTax);

route.delete('/typeTax/:id', deleteTypeTaxById);

route.get('/typeTax', getAllTypeTax);

route.get('/typeTax/:id', getTypeTaxById);

export default route;