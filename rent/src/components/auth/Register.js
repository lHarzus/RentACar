import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "../layout/Alert";
import { register } from "../../actions/auth";

const Register = ({ isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  const {
    email,
    username,
    password,
    firstname,
    lastname,
    city,
    street,
    number,
    zipcode,
    lat,
    long,
    phone,
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const name = { firstname, lastname };
    const geolocation = { lat, long };
    const address = { city, street, number, zipcode, geolocation };
    console.log(email, username, password, name, address, phone);
    register(email, username, password, name, address, phone);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <h1>Register</h1>
        <Alert />
        <div className="form-input">
          <input
            className="input"
            type="email"
            value={email}
            placeholder="email"
            name="email"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-input">
          <input
            className="input"
            type="text"
            value={username}
            placeholder="username"
            name="username"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-input">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => onChange(e)}
          />
        </div>
        <p>Full Name</p>
        <div className="form-input">
          <input
            className="inputx2"
            type="text"
            value={firstname}
            placeholder="firstname"
            name="firstname"
            onChange={e => onChange(e)}
          />
          <input
            className="inputx2"
            type="text"
            value={lastname}
            placeholder="lastname"
            name="lastname"
            onChange={e => onChange(e)}
          />
        </div>
        <p>Address</p>
        <div className="form-input">
          <input
            className="inputx2"
            type="text"
            value={city}
            placeholder="city"
            name="city"
            onChange={e => onChange(e)}
          />
          <input
            className="inputx2"
            type="text"
            value={street}
            placeholder="street"
            name="street"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-input">
          <input
            className="inputx4"
            type="text"
            value={number}
            placeholder="number"
            name="number"
            onChange={e => onChange(e)}
          />
          <input
            className="inputx4"
            type="text"
            value={zipcode}
            placeholder="zipcode"
            name="zipcode"
            onChange={e => onChange(e)}
          />
          <input
            className="inputx4"
            type="text"
            value={lat}
            placeholder="lat"
            name="lat"
            onChange={e => onChange(e)}
          />
          <input
            className="inputx4"
            type="text"
            value={long}
            placeholder="long"
            name="long"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-input">
          <input type="submit" className="btn btn-filler" value="Sign up" />
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
