import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import TestingContent from "./components/TestingContent";

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
      <Container maxWidth="lg">
        <div id="back-to-top-anchor"></div>
        <main>app...</main>
        <TestingContent />
      </Container>
      <Footer />
      <ScrollTop>
        <Fab color="inherit" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
