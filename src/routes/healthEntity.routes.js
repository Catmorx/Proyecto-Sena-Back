import { Router} from 'express';
import { createHealthEntity, updateHealthEntity, deleteHealthEntityById, getAllHealthEntity, getHealthEntityById } from '../controllers/healthEntity.controller.js';

const route = Router();

route.post('/healthEntity', createHealthEntity);

route.put('/healthEntity/:id', updateHealthEntity);

route.delete('/healthEntity/:id', deleteHealthEntityById);

route.get('/healthEntity', getAllHealthEntity);

route.get('/healthEntity/:id', getHealthEntityById);

export default route;