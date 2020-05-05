import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
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

export default function Header() {
  return (
    <header>
      <ElevationScroll>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <div className="logo">
              <a href="/">
                <Logo />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </header>
  );
}
