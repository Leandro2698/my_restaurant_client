import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($restaurantId: ID!) {
    getProducts(restaurantId: $restaurantId) {
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
        totalSales
      }
      category
      status
      delivery
      omSite
    }
  }
`;
export const GET_ONE_PRODUCT = gql`
  query GetProduct($restaurantId: ID!, $productId: ID!) {
    getProduct(restaurantId: $restaurantId, productId: $productId) {
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
        totalSales
      }
      category
      status
      delivery
      omSite
    }
  }
`;
