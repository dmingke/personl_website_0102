import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  style,
  text = "Project Type",
  usabilityNeedsAndStyle,
  text1 = "Usability Needs And Evaluation Course Project",
}) => {
  return (
    <div className="component" style={style}>
      <div className="project-type">{text}</div>
      <p className="usability-needs-and" style={usabilityNeedsAndStyle}>
        {text1}
      </p>
    </div>
  );
};

Component.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
