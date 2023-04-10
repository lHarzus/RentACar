import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";

const Body = ({ isAuthenticated }) => {
  return <Fragment>{isAuthenticated ? <Dashboard /> : <Login />}</Fragment>;
};

Body.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Body);
