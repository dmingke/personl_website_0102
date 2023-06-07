import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group19 = ({ style, cStyle, text = "C++" }) => {
  return (
    <div className="group-19" style={style}>
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="c-wrapper">
            <div className="c" style={cStyle}>
              {text}
            </div>
          </div>
        </div>
        <div className="rectangle-3" />
      </div>
    </div>
  );
};

Group19.propTypes = {
  text: PropTypes.string,
};
