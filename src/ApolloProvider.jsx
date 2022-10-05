import React from 'react';
import {
  ApolloClient, InMemoryCache, createHttpLink, ApolloProvider,
} from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import Theme from './theme/Theme';

const httpLink = createHttpLink({
  uri: 'http://localhost:4003',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <ThemeProvider theme={Theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </ApolloProvider>
);
