import React, { Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, cart }, logout }) => {
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
        <Link to="#" className="navTitle">
          ShoppingCart
        </Link>
        <button
          className={
            collapsible
              ? "btn-collapsible collapsible__nav-toggler"
              : "btn-collapsible"
          }>
          <i
            className="bi bi-list nav-toggler"
            onClick={e => toggleColapsible(e)}></i>
        </button>
        <ul
          className={collapsible ? "content" : "content collapsible__content"}>
          {isAuthenticated ? (
            <Fragment>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/dashboard">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart ({cart.length})</Link>
              </li>
              <li>
                <Link to="/" onClick={() => logout()}>
                  Logout
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
