import Fastify from "fastify";
import dotenv from "dotenv";

import modules from "./modules/index";

dotenv.config();

const PORT: number = (process.env.PORT || 3000) as number;

const server = Fastify({
  logger: true,
});

server.register(modules.basic, { prefix: "/" });
server.register(modules.auth, { prefix: "/api/auth" });

async function start() {
  try {
    await server.listen({ port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();
