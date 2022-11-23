import { useQuery } from "@apollo/client";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { Add } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../../../context/authContext";
import { GET_ALL_RESTAURANTS } from "../../../../graphql/queries/user/restaurants/restaurant";
import MainCard from "../../../../components/Cards/MainCard";
import RowRestaurants from "./RowRestaurants";
import AddRestaurant from "./AddRestaurant";
import MainTable from "../../../../components/Tables/MainTable";
import { Restaurant } from "../types";

export default function ListRestaurants() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleClickAdd = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const { loading, error, data } = useQuery(GET_ALL_RESTAURANTS, {
    variables: { userId: user?.id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error list restaurants! {error.message}</p>;

  const restaurantsUser = data.getUser.restaurants;

  const restaurants: any = [];

  const thisYear = new Date();

  for (let i = 0; i < restaurantsUser.length; i += 1) {
    const turnoverThisYear = restaurantsUser[i].turnoversRestaurantYear.filter(
      (turnover: any) => turnover?.createdAt === format(thisYear, "yyyy")
    );

    restaurants.push({
      id: restaurantsUser[i].id,
      name: restaurantsUser[i].name,
      turnover: turnoverThisYear[0]?.turnoverYear,
      sales: turnoverThisYear[0]?.totalSales,
    });
  }

  return (
    <>
      <MainCard
        title="List Restaurants"
        action={
          <IconButton onClick={handleClickAdd} sx={{ bgcolor: theme.palette.secondary.light, color: "#fff" }}>
            <Add />
          </IconButton>
        }
        content={false}
      >
        <MainTable tableCells={["Name", "Turnover", "Sales", "Action"]}>
          {restaurants.map((restaurant: Restaurant) => (
            <RowRestaurants key={restaurant.id} restaurant={restaurant} />
          ))}
        </MainTable>
      </MainCard>
      <AddRestaurant handleClose={handleCloseDialog} open={open} userId={user?.id} />
    </>
  );
}
