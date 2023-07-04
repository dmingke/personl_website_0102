/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupWrapper = ({
  className,
  overlapClassName,
  cClassName,
  text = "C++",
  groupClassName,
  overlapGroupClassName,
  rectangleClassName,
}) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className={`overlap-group-wrapper ${groupClassName}`}>
          <div className={`c-wrapper ${overlapGroupClassName}`}>
            <div className={`c ${cClassName}`}>{text}</div>
          </div>
        </div>
        <div className={`rectangle-2 ${rectangleClassName}`} />
      </div>
    </div>
  );
};

GroupWrapper.propTypes = {
  text: PropTypes.string,
};
