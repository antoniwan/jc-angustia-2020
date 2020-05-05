import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Twitter } from "../svg/icon-twitter.svg";
import { ReactComponent as Instagram } from "../svg/icon-instagram.svg";
import { ReactComponent as Behance } from "../svg/icon-behance.svg";

export default function Footer() {
  return (
    <Container>
      <footer>
        <div>
          <ul>
            <li>
              <a href="#twitter" rel="noopener noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#instagram" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#behance" rel="noopener noreferrer">
                <Behance />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Typography variant="body2">
            Copyright 2020 © Juan Angustia - All rights reserved.
          </Typography>
        </div>
        <div className="logo">
          <Logo />
        </div>
      </footer>
    </Container>
  );
}
