import { gql } from '@apollo/client';

const getRestaurantsUser = {};

getRestaurantsUser.MY_RESTAURANTS = gql`
      query GetUsers($userId: ID!) {
        getUser(userId: $userId) {
          restaurants {
            id
            name
            description
            address
            city
            country
            create_at
            status
            employees {
              id
            }
            products {
              id
            }
            turnoversYears {
              id
            }
          } 
        }
      }
`;

export default getRestaurantsUser;
