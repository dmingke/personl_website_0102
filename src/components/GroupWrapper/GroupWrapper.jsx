import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupWrapper = ({ style, cStyle, text = "C++", groupStyle, overlapGroupStyle, rectangleStyle }) => {
  return (
    <div className="group-wrapper" style={style}>
      <div className="overlap">
        <div className="overlap-group-wrapper" style={groupStyle}>
          <div className="c-wrapper" style={overlapGroupStyle}>
            <div className="c" style={cStyle}>
              {text}
            </div>
          </div>
        </div>
        <div className="rectangle-3" style={rectangleStyle} />
      </div>
    </div>
  );
};

GroupWrapper.propTypes = {
  text: PropTypes.string,
};
