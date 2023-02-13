import 'dotenv/config';
import expres from "express";
import cors from 'cors';

import { router } from './routes';
import db from './config/mongo'

const PORT = process.env.PORT;

const app = expres();
app.use(cors());
app.use(expres.json());
app.use(router);

db().then( () => console.log('Database connected'));
app.listen(PORT, () => console.log('Servidor corriendo en el puerto: ',PORT));
