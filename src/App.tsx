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

// create variable environnement add readme
// const httpLink = new HttpLink({ uri: process.env.BACK_URI || "https://adebray.com:4000" });
// console.log(`window.location`, window.location.host.match(/(.*):/)[1]);
const hostnameRegex = window.location.host.match(/(.*):/);
let hostname = "localhost";
if (hostnameRegex) {
  [, hostname] = hostnameRegex;
}
const httpLink = new HttpLink({ uri: process.env.BACK_URI || `http://${hostname}:4010` });

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
