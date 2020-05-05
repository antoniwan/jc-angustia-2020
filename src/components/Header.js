import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../svg/logo.svg";

export default function Header() {
  return (
    <header>
      <AppBar position="fixed">
        <Toolbar>
          <div className="logo">
            <a href="/">
              <Logo />
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
