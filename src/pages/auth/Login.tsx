import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Container, Typography, Box } from "@mui/material";

import LoginForm from "./auth-forms/LoginForm";
import Logo from "../../components/Logo";

// ----------------------------------------------------------------------
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    gap: "10px",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));
// ----------------------------------------------------------------------

function Login() {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeaderStyle>
            <Box sx={{ display: "flex", paddingLeft: "60px" }}>
              <Logo />
            </Box>
            <Typography variant="h4" gutterBottom>
              Log in
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}>Sign in with Email address</Typography>
          </HeaderStyle>
          <LoginForm />
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Register
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
export default Login;
