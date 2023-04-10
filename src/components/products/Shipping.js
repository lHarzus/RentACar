import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";

const Shipping = ({
  auth: {
    userId,
    user: { address },
  },
  getUser,
}) => {
  useEffect(() => {
    getUser(userId);
  }, []);
  return (
    <div>
      <h3>Shipping Details</h3>
      <div class="shipping-details">
        <div className="inline-space-between">
          <p className="bold">City : </p>
          <p>{address.city}</p>
        </div>
        <div className="inline-space-between">
          <p className="bold">Street : </p>
          <p>{address.street}</p>
        </div>
        <div className="inline-space-between">
          <p className="bold">Number : </p>
          <p>{address.number}</p>
        </div>
        <div className="inline-space-between">
          <p className="bold">Zip : </p>
          <p>{address.zipcode}</p>
        </div>
      </div>
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
