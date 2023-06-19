import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SeverityWrapper = ({ style, overlapGroupStyle, text = "0" }) => {
  return (
    <div className="severity-wrapper" style={style}>
      <div className="overlap-group-3" style={overlapGroupStyle}>
        <div className="element-4">{text}</div>
      </div>
    </div>
  );
};

SeverityWrapper.propTypes = {
  text: PropTypes.string,
};
