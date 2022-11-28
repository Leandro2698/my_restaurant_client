import { gql } from "@apollo/client";

export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant($createRestaurantInput: CreateRestaurant!) {
    createRestaurant(createRestaurantInput: $createRestaurantInput) {
      _id
      name
    }
  }
`;
export const UPDATE_RESTAURANT = gql`
  mutation UpdateRestaurant($restaurantId: ID!, $createRestaurantInput: CreateRestaurant!) {
    updateRestaurant(restaurantId: $restaurantId, createRestaurantInput: $createRestaurantInput) {
      _id
      name
    }
  }
`;
export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($restaurantId: ID!) {
    deleteRestaurant(restaurantId: $restaurantId) {
      _id
    }
  }
`;
