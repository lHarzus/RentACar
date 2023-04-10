import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = props => {
  const [collapsible1, setColapsible1] = useState(false);
  const [collapsible2, setColapsible2] = useState(false);
  const [collapsible3, setColapsible3] = useState(false);

  const toggleColapsible = (e, id) => {
    e.preventDefault();
    if (id === 1) setColapsible1(!collapsible1);
    if (id === 2) setColapsible2(!collapsible2);
    if (id === 3) setColapsible3(!collapsible3);
  };
  return (
    <Fragment>
      <footer className="footer">
        <section className="collapsible">
          <header className="collapsible__header">
            <h2 className="collapsible__heading footer__heading">Categories</h2>
            <button
              className={
                collapsible1
                  ? "btn-collapsible collapsible__nav-toggler"
                  : "btn-collapsible"
              }>
              <i
                className="bi bi-list nav-toggler"
                onClick={e => toggleColapsible(e, 1)}></i>
            </button>
          </header>
          <ul
            className={
              collapsible1 ? "content" : "content collapsible__content"
            }>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Jewelery</a>
            </li>
            <li>
              <a href="#">Men's clothing</a>
            </li>
            <li>
              <a href="#">Women's clothing</a>
            </li>
          </ul>
        </section>
        <section className="collapsible">
          <header className="collapsible__header">
            <h2 className="collapsible__heading">Company</h2>
            <button
              className={
                collapsible2
                  ? "btn-collapsible collapsible__nav-toggler"
                  : "btn-collapsible"
              }>
              <i
                className="bi bi-list nav-toggler"
                onClick={e => toggleColapsible(e, 2)}></i>
            </button>
          </header>
          <ul
            className={
              collapsible2 ? "content" : "content collapsible__content"
            }>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </section>
        <section className="collapsible">
          <header className="collapsible__header">
            <h2 className="collapsible__heading footer__heading">Support</h2>
            <button
              className={
                collapsible3
                  ? "btn-collapsible collapsible__nav-toggler"
                  : "btn-collapsible"
              }>
              <i
                className="bi bi-list nav-toggler"
                onClick={e => toggleColapsible(e, 3)}></i>
            </button>
          </header>
          <ul
            className={
              collapsible3 ? "content" : "content collapsible__content"
            }>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
          </ul>
        </section>
        <section className="footer__brand">
          <h1>ShoppingCart</h1>
          <p className="footer__copyright">Copyright 2020 MH</p>
        </section>
      </footer>
    </Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
