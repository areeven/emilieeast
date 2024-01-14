import express from 'express';
import {notFound} from './middlewares/Middleware'
import configuration from './configuration/configuration';
import ApplyMiddlewares from './configuration/ApplyMiddlewares';

export const app = express();

ApplyMiddlewares(app);
app.use(notFound);

configuration.connectPort(app);
configuration.connectDb().then();