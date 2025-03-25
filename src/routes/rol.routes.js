import { Router} from 'express';
import { createRol, updateRol, deleteRolById, getAllRol, getRolById } from '../controllers/rol.controller.js';

const route = Router();

route.post('/rol', createRol);

route.put('/rol/:id', updateRol);

route.delete('/rol/:id', deleteRolById);

route.get('/rol', getAllRol);

route.get('/rol/:id', getRolById);

export default route;