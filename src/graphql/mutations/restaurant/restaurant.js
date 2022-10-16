import { gql } from '@apollo/client';

const restaurant = {};

restaurant.CREATE_RESTAURANT = gql`
      mutation Mutation($createRestaurantInput: CreateRestaurant) {
  createRestaurant(createRestaurantInput: $createRestaurantInput) {
    id
  }
}
`;
restaurant.DELETE_RESTAURANT = gql`
      mutation DeleteRestaurant($restaurantId: ID!) {
  deleteRestaurant(restaurantId: $restaurantId) {
    id
  }
}
`;
export default restaurant;
