import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import * as serviceWorker from './serviceWorker';
import App from './App';

const cache = new InMemoryCache().writeData({ data: defaults });

const client = new ApolloClient({
  uri: 'http://localhost:9000/.netlify/functions/graphql' || 'https://tripster-apollo.netlify.com/.netlify/functions/graphql', // TODO: NEED TO BE ENV SPECIFIC
  cache,
  resolvers,
  typeDefs
});

client
  .query({
    query: gql`
      {
        isLoggedIn
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);

serviceWorker.register();
