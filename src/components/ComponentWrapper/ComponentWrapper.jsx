/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComponentWrapper = ({
  className,
  text = "Project Type",
  usabilityNeedsAndClassName,
  text1 = "Usability Needs And Evaluation Course Project",
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <div className="project-type">{text}</div>
      <p className={`usability-needs-and ${usabilityNeedsAndClassName}`}>{text1}</p>
    </div>
  );
};

ComponentWrapper.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
