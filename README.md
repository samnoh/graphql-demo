# Graph QL

-   graphql-yoga
-   mongoose
-   ES6+ syntax using babel

## TIL

### GraphQL

-   Schemas
    -   ! means a mandatory variable

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
npm install -g pm2 && npm install --save pm2
```

-   .babelrc

```JSON
{ "presets": ["@babel/preset-env"] }
```

-   package.json
    -   --copy-files -> build with non-JS files including graphql

```JSON
"scripts": {
    "start": "NODE_ENV=production pm2 start build/app.js -i 0",
    "dev": "nodemon --exec babel-node src/app.js",
    "build": "babel src --out-dir build --copy-files",
}
```

-   dotenv

```JavaScript
import 'dotenv/config'; // import dotenv at the very start
```
