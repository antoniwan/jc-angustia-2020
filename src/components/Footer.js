import React from "react";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Twitter } from "../svg/icon-twitter.svg";
import { ReactComponent as Instagram } from "../svg/icon-instagram.svg";
import { ReactComponent as Dribbble } from "../svg/icon-dribbble.svg";
import { ReactComponent as Vimeo } from "../svg/icon-vimeo.svg";
import { ReactComponent as Medium } from "../svg/icon-medium.svg";
import { ReactComponent as Heart } from "../svg/icon-heart.svg";

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
        <Typography variant="copyright" align="center">
          Made with{" "}
          <motion.div
            className="beating-heart"
            initial={{ scale: 0 }}
            animate={{ scale: [1.1, 1.3, 1] }}
            transition={{
              loop: Infinity,
              ease: "easeOut",
              duration: 1.5,
            }}
          >
            <Heart className="icon-heart" />
          </motion.div>{" "}
          by Juan Angustia.
          <br className="hide-on-desktop" />
          {"  "}Copyright 2020 - All rights reserved.
        </Typography>
      </div>
      <div className="logo">
        <Logo />
      </div>
    </footer>
  );
}
