import { makeVar } from "@apollo/client";

export const restaurantIdVar = makeVar(window.localStorage.getItem("restaurantId") || "");
