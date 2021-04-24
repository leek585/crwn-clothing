import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
//special syntax for importing SVG
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options"></div>
    <Link className="option" to="/shop">
      SHOP
    </Link>
    <Link className="option" to="/shop">
      CONTACT
    </Link>
    {currentUser ? (
      <div className="option" onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    ) : (
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    )}
  </div>
);

export default Header;
