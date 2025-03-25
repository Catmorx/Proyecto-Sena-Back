import { Router} from 'express';
import { createBloodType, updateBloodType, deleteBloodTypeById, getAllBloodType, getBloodTypeById } from '../controllers/bloodType.controller.js';

const route = Router();

route.post('/bloodType', createBloodType);

route.put('/bloodType/:id', updateBloodType);

route.delete('/bloodType/:id', deleteBloodTypeById);

route.get('/bloodType', getAllBloodType);

route.get('/bloodType/:id', getBloodTypeById);

export default route;