import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Landing = ({ isAuthenticated }) => {
  return (
    <div className="landing block--arrow-upside">
      <div className="landing-content">
        <h1>My Shopping Website</h1>
        <p>Showcase of products using Fake Store API</p>
        <p>https://fakestoreapi.com/</p>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
