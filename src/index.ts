import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const PORT: number = (process.env.PORT || 3000) as number;

const server = Fastify({
  logger: true,
});

server.get("/", async (request, reply) => {
  return { hello: "world" };
});

async function start() {
  try {
    await server.listen({ port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();
