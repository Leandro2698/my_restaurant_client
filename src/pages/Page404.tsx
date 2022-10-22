import { useContext } from "react";

import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";
import { AuthContext } from "../context/authContext";

// ----------------------------------------------------------------------
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));
// ----------------------------------------------------------------------
function Page404() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
          spelling.
        </Typography>

        <Box
          component="img"
          src="../asset/images/404page.jpg"
          sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
        />
        {user ? (
          <Button size="large" variant="contained" component={RouterLink} to="/">
            Go home
          </Button>
        ) : (
          <Navigate to="/" state={{ from: location }} replace />
        )}
      </ContentStyle>
    </Container>
  );
}
export default Page404;
