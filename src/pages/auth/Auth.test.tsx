import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import { GET_ALL_RESTAURANTS } from "../../graphql/queries/user/restaurants/restaurant";

import { AuthContext } from "../../context/authContext";
import { RestaurantContext } from "../../context/RestaurantContext";
import Sidebar from "../../layouts/mainLayout/sidebar/Sidebar";

const AuthProviderValue = {
  user: {
    __typename: "User",
    id: "63b2a733a06487e4e38cd959",
    firstname: "lolu",
    lastname: "lolu",
    email: "lolu@gmail.com",
    password: "$2b$10$w6XqsWPLnuCUUk8h8Af/UuqPiM26v.h9gKc5WH65WjgLpZDMTxRG.",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjJhNzMzYTA2NDg3ZTRlMzhjZDk1OSIsImZpcnN0bmFtZSI6ImxvbHUiLCJpYXQiOjE2NzI2ODA2MTksImV4cCI6MTY3MjY4NzgxOX0.KN1-_OPvAG5WTHq8_KytdBRNDMbKkf5FgwJ67Gkho9Y",
    restaurants: [
      {
        __typename: "Restaurant",
        _id: "63b2a733a06487e4e38cd95b",
        name: "restoFixture",
        products: [
          {
            __typename: "Product",
            id: "63b2a767b08f71a058f47fd7",
            name: "product2",
            unitSalePrice: 25,
            turnoversProductMonth: [
              {
                __typename: "TurnoversProductMonth",
                id: "63b2a767b08f71a058f47fd9",
                income: 175,
                month: "January",
                day: "2",
                year: "2023",
                sales: 7,
              },
            ],
            turnoversProductYear: [
              {
                __typename: "TurnoversProductYear",
                id: "63b2a767b08f71a058f47fd8",
                createdAt: "2023",
                turnoverYear: 175,
                totalSales: 7,
              },
            ],
            category: "food",
            status: "published",
          },
          {
            __typename: "Product",
            id: "63b2a733a06487e4e38cd963",
            name: "productFixture",
            unitSalePrice: 10,
            turnoversProductMonth: [
              {
                __typename: "TurnoversProductMonth",
                id: "656a9db0a06487e4e38cda6e",
                income: 0,
                month: "December",
                day: "2",
                year: "2023",
                sales: 0,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "654310b0a06487e4e38cda4d",
                income: 290,
                month: "November",
                day: "2",
                year: "2023",
                sales: 29,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "651a3230a06487e4e38cda2e",
                income: 260,
                month: "October",
                day: "2",
                year: "2023",
                sales: 26,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64f2a530a06487e4e38cda11",
                income: 100,
                month: "September",
                day: "2",
                year: "2023",
                sales: 10,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64c9c6b0a06487e4e38cd9f6",
                income: 290,
                month: "August",
                day: "2",
                year: "2023",
                sales: 29,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64a0e830a06487e4e38cd9dd",
                income: 40,
                month: "July",
                day: "2",
                year: "2023",
                sales: 4,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64795b30a06487e4e38cd9c6",
                income: 60,
                month: "June",
                day: "2",
                year: "2023",
                sales: 6,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64507cb0a06487e4e38cd9b1",
                income: 280,
                month: "May",
                day: "2",
                year: "2023",
                sales: 28,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "6428efb0a06487e4e38cd99e",
                income: 120,
                month: "April",
                day: "2",
                year: "2023",
                sales: 12,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "64001130a06487e4e38cd98d",
                income: 80,
                month: "March",
                day: "2",
                year: "2023",
                sales: 8,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "63db2730a06487e4e38cd97e",
                income: 190,
                month: "February",
                day: "2",
                year: "2023",
                sales: 19,
              },
              {
                __typename: "TurnoversProductMonth",
                id: "63b2a733a06487e4e38cd965",
                income: 330,
                month: "January",
                day: "2",
                year: "2023",
                sales: 33,
              },
            ],
            turnoversProductYear: [
              {
                __typename: "TurnoversProductYear",
                id: "63b2a733a06487e4e38cd964",
                createdAt: "2023",
                turnoverYear: 2040,
                totalSales: 204,
              },
            ],
            category: "drink",
            status: "published",
          },
        ],
        turnoversRestaurantYear: [
          {
            __typename: "TurnoversRestaurantYear",
            id: "63b2a733a06487e4e38cd95c",
            createdAt: "2023",
            turnoverYear: 2215,
            totalSales: 211,
          },
        ],
      },
      {
        __typename: "Restaurant",
        _id: "63b2a7f1b08f71a058f48052",
        name: "resto1",
        products: [
          {
            __typename: "Product",
            id: "63b2a7fcb08f71a058f48074",
            name: "product1",
            unitSalePrice: 10,
            turnoversProductMonth: [
              {
                __typename: "TurnoversProductMonth",
                id: "63b2a7fcb08f71a058f48076",
                income: 10,
                month: "January",
                day: "2",
                year: "2023",
                sales: 1,
              },
            ],
            turnoversProductYear: [
              {
                __typename: "TurnoversProductYear",
                id: "63b2a7fcb08f71a058f48075",
                createdAt: "2023",
                turnoverYear: 10,
                totalSales: 1,
              },
            ],
            category: "drink",
            status: "published",
          },
        ],
        turnoversRestaurantYear: [
          {
            __typename: "TurnoversRestaurantYear",
            id: "63b2a7f1b08f71a058f48053",
            createdAt: "2023",
            turnoverYear: 10,
            totalSales: 1,
          },
        ],
      },
    ],
    create_at: "",
  },
  login: () => {},
  logout: () => {},
};
const RestaurantProviderValue = {
  userRestaurants: AuthProviderValue.user.restaurants,
};

const mocks = [
  {
    request: {
      query: GET_ALL_RESTAURANTS,
      variables: {
        userId: AuthProviderValue.user.id,
      },
    },
    result: {
      data: {
        getUser: {
          ...AuthProviderValue.user,
          restaurants: [],
        },
      },
    },
  },
];

const customRender = (component: any, renderOption: any) =>
  render(
    <MockedProvider mocks={mocks}>
      <AuthContext.Provider value={AuthProviderValue}>
        <RestaurantContext.Provider value={RestaurantProviderValue}>{component}</RestaurantContext.Provider>
      </AuthContext.Provider>
    </MockedProvider>,
    renderOption
  );

test("NameConsumer shows value from provider", async () => {
  window.history.pushState({}, "Test page", "/");
  customRender(
    <Sidebar
      drawerWidth={0}
      drawerOpen={false}
      drawerToggle={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
    { wrapper: BrowserRouter }
  );
  await waitFor(() => {
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
