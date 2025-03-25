import { Router} from 'express';
import { createCategory, updateCategory, deleteCategoryById, getAllCategory, getCategoryById } from '../controllers/category.controller.js';

const route = Router();

route.post('/category', createCategory);

route.put('/category/:id', updateCategory);

route.delete('/category/:id', deleteCategoryById);

route.get('/category', getAllCategory);

route.get('/category/:id', getCategoryById);

export default route;