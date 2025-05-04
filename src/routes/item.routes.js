import { Router} from 'express';
import { createItem, updateItem, deleteItemById, getAllItem, getItemById } from '../controllers/item.controller.js';

const route = Router();

route.post('/item', createItem);

route.put('/item/:id', updateItem);

route.delete('/item/:id', deleteItemById);

route.get('/item', getAllItem);

route.get('/item/:id', getItemById);

export default route;