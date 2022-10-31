/* eslint-disable import/no-cycle */
import { ApolloClient, InMemoryCache, ApolloProvider, makeVar, HttpLink } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setContext } from "@apollo/client/link/context";

import App from "./App";
import Theme from "./theme/theme";

export type Visualisations = Visualisation[];

export const restaurantIdVar = makeVar(window.localStorage.getItem("restaurantId") || "");
export interface Visualisation {
  id: number;
  name: string;
}
const visualsInitialValue: Visualisations = [
  {
    id: 0,
    name: "name 1",
  },
  {
    id: 1,
    name: "name 2",
  },
  {
    id: 2,
    name: "name 3",
  },
];
export const visualVar = makeVar<Visualisations>(visualsInitialValue);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        restaurantSelected: {
          read() {
            return restaurantIdVar();
          },
        },
        // tests: {
        //   read() {
        //     return visualVar();
        //   },
        // },
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
