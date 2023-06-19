import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({ style, overlapGroupStyle, text = "3" }) => {
  return (
    <div className="div-wrapper" style={style}>
      <div className="overlap-group-4" style={overlapGroupStyle}>
        <div className="element-5">{text}</div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  text: PropTypes.string,
};
