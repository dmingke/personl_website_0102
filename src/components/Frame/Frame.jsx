/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  style,
  text = "Poster Design",
  toolsAdobeStyle,
  text1 = "Tools: Adobe Photoshop, Adobe Color",
  text2 = "Project information: used for UMICH Spring/Summer courses and <br/>UMICH biological station website construction",
  posterDesignStyle,
  hasPosterDesign = true,
  projectInformationStyle,
}) => {
  return (
    <div className="frame" style={style}>
      {hasPosterDesign && (
        <div className="poster-design" style={posterDesignStyle}>
          {text}
        </div>
      )}

      <p className="tools-adobe" style={toolsAdobeStyle}>
        {text1}
      </p>
      <p className="project-information" style={projectInformationStyle}>
        {text2}
      </p>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  hasPosterDesign: PropTypes.bool,
};
