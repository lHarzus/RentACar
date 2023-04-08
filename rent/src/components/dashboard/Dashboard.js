import React from "react";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Dashboard = ({ logout }) => {
  return (
    <div>
      <button className="btn btn-filler" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Dashboard);
