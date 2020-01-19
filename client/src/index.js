import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";
// import { gql } from "apollo-boost";
import * as serviceWorker from './serviceWorker';
import App from './App';

const cache = new InMemoryCache();

cache.writeData({
  data: defaults
});

const client = new ApolloClient({
  uri: 'https://tripster-apollo.netlify.com/.netlify/functions/graphql',
  cache,
  resolvers,
  typeDefs
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);

serviceWorker.register();
