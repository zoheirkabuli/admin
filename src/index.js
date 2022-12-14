import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// css
import "normalize.css";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#109CF1",
      contrastText: "#fff",
    },
    secondary: {
      main: "#885AF8",
      contrastText: "#fff",
    },
    error: {
      main: "#F7685B",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFB946",
      contrastText: "#fff",
    },
    success: {
      main: "#2ED47A",
      contrastText: "#fff",
    },
    secondaryGray: {
      main: "#90A0B7",
    },
    darkBlueText: {
      main: "#334D6E",
    },
    iconGray: {
      main: "#C2CFE0",
    },
  },
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: "iranyekan,sans-serif",
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  shape: {
    borderRadius: 5,
  },
  direction: "rtl",
  spacing: 5,
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// eslint-disable-next-line
function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CacheProvider>
);
