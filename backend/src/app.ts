import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api', taskRoutes);

app.use(errorHandler);

export default app;
