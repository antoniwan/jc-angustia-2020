import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../svg/logo.svg";
import debounce from "lodash/debounce";

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
    display: "none",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 0,
    padding: 0,
    fontFamily: "big_johnregular",
    color: "#000000",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  li: {
    marginRight: "3rem",
  },
}));

export default function Header() {
  const [activeSection, setActiveSection] = useState("hello-anchor");
  const classes = useStyles();
  const { root, navigation, ul, li, toolbar } = classes;

  const handleScroll = (e) => {
    const { scrollTop } = e.target.scrollingElement;
    const projectsAnchor = document.querySelector("#projects-anchor");
    const testimonialsAnchor = document.querySelector("#testimonials-anchor");
    const hireAnchor = document.querySelector(".lets-talk");

    if (scrollTop > hireAnchor.offsetTop - 400) {
      setActiveSection("hire-anchor");
    } else if (scrollTop > testimonialsAnchor.offsetTop - 400) {
      setActiveSection("testimonials-anchor");
    } else if (scrollTop > projectsAnchor.offsetTop) {
      setActiveSection("projects-anchor");
    } else {
      setActiveSection("hello-anchor");
    }
  };

  const handleClick = (e) => {
    const goTo = e.target.dataset.anchor || "hello-anchor";
    const anchor = document.querySelector(`#${goTo}`);

    if (goTo) {
      setActiveSection(anchor.id);
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 10));
  });

  return (
    <header className={root}>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={`${toolbar} toolbar-override`}>
            <div className="logo">
              <a href="/" onClick={handleClick}>
                <Logo />
              </a>
            </div>
            <div className={`${navigation} main-navigation`}>
              <ul className={`${ul} `}>
                <li
                  className={`${li} ${
                    activeSection === "hello-anchor" ? "is-active" : ""
                  }`}
                >
                  <a
                    href="#hello"
                    data-anchor="hello-anchor"
                    onClick={handleClick}
                  >
                    Hello
                  </a>
                </li>
                <li
                  className={`${li} ${
                    activeSection === "projects-anchor" ? "is-active" : ""
                  }`}
                >
                  <a
                    href="#projects"
                    data-anchor="projects-anchor"
                    onClick={handleClick}
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={`${li} ${
                    activeSection === "testimonials-anchor" ? "is-active" : ""
                  }`}
                >
                  <a
                    href="#testimonials"
                    data-anchor="testimonials-anchor"
                    onClick={handleClick}
                  >
                    Testimonials
                  </a>
                </li>
                <li
                  className={`${li} ${
                    activeSection === "hire-anchor" ? "is-active" : ""
                  }`}
                >
                  <a
                    href="#hire-me"
                    data-anchor="hire-anchor"
                    onClick={handleClick}
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>
            <div className="resume-tab">
              <Button variant="contained" color="primary" disableElevation>
                <a href="#resume" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}
