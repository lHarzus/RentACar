import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";

const Shipping = ({ auth: { userId, user }, getUser }) => {
  useEffect(() => {
    getUser(userId);
  }, []);
  return (
    <div>
      {user ? (
        <Fragment>
          <h3>Shipping Details</h3>
          <div class="shipping-details">
            <div className="inline-space-between">
              <p className="bold">City : </p>
              <p>{user.address.city}</p>
            </div>
            <div className="inline-space-between">
              <p className="bold">Street : </p>
              <p>{user.address.street}</p>
            </div>
            <div className="inline-space-between">
              <p className="bold">Number : </p>
              <p>{user.address.number}</p>
            </div>
            <div className="inline-space-between">
              <p className="bold">Zip : </p>
              <p>{user.address.zipcode}</p>
            </div>
          </div>
        </Fragment>
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
      )}
    </div>
  );
};

Shipping.propTypes = {
  auth: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getUser })(Shipping);
