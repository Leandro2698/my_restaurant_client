import { createTheme } from "@mui/material";
import { palettes } from "./palettes";

const theme = createTheme({
  // https://mui.com/material-ui/customization/typography/
  typography: {
    fontFamily: "Poppins,sans-serif",
    h6: {
      fontWeight: 500,
      color: palettes.black100,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: palettes.black50,
      fontWeight: 500,
    },
    h4: {
      fontSize: "0.875rem",
      color: palettes.black100,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: palettes.black100,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: palettes.black100,
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: palettes.black100,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
    },
  },
  palette: {
    primary: {
      main: palettes.mainBlue,
      light: palettes.lightBlue,
    },
    secondary: {
      main: palettes.lightGreen,
      dark: palettes.darkGreen,
    },
    grey: {
      50: palettes.black50,
      100: palettes.black100,
      200: palettes.black200,
    },
    background: {
      default: "#fff",
      // other: palettes.defaultBg,
    },
  },
});

export default theme;
