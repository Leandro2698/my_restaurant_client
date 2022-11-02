export type Restaurant = {
  name: string;
  id: string;
  turnover: string;
  sales: string;
};
export type ActionsRestaurantProps = {
  restaurantId: string;
  userId: string;
};
export type AddRestaurantProps = {
  open: boolean;
  handleClose: () => void;
  userId: string;
};
export type CollapseEditRestaurantProps = {
  restaurant: Restaurant;
  userId: string;
};
export type RowRestaurantsProps = {
  restaurant: Restaurant;
};
