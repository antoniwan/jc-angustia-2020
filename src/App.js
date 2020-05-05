import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Header from "./components/Header";
import "./styles/App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div id="back-to-top-anchor"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec vehicula lectus. Maecenas consectetur arcu leo, non sollicitudin
          urna pellentesque posuere. Pellentesque cursus tempus consequat. Class
          aptent taciti sociosqu <strong>ad litora torquent per</strong> conubia
          nostra, per inceptos himenaeos. Cras convallis pretium elit.
          Pellentesque lectus lectus, ornare nec arcu non, lacinia imperdiet
          est. Fusce in arcu erat.
        </p>
        <p>
          <button>About me</button>
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <div className="ball-holder">
          <div className="ball blue-ball">#1300ED</div>
          <div className="ball white-ball">#000000</div>
          <div className="ball black-ball">#FFFFFF</div>
        </div>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
        <p>
          Duis vulputate malesuada turpis. Ut ornare, purus a auctor malesuada,
          libero lacus ultrices ante, <strong>a mattis neque leo</strong> non
          magna. Fusce tellus ex, convallis vel massa non, rutrum facilisis
          ipsum. Nulla id vehicula dui. Curabitur efficitur ullamcorper metus,
          eu auctor elit auctor eget. Nulla volutpat consequat libero, ac ornare
          urna molestie eu. Sed pulvinar est sed orci efficitur, et placerat
          massa porttitor. Integer tristique justo maximus, cursus lorem non,
          lobortis ex. Aenean tristique eros id vestibulum tincidunt. In a dui
          faucibus, pulvinar nunc volutpat, consectetur ipsum.
        </p>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
