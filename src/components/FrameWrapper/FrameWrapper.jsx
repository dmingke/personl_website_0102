/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const FrameWrapper = ({
  className,
  polygonClassName,
  polygon = "/img/polygon-1-5.png",
  mainPageClassName,
  text = "Main Page",
  to,
}) => {
  return (
    <Link className={`frame-wrapper ${className}`} to={to}>
      <img className={`polygon ${polygonClassName}`} alt="Polygon" src={polygon} />
      <div className={`main-page ${mainPageClassName}`}>{text}</div>
    </Link>
  );
};

FrameWrapper.propTypes = {
  polygon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};
