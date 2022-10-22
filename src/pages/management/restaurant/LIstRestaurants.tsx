/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { List } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { GET_ALL_RESTAURANTS } from "../../../graphql/queries/user/restaurants/restaurant";
import Restaurant from "./Restaurant";

export default function Restaurants() {
  const { user } = useContext<any>(AuthContext);

  const { loading, error, data } = useQuery(GET_ALL_RESTAURANTS, {
    variables: { userId: user.id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error main! {error.message}</p>;

  const restaurantsUser = data.getUser.restaurants;
  return (
    <List>
      {restaurantsUser.map((e: any) => (
        <Restaurant key={e.id} restaurant={e} userId={user.id} />
      ))}
    </List>
  );
}
