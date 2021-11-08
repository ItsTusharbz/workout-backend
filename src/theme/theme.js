import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    danger: {
      light: "#ab003c",
      main: "#f50057",
      dark: "#f73378",
      contrastText: "#fff",
    },
  },
  components: {
    // Name of the component
    MuiDrawer: {
      styleOverrides: {
        // Name of the slot
        paper: {
          // Some CSS
          width: "50%",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        variant: "standard",
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#FF23F",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
});
// responsive drawer
const responsiveDrawer = {
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          [theme.breakpoints.up("md")]: {
            width: "15%",
          },
        },
      },
    },
  },
};

const customeButton = {
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

theme = createTheme(theme, responsiveDrawer, customeButton);

export default theme;
