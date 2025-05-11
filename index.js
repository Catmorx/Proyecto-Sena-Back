// // import 'dotenv/config.js';
import express from 'express';
import routeAdress from './src/routes/adress.routes.js';
import routeBloodType from './src/routes/bloodType.routes.js';
import routeEconomyActivity from './src/routes/economyActivity.routes.js';
import routeEntity from './src/routes/entity.routes.js';
import routeHealthEntity from './src/routes/healthEntity.routes.js';
import routeItem from './src/routes/item.routes.js';
import routeOrder from './src/routes/order.routes.js';
import routePaymentMethod from './src/routes/paymentMethod.routes.js';
import Login from './src/routes/login.routes.js';
import routeTechnicalData from './src/routes/technicalData.routes.js';
import { PORT, pool, frontUrl } from './src/config/config.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: frontUrl
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routeAdress);
app.use('/api', routeBloodType);
app.use('/api', routeEconomyActivity);
app.use('/api', routeEntity);
app.use('/api', routeHealthEntity);
app.use('/api', routeItem);
app.use('/api', routeOrder);
app.use('/api', routePaymentMethod);
app.use('/api', routeTechnicalData);
app.use('/api', Login);

try {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el HOST ${PORT}`);
    });
} catch (error) {
    console.log(error);
}

export default app