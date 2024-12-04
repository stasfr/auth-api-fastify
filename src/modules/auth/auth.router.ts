import type { FastifyInstance, FastifyPluginOptions } from 'fastify';

import AuthController from './auth.controller';

function authRoutes(server: FastifyInstance, _options: FastifyPluginOptions) {
  server.post('/register', AuthController.register);

  server.post('/login', AuthController.login);

  server.post('/logout', AuthController.logout);

  server.get('/activate/:link', AuthController.activate);

  server.get('/refresh', AuthController.refresh);

  server.get('/users', AuthController.getUsers);
}

export default authRoutes;
