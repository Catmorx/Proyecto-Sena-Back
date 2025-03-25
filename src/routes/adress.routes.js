import { Router } from 'express';
import { createAdress, updateAdress, deleteAdressById, getAllAdress, getAdressById } from '../controllers/adress.controller.js';

const route = Router();

route.post('/adress', createAdress);

route.put('/adress/:id', updateAdress);

route.delete('/adress/:id', deleteAdressById);

route.get('/adress', getAllAdress);

route.get('/adress/:id', getAdressById);

export default route;