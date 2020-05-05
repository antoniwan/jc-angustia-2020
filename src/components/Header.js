import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../svg/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {},
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "big_johnregular",
    color: "#000000",
  },
  li: {
    fontFamily: "big_johnregular",
  },
}));

export default function Header() {
  const classes = useStyles();
  const { root, navigation, ul, li, toolbar } = classes;
  return (
    <header className={root}>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <Container maxWidth="lg" disableGutters={true}>
            <Toolbar className={toolbar}>
              <div className="logo">
                <a href="/">
                  <Logo />
                </a>
              </div>
              <navigation className={navigation}>
                <ul className={ul}>
                  <li>
                    <a href="#hello">Hello</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#hire-me">Hire Me</a>
                  </li>
                </ul>
              </navigation>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}
