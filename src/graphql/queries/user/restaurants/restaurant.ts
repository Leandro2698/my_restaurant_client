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
        }
        sales {
          id
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query GetRestaurant($restaurantId: ID!) {
    products: getRestaurant(restaurantId: $restaurantId) {
      products {
        id
        name
        turnoverProduct
        createdAt
        unitProductSold
        unitSalePrice
        stock
        category
        status
        delivery
        omSite
      }
    }
  }
`;

export const GET_ONE_RESTAURANT = gql`
  query GetRestaurant($restaurantId: ID!) {
    data: getRestaurant(restaurantId: $restaurantId) {
      id
      name
    }
  }
`;
