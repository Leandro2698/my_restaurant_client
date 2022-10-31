/* eslint-disable import/no-cycle */
import { Container, styled } from "@mui/material";
import MainCard from "../../../components/Cards/MainCard";
import EditRestaurantForm from "./restaurant-forms/EditRestaurantForm";

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

function EditRestaurant() {
  return (
    <RootStyle>
      <Container>
        <ContentStyle>
          <MainCard sx={{ color: "blue" }} title="Update your restaurant">
            <EditRestaurantForm />
          </MainCard>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

export default EditRestaurant;
