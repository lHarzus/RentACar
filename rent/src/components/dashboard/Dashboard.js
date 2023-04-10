import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts, getCategories } from "../../actions/products";
import Product from "../products/Product";
import Cart from "../products/Cart";

const Dashboard = ({
  getProducts,
  getCategories,
  products: { products, categories },
}) => {
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const [filter, setFilter] = useState("all");

  const changeFilter = f => {
    setFilter(f);
  };

  return (
    <Fragment>
      <div className="dashboard-header" id="items">
        <h2>Categories:</h2>
        <button
          className={"all" === filter ? "btn" : "btn btn-filler"}
          onClick={() => changeFilter("all")}>
          all
        </button>
        {categories
          ? categories.map(category => (
              <button
                key={category}
                className={category === filter ? "btn" : "btn btn-filler"}
                onClick={() => changeFilter(category)}>
                {category}
              </button>
            ))
          : ""}
      </div>
      <div className="products">
        {filter === "all"
          ? products.map(product => (
              <Product key={product.title} product={product} />
            ))
          : products
              .filter(product => product.category === filter)
              .map(product => (
                <Product key={product.title} product={product} />
              ))}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts, getCategories })(
  Dashboard
);
