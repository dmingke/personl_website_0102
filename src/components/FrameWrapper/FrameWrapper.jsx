/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const FrameWrapper = ({
  style,
  polygonStyle,
  polygon = "/img/polygon-1-5.png",
  mainPageStyle,
  text = "Main Page",
  to,
}) => {
  return (
    <Link className="frame-wrapper" style={style} to={to}>
      <img className="polygon" style={polygonStyle} alt="Polygon" src={polygon} />
      <div className="main-page" style={mainPageStyle}>
        {text}
      </div>
    </Link>
  );
};

FrameWrapper.propTypes = {
  polygon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};
