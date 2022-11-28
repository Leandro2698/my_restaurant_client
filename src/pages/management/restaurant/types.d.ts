export type Restaurant = {
  _id: string;
  name: string;
  turnover: string;
  sales: string;
};
export type ActionsRestaurantProps = {
  restaurant: Restaurant;
  userId?: string;
};
export type AddRestaurantProps = {
  open: boolean;
  handleClose: () => void;
  userId?: string;
};
export type CollapseEditRestaurantProps = {
  restaurant: Restaurant;
  userId: string;
};
export type RowRestaurantsProps = {
  restaurant: Restaurant;
};
