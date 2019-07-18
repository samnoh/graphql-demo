import 'dotenv/config';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';

import resolvers from './graphql/resolvers';
import connect from './models';

const prod = process.env.NODE_ENV === 'production';

const typeDefs = importSchema(path.join(__dirname, 'graphql/schema.graphql'));
const server = new GraphQLServer({ typeDefs, resolvers });

if (prod) {
    server.express.use(morgan('combined'));
} else {
    server.express.use(morgan('dev'));
}

server.start(
    {
        port: process.env.PORT || 4000,
        playground: prod ? false : '/',
        cors: cors({ origin: prod ? 'https://whatever' : true, optionsSuccessStatus: 200 })
    },
    ({ port }) => console.log(`GraphQL server running on ${port}`)
);

connect();
