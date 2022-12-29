import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Container, Typography, Box } from "@mui/material";
import RegisterForm from "./auth-forms/RegisterForm";
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

function Register() {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeaderStyle>
            <Box sx={{ display: "flex", paddingLeft: "60px" }}>
              <Logo />
            </Box>

            <Typography variant="h4" gutterBottom>
              Register
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}>Register in My Restaurant</Typography>
          </HeaderStyle>
          <RegisterForm />

          <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
            Already have an account?{" "}
            <Link variant="subtitle2" to="/login" component={RouterLink}>
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
export default Register;
