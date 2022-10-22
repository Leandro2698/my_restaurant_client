/* eslint-disable import/no-cycle */
import { AuthProvider } from "./context/authContext";
import Router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;