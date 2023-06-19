import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Severity = ({ style, overlapGroupStyle, text = "4" }) => {
  return (
    <div className="severity" style={style}>
      <div className="element-wrapper" style={overlapGroupStyle}>
        <div className="element-3">{text}</div>
      </div>
    </div>
  );
};

Severity.propTypes = {
  text: PropTypes.string,
};
