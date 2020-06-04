import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.offset} />
      <Home />

      <ScrollTop />
    </>
  );
}

export default App;
