import type { FastifyRequest, FastifyReply } from 'fastify';
import type { UserCreate } from '../../types/Auth';

import AuthService from './auth.service';

class AuthController {
  async register(
    request: FastifyRequest<{ Body: UserCreate }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const body = request.body;

      const user = await AuthService.register(body);

      return reply.code(201).send(user);
    } catch (error: unknown) {
      console.error(error);
      return reply.code(500).send(error);
    }
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({ hello: 'world' });
    } catch (error: unknown) {}
  }
  async logout(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({ hello: 'world' });
    } catch (error: unknown) {}
  }
  async activate(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({ hello: 'world' });
    } catch (error: unknown) {}
  }
  async refresh(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({ hello: 'world' });
    } catch (error: unknown) {}
  }
  async getUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.send({ hello: 'world' });
    } catch (error: unknown) {}
  }
}

export default new AuthController();
