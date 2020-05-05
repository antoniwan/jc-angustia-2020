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

  function handleClick(e) {
    const goTo = e.target.dataset.anchor || "hello-anchor";
    const anchor = document.querySelector(`#${goTo}`);

    if (goTo) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <header className={root}>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <>
            <Toolbar className={toolbar}>
              <div className="logo">
                <a href="/" onClick={handleClick}>
                  <Logo />
                </a>
              </div>
              <div className={navigation}>
                <ul className={ul}>
                  <li>
                    <a
                      href="#hello"
                      data-anchor="hello-anchor"
                      onClick={handleClick}
                    >
                      Hello
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      data-anchor="projects-anchor"
                      onClick={handleClick}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      data-anchor="testimonials-anchor"
                      onClick={handleClick}
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hire-me"
                      data-anchor="hire-anchor"
                      onClick={handleClick}
                    >
                      Hire Me
                    </a>
                  </li>
                </ul>
              </div>
            </Toolbar>
          </>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}
