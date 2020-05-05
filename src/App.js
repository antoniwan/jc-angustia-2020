import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
}

export default App;
