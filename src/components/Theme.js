import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
  ].join(",");
}

let Theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1220,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 15,
    h1: {
      fontSize: 57,
      color: "#1300ED",
      fontWeight: 900,
    },
    h2: {
      fontSize: 40,
      color: "#1300ED",
      fontWeight: 900,
    },
    h3: {
      fontSize: 38,
      color: "#1300ED",
      fontWeight: 900,
    },
    h4: {
      fontSize: 34,
      color: "#1300ED",
      fontWeight: 900,
    },
    h5: {
      fontSize: 30,
      color: "#1300ED",
      fontWeight: 900,
    },
    h6: {
      fontSize: 26,
      color: "#1300ED",
      fontWeight: 900,
      lineHeight: 1,
    },
    button: {
      fontWeight: 800,
    },
    body: {
      fontSize: 15,
      lineHeight: "32px",
    },
    body2: {
      fontSize: 15,
    },
    body3: {
      fontSize: 16,
      fontWeight: 100,
    },
    copyright: {
      fontSize: 13,
    },
  },
  palette: {
    primary: {
      main: "#1300ED",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: `#ffffff`,
      default: `#ffffff`,
    },
  },
  shadows: [
    "none",
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    `0 2px 10px 0 rgba(5,5,5,0.15)`,
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  overrides: {
    MuiButton: {
      root: {
        fontSize: 13,
        padding: "23px 1.7rem",
        lineHeight: 1,
      },
    },
    MuiFormLabel: {
      root: {
        color: "#1300ED",
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "#1300ED",
        borderWidth: 2,
      },
    },
  },
});

Theme.typography.h1 = {
  ...Theme.typography.h1,
  fontSize: 30,
  [Theme.breakpoints.up("md")]: {
    fontSize: 57,
    lineHeight: "64px",
  },
};

export default Theme;
export { ThemeProvider };
