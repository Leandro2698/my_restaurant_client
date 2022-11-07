/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";
import { AuthProps, User } from "../layouts/mainLayout/types";
import { AuthContextType, InitialState, MyToken, ActionReducerType } from "./types";
import { restaurantIdVar } from "../ApolloProvider";

const initialState: InitialState = {
  user: null,
};
if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode<MyToken>(localStorage.getItem("jwtToken") || "");

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (_userData: User) => {},
  logout: () => {},
});

function authReducer(state: any, action: ActionReducerType) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props: AuthProps) {
  const [state, dispach] = useReducer(authReducer, initialState);
  function login(userData: User) {
    localStorage.setItem("jwtToken", userData.token);
    dispach({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {
    dispach({ type: "LOGOUT" });
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("restaurantId");
    restaurantIdVar("");
  }

  return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />;
}

export { AuthContext, AuthProvider };
