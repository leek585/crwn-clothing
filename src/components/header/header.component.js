import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
//special syntax for importing SVG
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options"></div>
    <Link className="options" to="/shop">
      SHOP
    </Link>
    <Link className="options" to="/shop">
      CONTACT
    </Link>
  </div>
);

export default Header;
