import type { FastifyInstance, FastifyPluginOptions } from "fastify";

import { helloWorld } from "./basic.controller";

function basicRoutes(fastify: FastifyInstance, _options: FastifyPluginOptions) {
  fastify.get("/", helloWorld);
}

export default basicRoutes;
