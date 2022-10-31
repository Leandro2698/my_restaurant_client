/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { List, Container, styled } from "@mui/material";
import { useContext } from "react";
import MainCard from "../../../components/Cards/MainCard";
import { AuthContext } from "../../../context/authContext";
import { GET_ALL_RESTAURANTS } from "../../../graphql/queries/user/restaurants/restaurant";
import Restaurant from "./Restaurant";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    minHeight: "calc(100vh - 20px)",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    borderRadius: "10px",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));
export default function Restaurants() {
  const { user } = useContext<any>(AuthContext);

  const { loading, error, data } = useQuery(GET_ALL_RESTAURANTS, {
    variables: { userId: user.id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error main! {error.message}</p>;

  const restaurantsUser = data.getUser.restaurants;
  return (
    <RootStyle>
      <Container>
        <ContentStyle>
          <MainCard sx={{ color: "red" }} title="List Restaurants">
            <List>
              {restaurantsUser.map((e: any) => (
                <Restaurant key={e.id} restaurant={e} userId={user.id} />
              ))}
            </List>
          </MainCard>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
