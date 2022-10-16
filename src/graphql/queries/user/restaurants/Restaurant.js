import { gql } from '@apollo/client';

const restaurantUser = {};

restaurantUser.GET_RESTAURANTS = gql`
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
        isRestaurantSelected @client
      
      }
    } 
  }
`;
restaurantUser.GET_PRODUCTS = gql`
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
restaurantUser.GET_RESTAURANT = gql`
      query GetRestaurant($restaurantId: ID!) {
       data: getRestaurant(restaurantId: $restaurantId) {
             id
             name

  }
}
`;

export default restaurantUser;
