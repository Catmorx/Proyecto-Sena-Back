import { Router } from 'express';
import { createEntity, updateEntity, deleteEntityById, getAllEntity, getEntityById } from '../controllers/entity.controller.js';

const route = Router();

route.post('/entity', createEntity);

route.put('/entity/:id', updateEntity);

route.delete('/entity/:id', deleteEntityById);

route.get('/entity', getAllEntity);

route.get('/entity/:id', getEntityById);

export default route;