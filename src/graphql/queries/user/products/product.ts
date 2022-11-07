import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($restaurantId: ID!) {
    getProducts(restaurantId: $restaurantId) {
      id
      name
      createdAt
      unitSalePrice
      stock
      category
      status
      delivery
      omSite
      sales {
        id
        createdAt
        unitProductSold
      }
      turnoversProduct {
        id
        createdAt
        turnoverYear
      }
    }
  }
`;
export const GET_ONE_PRODUCT = gql`
  query GetProduct($restaurantId: ID!, $productId: ID!) {
    getProduct(restaurantId: $restaurantId, productId: $productId) {
      id
      name
      category
      createdAt
      status
      turnoversProduct {
        id
        createdAt
        turnoverYear
      }
      unitSalePrice
      stock
      delivery
      omSite
      sales {
        id
        createdAt
        unitProductSold
      }
    }
  }
`;
