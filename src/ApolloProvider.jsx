/* eslint-disable import/no-cycle */
import React from 'react';
import {
  ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, makeVar,
} from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { setContext } from 'apollo-link-context';
import App from './App';
import Theme from './theme/Theme';

export const restaurantIdVar = makeVar(window.localStorage.getItem('restaurantId'));

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        restaurantSelected: {
          read() {
            return restaurantIdVar();
          },
        },
      },
    },
  },
  Character: {
    fields: {
      isRestaurantSelected: {
        read(_, { readField }) {
          const restaurantId = readField('id');
          const restaurantSelected = restaurantIdVar();
          return restaurantSelected.includes(restaurantId);
        },
      },
    },
  },
});
const httpLink = createHttpLink({
  uri: 'http://localhost:4004',
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
export default (
  <ApolloProvider client={client}>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
