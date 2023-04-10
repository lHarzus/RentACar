import React, { useState } from "react";
import PropTypes from "prop-types";
import { addCart, removeCart, removeAllCart } from "../../actions/cart";
import { connect } from "react-redux";

const CartItem = ({ addCart, removeCart, removeAllCart, product }) => {
  const [hover, setHover] = useState({
    plus: false,
    minus: false,
    click: false,
  });
  const changeHoverState = type => {
    if (type === "minus") setHover({ ...hover, minus: !hover.minus });
    else if (type === "plus") setHover({ ...hover, plus: !hover.plus });
    else setHover({ ...hover, click: !hover.click });
  };
  return (
    <div className="cart-item">
      <div className="cart-title">
        <img src={product.image}></img>
        <h3>{product.title}</h3>
      </div>
      <div className="cart-item-bottom">
        <div className="amount">
          <i
            onMouseEnter={() => changeHoverState("minus")}
            onMouseLeave={() => changeHoverState("minus")}
            className={
              product.amount === 1
                ? "bi bi-dash-circle disable"
                : hover.minus
                ? "bi bi-dash-circle-fill minus"
                : "bi bi-dash-circle minus"
            }
            onClick={() => {
              if (product.amount > 1) {
                removeCart(product);
                changeHoverState("other");
              }
            }}
          />
          <p className="inline cart-amount">{product.amount}</p>
          <i
            onMouseEnter={() => changeHoverState("plus")}
            onMouseLeave={() => changeHoverState("plus")}
            className={
              hover.plus
                ? "bi bi-plus-circle-fill plus"
                : "bi bi-plus-circle plus"
            }
            onClick={() => {
              addCart(product);
              changeHoverState("other");
            }}
          />
        </div>
        <div>
          <button
            className="btn btn-filler"
            onClick={() => removeAllCart(product)}>
            Remove Item
          </button>
        </div>
        <div>
          <p className="inline bold">Price: </p>
          <p className="inline">{product.price} €</p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeAllCart: PropTypes.func.isRequired,
};

export default connect(null, { addCart, removeCart, removeAllCart })(CartItem);
