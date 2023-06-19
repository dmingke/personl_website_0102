import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Severity1 = ({ style, overlapGroupStyle, text = "1" }) => {
  return (
    <div className="severity-1" style={style}>
      <div className="overlap-group-5" style={overlapGroupStyle}>
        <div className="element-6">{text}</div>
      </div>
    </div>
  );
};

Severity1.propTypes = {
  text: PropTypes.string,
};
