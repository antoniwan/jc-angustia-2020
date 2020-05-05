import React from "react";
import Container from "@material-ui/core/Container";

import { ReactComponent as Logo } from "../svg/logo.svg";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>
      </Container>
    </header>
  );
}
