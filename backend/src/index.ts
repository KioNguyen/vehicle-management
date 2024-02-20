import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import 'reflect-metadata';
// import joiful from 'joiful';
import path from 'path';
import { buildSchema } from 'type-graphql';
import * as config from './config';
import Container from './containers';
import { DBDataSource } from './database/datasource';
import { QueryResolveTimeMiddleware } from './libs/middlewares/resolve-time.middleware';
import { VehicleResolver } from './presentation/verhicle.resolver';

config.setup();
DBDataSource.initialize()
  .then(async () => {
    console.log('Postgres TypeORM Database initialized');
  })
  .catch(error => console.log(error));

const globalMiddlewares = [];
if (process.env.ENV === 'DEV') {
  globalMiddlewares.push(QueryResolveTimeMiddleware);
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VehicleResolver],
    container: Container,
    emitSchemaFile: path.resolve(__dirname, './presentation/graphql/schema.graphql'),
    globalMiddlewares
  });

  const server = new ApolloServer({ schema, formatError: error => error });

  const port = parseInt(process.env.PORT || '4000');
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap().catch(console.error);
