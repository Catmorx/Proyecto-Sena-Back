import { Router} from 'express';
import { createMadeYarn, updateMadeYarn, deleteMadeYarnById, getAllMadeYarn, getMadeYarnById } from '../controllers/madeYarn.controller.js';

const route = Router();

route.post('/madeYarn', createMadeYarn);

route.put('/madeYarn/:id', updateMadeYarn);

route.delete('/madeYarn/:id', deleteMadeYarnById);

route.get('/madeYarn', getAllMadeYarn);

route.get('/madeYarn/:id', getMadeYarnById);

export default route;