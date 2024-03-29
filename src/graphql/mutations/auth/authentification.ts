import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: RegisterInput!) {
    registerUser(registerInput: $registerInput) {
      id
      firstname
      lastname
      email
      password
      token
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      id
      firstname
      lastname
      email
      password
      token
    }
  }
`;
