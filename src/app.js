import 'dotenv/config';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';

import resolvers from './graphql/resolvers';
import connect from './models';

connect();

const typeDefs = importSchema(path.join(__dirname, 'graphql', 'schema.graphql'));

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: process.env.PORT || 4000, playground: false }, ({ port }) =>
    console.log(`GraphQL server running on localhost:${port}`)
);
