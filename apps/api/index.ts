import Express, { type Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = Express();

app.use(Express.json());
app.use(cors());

import { router as mailerRouter } from './routes/mailer';

app.use('/mailer', mailerRouter);

app.listen(3000, () => console.log('Server started on port 3000'));