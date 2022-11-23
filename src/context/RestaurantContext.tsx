/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/forbid-prop-types */
import { createContext } from "react";
import { RestaurantContextProps } from "./types";

const RestaurantContext = createContext({});

function RestaurantProvider(props: RestaurantContextProps) {
  const { userRestaurants: restaurants } = props;
  return (
    <RestaurantContext.Provider
      value={{
        userRestaurants: restaurants,
      }}
      {...props}
    />
  );
}

export { RestaurantContext, RestaurantProvider };
