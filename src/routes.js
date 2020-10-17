import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';
import UserController from './app/controllers/UserController';

import authMiddlewares from './app/middlewares/auth';

const routes = Router();

routes.get('/', (request, response) => {
  return response.status(200).json('Welcome to the TaskList API');
});

routes.post('/user', UserController.store);
routes.post('/login', SessionController.login);

routes.use(authMiddlewares);

routes.delete('/user', UserController.delete);

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.index);
routes.get('/task/:taskId', TaskController.show);
routes.put('/task/:taskId', TaskController.update);
routes.delete('/task/:taskId', TaskController.delete);

export default routes;
