/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = ({
  style,
  polygonStyle,
  polygon = "/img/polygon-1-3.png",
  text = "UX Research - Student Travel",
  to,
}) => {
  return (
    <Link className="div-wrapper" style={style} to={to}>
      <p className="next-project-UX">
        <span className="span">
          Next Project:
          <br />
        </span>
        <span className="text-wrapper-2">{text}</span>
      </p>
      <img className="img" style={polygonStyle} alt="Polygon" src={polygon} />
    </Link>
  );
};

DivWrapper.propTypes = {
  polygon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};
