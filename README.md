# Graph QL

-   graphql
-   graphql-yoga

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
        addTest: (id) => {...}
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

### Babel + nodemon

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
    "start": "nodemon --exec babel-node src/app.js",
    "build": "babel src --out-dir build"
}
```
