import { SidebarData as SidebarDataType } from "../types";

export const SidebarData: SidebarDataType = [
  {
    title: "Dashboard",
    subtitle: "general",
    path: "/",
  },
  {
    title: "Products",
    subtitle: "management",
    path: "/products/list",
  },
  {
    title: "Restaurants",
    subtitle: "management",
    path: "/restaurants/list",
  },
  // {
  //   title: "Products",
  //   subnav: [
  //     {
  //       title: "List products",
  //       path: "/products/list",
  //     },
  //     {
  //       title: "Create product",
  //       path: "/products/create",
  //     },
  //   ],
  // },
  // {
  //   title: "Restaurants",
  //   subnav: [
  //     {
  //       title: "List restaurants",
  //       path: "/restaurants/list",
  //     },
  //     {
  //       title: "Edit restaurant",
  //       path: "/restaurants/edit",
  //     },
  //     {
  //       title: "Create restaurant",
  //       path: "/restaurants/create",
  //     },
  //   ],
  // },
];
