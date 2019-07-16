# Graph QL

-   graphql
-   graphql-yoga

## TIL

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
