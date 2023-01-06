import { Theme } from "@mui/material";
import { Restaurant } from "../../context/types";

export type User = {
  firstname: string;
  lastname: string;
  token: string;
};
export type HeaderProps = {
  drawerOpen: boolean;
  drawerToggle: () => void;
  theme: Theme;
};
export type AuthProps = {
  children: JSX.Element;
};
export type SidebarProps = {
  drawerWidth: number;
  drawerOpen: boolean;
  drawerToggle: () => void;
};
export type Restaurants = Array<Restaurant>;

export type RestaurantNavProps = {
  restaurants: Restaurants;
};
export type DatasNav = {
  title: string;
  subtitle: string;
  path: string;
};
export type SidebarData = Array<DatasNav>;
