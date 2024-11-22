import type { FastifyRequest, FastifyReply } from "fastify";

export function helloWorld(_request: FastifyRequest, reply: FastifyReply) {
  reply.send({ hello: "world" });
}
