import { Router } from 'express';
import { createBankDetails, updateBankDetails, deleteBankDetailsById, getAllBankDetails, getBankDetailsById } from '../controllers/bankDetails.controller.js';

const route = Router();

route.post('/bankDetails', createBankDetails);

route.put('/bankDetails/:id', updateBankDetails);

route.delete('/bankDetails/:id', deleteBankDetailsById);

route.get('/bankDetails', getAllBankDetails);

route.get('/bankDetails/:id', getBankDetailsById);

export default route;