import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FrameNew = ({
  className,
  text = "Courses Poster Design",
  text1 = "Tools: Adobe Photoshop, Adobe Color",
  text2 = "Project information: used for UMICH Spring/Summer courses and UMICH biological station website construction",
  toolsAdobeClassName,
  projectInformationClassName,
  hasCoursesPoster = true,
}) => {
  return (
    <div className={`framenew ${className}`}>
      {hasCoursesPoster && <div className="courses-poster">{text}</div>}

      <p className={`tools-adobe ${toolsAdobeClassName}`}>{text1}</p>
      <p className={`project-information ${projectInformationClassName}`}>{text2}</p>
    </div>
  );
};

FrameNew.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasCoursesPoster: PropTypes.bool,
};
