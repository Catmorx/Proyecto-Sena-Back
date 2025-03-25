import { Router} from 'express';
import { createItemType, updateItemType, deleteItemTypeById, getAllItemType, getItemTypeById } from '../controllers/itemType.controller.js';

const route = Router();

route.post('/itemType', createItemType);

route.put('/itemType/:id', updateItemType);

route.delete('/itemType/:id', deleteItemTypeById);

route.get('/itemType', getAllItemType);

route.get('/itemType/:id', getItemTypeById);

export default route;