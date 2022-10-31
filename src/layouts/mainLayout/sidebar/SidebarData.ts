export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Account",
    path: "/account",
  },
  {
    title: "Products",
    subnav: [
      {
        title: "List products",
        path: "/products/list",
      },
      {
        title: "Create product",
        path: "/products/create",
      },
    ],
  },
  {
    title: "Restaurants",
    subnav: [
      {
        title: "List restaurants",
        path: "/restaurants/list",
      },
      {
        title: "Edit restaurant",
        path: "/restaurants/edit",
      },
      {
        title: "Create restaurant",
        path: "/restaurants/create",
      },
    ],
  },
];
