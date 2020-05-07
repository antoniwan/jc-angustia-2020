import React from "react";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Twitter } from "../svg/icon-twitter.svg";
import { ReactComponent as Instagram } from "../svg/icon-instagram.svg";
import { ReactComponent as Dribbble } from "../svg/icon-dribbble.svg";
import { ReactComponent as Vimeo } from "../svg/icon-vimeo.svg";
import { ReactComponent as Medium } from "../svg/icon-medium.svg";

export default function Footer() {
  return (
    <footer className="MuiToolbar-gutters">
      <div>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/jcagarcia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/juanangustia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </li>

          <li>
            <a
              href="https://dribbble.com/juanangustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Dribbble />
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/juanangustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Vimeo />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@angustia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Medium />
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
  );
}
