import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

import Home from './pages/home.js'

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql.org/swapi-graphql/'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
);