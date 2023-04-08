import React, { Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  const [fixed, setfixed] = useState(false);
  const changeState = () => {
    if (window.scrollY >= window.innerHeight * 0.9) {
      setfixed(true);
    } else {
      setfixed(false);
    }
  };
  window.addEventListener("scroll", changeState);

  const [collapsible, setColapsible] = useState(false);

  const toggleColapsible = e => {
    e.preventDefault();
    setColapsible(!collapsible);
  };

  return (
    <Fragment>
      <nav className={fixed ? "navbar navbar-fixed" : "navbar"}>
        <i
          class="bi bi-list nav-toggler"
          onClick={e => toggleColapsible(e)}></i>
        <Link to="#" className="navTitle">
          ShoppingKart
        </Link>
        <ul
          className={collapsible ? "content" : "content collapsible__content"}>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Items</Link>
          </li>
          <li>
            <Link to="#">Kart</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
      </nav>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
      <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
    </Fragment>
  );
};

Navbar.propTypes = {};

export default Navbar;
