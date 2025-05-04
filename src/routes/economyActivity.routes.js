import { Router } from 'express';
import { createEconomyActivity, updateEconomyActivity, deleteEconomyActivityById, getAllEconomyActivity, getEconomyActivityById } from '../controllers/economyActivity.controller.js';

const route = Router();

route.post('/economyActivity', createEconomyActivity);

route.put('/economyActivity/:id', updateEconomyActivity);

route.delete('/economyActivity/:id', deleteEconomyActivityById);

route.get('/economyActivity', getAllEconomyActivity);

route.get('/economyActivity/:id', getEconomyActivityById);

export default route;