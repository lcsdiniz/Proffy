import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)

const connectionsController = new ConnectionsController();

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;