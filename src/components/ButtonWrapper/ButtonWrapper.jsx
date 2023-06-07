import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonWrapper = ({ style, viewMoreStyle, text = "View More", to }) => {
  return (
    <Link className="button-wrapper" style={style} to={to}>
      <div className="view-more" style={viewMoreStyle}>
        {text}
      </div>
    </Link>
  );
};

ButtonWrapper.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
