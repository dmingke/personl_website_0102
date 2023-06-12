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
}) => {
  return (
    <div className="frame" style={style}>
      <div className="poster-design" style={posterDesignStyle}>
        {text}
      </div>
      <p className="tools-adobe" style={toolsAdobeStyle}>
        {text1}
      </p>
      <p className="project-information">{text2}</p>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
