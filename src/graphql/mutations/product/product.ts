import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($restaurantId: ID!, $createProductInput: CreateProduct) {
    createProduct(restaurantId: $restaurantId, createProductInput: $createProductInput) {
      id
      name
      products {
        id
        name
      }
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($restaurantId: ID!, $productId: ID!, $updateProductInput: UpdateProduct) {
    updateProduct(restaurantId: $restaurantId, productId: $productId, updateProductInput: $updateProductInput) {
      products {
        id
        name
        createdAt
        unitSalePrice
        stock
        turnoversProduct {
          id
          createdAt
          turnoverYear
        }
        sales {
          id
          createdAt
          unitProductSold
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
  mutation SoldProduct($restaurantId: ID!, $productId: ID!, $soldProductInput: SoldProduct) {
    soldProduct(restaurantId: $restaurantId, productId: $productId, soldProductInput: $soldProductInput) {
      id
      name
      turnoversRestaurant {
        turnoverYear
      }
      sales {
        unitProductSold
        productId
      }
      products {
        id
        name
        sales {
          id
          createdAt
          unitProductSold
        }
        unitSalePrice
        turnoversProduct {
          id
          createdAt
          turnoverYear
        }
      }
    }
  }
`;
