import React from "react";
import PropTypes from "prop-types";
import { addCart } from "../../actions/cart";
import { connect } from "react-redux";

const Product = ({ product, addCart }) => {
  return (
    <div className="single-product">
      <div className="product-title">
        <h3>Title {product.title}</h3>
        <img src={product.image}></img>
      </div>
      <div>
        <p className="inline bold">Price: </p>
        <p className="inline">{product.price} €</p>
      </div>
      <div>
        <p className="inline bold">Category: </p>
        <p className="inline">{product.category}</p>
      </div>
      <div>
        <p className="inline bold">Description: </p>
        <p className="inline">{product.description}</p>
      </div>
      <div className="product-btn">
        <button className="btn" onClick={() => addCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default connect(null, { addCart })(Product);
