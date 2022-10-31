/* eslint-disable import/no-cycle */
import { ApolloClient, InMemoryCache, ApolloProvider, makeVar, HttpLink } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setContext } from "@apollo/client/link/context";

import App from "./App";
import Theme from "./theme/theme";

export const restaurantIdVar = makeVar(window.localStorage.getItem("restaurantId") || "");

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
});
const httpLink = new HttpLink({ uri: "http://localhost:4004" });

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `${token}` : "",
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
