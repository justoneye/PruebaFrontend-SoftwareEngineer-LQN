import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

import Home from './pages/home.js'

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://swapi.loquenecesito.co/graphql/',
    credentials: 'omit'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
);