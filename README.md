# Graph QL

-   graphql-yoga
-   mongoose

## TIL

### GraphQL

-   Schemas
    -   ! means required

```graphql
# import Test from 'test.graphql'

type Query {
    tests: [Test]!
}

type Mutation {
    addTest(text: String!): Test
}
```

-   Resolvers

```JavaScript
const resolvers = {
    Query: {
        tests: () => {...}
    },
    Mutation: {
        addTest: (_, { id }) => {...}
    }
}
```

-   GraphQL Server

```JavaScript
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema(path.join(__dirname, 'graphql', 'schema.graphql'));
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('GraphQL server running on localhost:4000'));
```

-   Requests

```graphql
Query {
    Test {
        text
    }
}
```

```graphql
Mutation {
    addTest(text: "Hello") {
        text
    }
}
```

### Babel + nodemon + pm2

-   Install

```Shell
npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env nodemon
```

-   .babelrc

```JSON
{ "presets": ["@babel/preset-env"] }
```

-   package.json

```JSON
"scripts": {
    "start": "NODE_ENV=production pm2 start --interpreter babel-node src/app.js -i 0",
    "dev": "nodemon --exec babel-node src/app.js"
}
```

-   dotenv

```JavaScript
import 'dotenv/config'; // import dotenv at the very start
```
