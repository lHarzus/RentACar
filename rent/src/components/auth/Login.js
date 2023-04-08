import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            className="input"
            type="text"
            value={username}
            placeholder="username"
            name="username"
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <input type="submit" className="btn btn-filler" value="Sign in" />
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
