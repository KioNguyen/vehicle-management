import './config';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { schema } from './schema';
import { AppDataSource } from './data-source';

const app = express();
const httpServer = http.createServer(app);



const server = new ApolloServer({
  schema: schema,
  introspection: true,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});

AppDataSource.initialize().then(async () => {
  console.log("Postgres TypeORM Database initialized");
}).catch(error => console.log(error));

(async () => {
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async () => ({ dataSource: AppDataSource })
    })
  );
})();


const corsOptions: cors.CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const port = Number.parseInt(process.env.PORT) || 8000;

new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));
console.log(`🚀 Server listening at: ${port}`);






