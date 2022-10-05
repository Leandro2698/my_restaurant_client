import { gql } from '@apollo/client';

const restaurantUser = {};

restaurantUser.GET_RESTAURANTS = gql`
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
restaurantUser.GET_PRODUCTS = gql`
      query GetRestaurant($restaurantId: ID!) {
      products: getRestaurant(restaurantId: $restaurantId) {
                products {
                  id
                  name
                  year
                  unitProductSold
                  unitSalePrice
                  turnoverProduct
                  category
                  status
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
