import React from "react";
import { ReactComponent as Logo } from "../svg/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>
      </div>
    </header>
  );
}
