import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($restaurantId: ID!, $createProductInput: CreateProduct!) {
    createProduct(restaurantId: $restaurantId, createProductInput: $createProductInput) {
      _id
      name
      products {
        id
        name
        unitSalePrice
        stock
        turnoversProductMonth {
          id
          income
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
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($restaurantId: ID!, $productId: ID!, $updateProductInput: UpdateProduct!) {
    updateProduct(restaurantId: $restaurantId, productId: $productId, updateProductInput: $updateProductInput) {
      products {
        id
        name
        unitSalePrice
        stock
        turnoversProductMonth {
          id
          income
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
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($restaurantId: ID!, $productId: ID!) {
    deleteProduct(restaurantId: $restaurantId, productId: $productId) {
      id
    }
  }
`;

export const SOLD_PRODUCT = gql`
  mutation SoldProduct($restaurantId: ID!, $productId: ID!, $soldProductInput: SoldProduct!) {
    soldProduct(restaurantId: $restaurantId, productId: $productId, soldProductInput: $soldProductInput) {
      products {
        id
        name
        unitSalePrice
        turnoversProductMonth {
          id
          year
          month
          income
          sales
        }
        turnoversProductYear {
          id
          createdAt
          turnoverYear
          totalSales
        }
      }
    }
  }
`;
