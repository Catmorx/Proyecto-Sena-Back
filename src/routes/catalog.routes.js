import { Router} from 'express';
import { createCatalog, updateCatalog, deleteCatalogById, getAllCatalog, getCatalogById } from '../controllers/catalog.controller.js';

const route = Router();

route.post('/catalog', createCatalog);

route.put('/catalog/:id', updateCatalog);

route.delete('/catalog/:id', deleteCatalogById);

route.get('/catalog', getAllCatalog);

route.get('/catalog/:id', getCatalogById);

export default route;