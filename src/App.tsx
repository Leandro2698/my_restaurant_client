import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/authContext";
import Router from "./routes/Router";
import Theme from "./theme/theme";
import { restaurantIdVar } from "./reactiveVars";

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

const httpLink = new HttpLink({ uri: process.env.BACK_URI || "https://adebray.com:4000" });

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
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
