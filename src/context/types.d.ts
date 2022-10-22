export type MyToken = {
  name: string;
  exp: number;
  // whatever else is in the JWT.
};
export type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  create_at: string;
  restaurants: Array<object>;
};
export type InitialState = {
  user: object | null;
};
export type AuthContextType = {
  user: User | null;
  login: (user) => void;
  logout: () => void;
};

export type RestaurantContextProps = {
  userRestaurants: Array<Restaurant>;
  children: JSX.Element;
};

export type Restaurant = {
  id: string;
  name: string;
  admin: User;
  products: Array<T>; // Update
  turnoversRestaurant: Array<T>; // Update
  sales: Array<T>; // Update
  isRestaurantSelected: boolean;
};
