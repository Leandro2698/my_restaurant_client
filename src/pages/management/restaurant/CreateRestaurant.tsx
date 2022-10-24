/* eslint-disable max-len */
import { Container, styled } from "@mui/material";
import MainCard from "../../../components/Cards/MainCard";
import CreateRestaurantForm from "./restaurant-forms/CreateRestaurantForm";

// ----------------------------------------------------------------------
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
// ----------------------------------------------------------------------

function CreateRestaurant() {
  return (
    <RootStyle>
      <Container>
        <ContentStyle>
          <MainCard sx={{ color: "red" }} title="Create your restaurant">
            <CreateRestaurantForm />
          </MainCard>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

export default CreateRestaurant;
