/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  text = "Courses Poster Design",
  text1 = "Tools: Adobe Photoshop, Adobe Color",
  text2 = "Project information: used for UMICH Spring/Summer courses and UMICH biological station website construction",
  toolsAdobeClassName,
  projectInformationClassName,
  hasCoursesPoster = true,
}) => {
  return (
    <div className={`frame ${className}`}>
      {hasCoursesPoster && <div className="courses-poster">{text}</div>}

      <p className={`tools-adobe ${toolsAdobeClassName}`}>{text1}</p>
      <p className={`project-information ${projectInformationClassName}`}>{text2}</p>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasCoursesPoster: PropTypes.bool,
};
