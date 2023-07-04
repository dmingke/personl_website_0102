/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = ({
  className,
  text = "UX Research - Student Travel",
  polygonClassName,
  polygon = "/img/polygon-1-3.png",
  to,
}) => {
  return (
    <Link className={`div-wrapper ${className}`} to={to}>
      <p className="next-project-UX">
        <span className="span">
          Next Project:
          <br />
        </span>
        <span className="text-wrapper-2">{text}</span>
      </p>
      <img className={`img ${polygonClassName}`} alt="Polygon" src={polygon} />
    </Link>
  );
};

DivWrapper.propTypes = {
  text: PropTypes.string,
  polygon: PropTypes.string,
  to: PropTypes.string,
};
