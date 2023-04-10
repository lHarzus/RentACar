import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCart } from "../../actions/cart";
import CartItem from "./CartItem";
import Total from "./Total";
import Shipping from "./Shipping";

const Cart = ({ deleteCart, auth: { cart } }) => {
  return (
    <div className="cart-grid">
      <div className="cart">
        <header>
          <h2>MY CART</h2>
          <button className="btn btn-filler" onClick={() => deleteCart()}>
            Remove all
          </button>
        </header>
        <div>
          {cart.length === 0 ? (
            <p>0 items on cart</p>
          ) : (
            cart.map(item => <p>{<CartItem product={item} />}</p>)
          )}
        </div>
        <div className="cart-price">
          <h3 className="inline">Total: </h3>
          <p className="inline">
            {cart.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.price * currentValue.amount;
            }, 0)}{" "}
            €
          </p>
        </div>
      </div>
      <div className="cart-total-grid">
        <div className="cart-shipping">
          <Shipping />
        </div>
        <div className="cart-subtotal">
          <Total
            subtotal={cart.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.price * currentValue.amount;
            }, 0)}
          />
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteCart })(Cart);
