import { gql } from '@apollo/client';

const authentification = {};

authentification.REGISTER_USER = gql`
      mutation RegisterUser($registerInput: RegisterInput)
      {
        registerUser(
          registerInput: $registerInput
        ) {
            firstname
            lastname
            email
            password
            token
          }

      }
`;
authentification.LOGIN_USER = gql`
      mutation LoginUser($loginInput: LoginInput)
      {
        loginUser(
          loginInput: $loginInput
        ) {
            id
            firstname
            lastname
            email
            password
            token
          }

      }
`;
export default authentification;
