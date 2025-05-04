import { Router} from 'express';
import { createTechnicalData, updateTechnicalData, deleteTechnicalDataById, getAllTechnicalData, getTechnicalDataById } from '../controllers/technicalData.controller.js';

const route = Router();

route.post('/technicalData', createTechnicalData);

route.put('/technicalData/:id', updateTechnicalData);

route.delete('/technicalData/:id', deleteTechnicalDataById);

route.get('/technicalData', getAllTechnicalData);

route.get('/technicalData/:id', getTechnicalDataById);

export default route;