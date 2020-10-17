import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/user', UserController.store);
routes.get('/', (request, response) => {
  return response.status(200).json('Welcome to the TaskList API');
});

export default routes;
