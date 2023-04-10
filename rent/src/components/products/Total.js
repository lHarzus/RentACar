import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCart } from "../../actions/cart";
import { useNavigate } from "react-router-dom";

const Total = ({ subtotal, auth: { cart }, deleteCart }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Subtotal: {Math.round((subtotal - subtotal * 0.23) * 10) / 10} €</h2>
      <div class="card-taxes">
        <div className="inline-space-between">
          <p className="bold">Taxes: </p>
          <p className="">+{Math.round(subtotal * 0.23 * 10) / 10}€</p>
        </div>
        <div className="inline-space-between">
          <p className="bold">Shipping: </p>
          {cart.length === 0 ? <p>+0€</p> : <p>+4.90€</p>}
        </div>
      </div>
      <div className="inline-space-between">
        <p className="bold">Total: </p>
        {cart.length === 0 ? (
          <p>+0€</p>
        ) : (
          <p>{Math.round((subtotal + 4.9) * 10) / 10} €</p>
        )}
      </div>
      <button
        className="btn btn-filler"
        onClick={() => {
          deleteCart();
          navigate("/dashboard");
        }}>
        Checkout
      </button>
    </div>
  );
};

Total.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteCart })(Total);
