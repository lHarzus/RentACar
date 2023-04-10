import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCart, removeCart } from "../../actions/cart";

const Cart = ({ addCart, removeCart, auth: { cart } }) => {
  return (
    <div className="border">
      <button onClick={() => addCart({ ola: "ola", id: 1, amount: 1 })}>
        add
      </button>
      <button onClick={() => removeCart({ ola: "ola", id: 2, amount: 1 })}>
        remove
      </button>
      <button
        onClick={() => {
          for (const c in cart) {
            console.log(cart[c].id);
          }
        }}>
        ola
      </button>
    </div>
  );
};

Cart.propTypes = {
  auth: PropTypes.object.isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addCart, removeCart })(Cart);
