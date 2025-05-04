// // import 'dotenv/config.js';
import express from 'express';
import routeAdress from './src/routes/adress.routes.js';
import routeRol from './src/routes/rol.routes.js';
import routeBankDetails from './src/routes/bankDetails.routes.js';
import routeBloodType from './src/routes/bloodType.routes.js';
import routeCatalog from './src/routes/catalog.routes.js';
import routeCategory from './src/routes/category.routes.js';
import routeEconomyActivity from './src/routes/economyActivity.routes.js';
import routeEntity from './src/routes/entity.routes.js';
import routeHealthEntity from './src/routes/healthEntity.routes.js';
import routeItem from './src/routes/item.routes.js';
import routeItemType from './src/routes/itemType.routes.js';
import routeMadeYarn from './src/routes/madeYarn.routes.js';
import routeOrder from './src/routes/order.routes.js';
import routePaymentMethod from './src/routes/paymentMethod.routes.js';
import routeTechnicalData from './src/routes/technicalData.routes.js';
import routeTypeFabric from './src/routes/typeFabric.routes.js';
import routeTypeTax from './src/routes/typeTax.routes.js';
import { PORT, pool } from './src/config/config.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routeAdress);
app.use('/api', routeBankDetails);
app.use('/api', routeBloodType);
app.use('/api', routeCatalog);
app.use('/api', routeCategory);
app.use('/api', routeEconomyActivity);
app.use('/api', routeEntity);
app.use('/api', routeHealthEntity);
app.use('/api', routeItem);
app.use('/api', routeItemType);
app.use('/api', routeMadeYarn);
app.use('/api', routeOrder);
app.use('/api', routePaymentMethod);
app.use('/api', routeRol);
app.use('/api', routeTechnicalData);
app.use('/api', routeTypeFabric);
app.use('/api', routeTypeTax);
try {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el HOST ${PORT}`);
    });
} catch (error) {
    console.log(error);
}

export default app