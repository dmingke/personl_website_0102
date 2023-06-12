import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonWrapper = ({ style, viewMoreStyle, text = "View More", to, href }) => {
  return (
    <Link className="button-wrapper" style={style} to={to}>
      <a className="view-more" style={viewMoreStyle} href={href} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    </Link>
  );
};

ButtonWrapper.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};
