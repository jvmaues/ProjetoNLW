import express from 'express';
import cors from 'cors';
import path from 'path';


import routes from './routes';

 const app = express();

 app.use(cors());
 app.use(express.json());
 app.use(routes);

 //essa função do express serve para lidar com arquivos estáticos dda aplicação
 app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

 app.listen(3300);