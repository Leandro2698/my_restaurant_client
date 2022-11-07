import { gql } from "@apollo/client";

export const GET_ALL_RESTAURANTS = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      restaurants {
        id
        name
        products {
          id
        }
        turnoversRestaurant {
          id
          createdAt
          turnoverYear
        }
        sales {
          id
          id
          productId
          createdAt
          unitProductSold
        }
      }
    }
  }
`;

export const GET_ONE_RESTAURANT = gql`
  query GetRestaurant($restaurantId: ID!) {
    restaurant: getRestaurant(restaurantId: $restaurantId) {
      id
      name
    }
  }
`;
