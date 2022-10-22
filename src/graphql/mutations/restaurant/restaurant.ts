import { gql } from "@apollo/client";

export const CREATE_RESTAURANT = gql`
  mutation Mutation($createRestaurantInput: CreateRestaurant) {
    createRestaurant(createRestaurantInput: $createRestaurantInput) {
      id
    }
  }
`;
export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($restaurantId: ID!) {
    deleteRestaurant(restaurantId: $restaurantId) {
      id
    }
  }
`;
