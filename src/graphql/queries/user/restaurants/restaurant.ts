import { gql } from "@apollo/client";

export const GET_ALL_RESTAURANTS = gql`
  query GetRestaurantsUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      firstname
      restaurants {
        id
        name
        products {
          id
          name
          unitSalePrice
          turnoversProductMonth {
            id
            income
            month
            day
            year
            sales
          }
          turnoversProductYear {
            id
            createdAt
            turnoverYear
            totalSales
          }
          category
          status
          # stock
          # delivery
          # omSite
        }
        turnoversRestaurantYear {
          id
          createdAt
          turnoverYear
          totalSales
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
      products {
        id
        name
        unitSalePrice
        stock
        turnoversProductMonth {
          id
          income
          day
          month
          year
          sales
        }
        turnoversProductYear {
          id
          createdAt
          turnoverYear
        }
        category
        status
        delivery
        omSite
      }
      turnoversRestaurantYear {
        id
        createdAt
        turnoverYear
        totalSales
      }
    }
  }
`;
