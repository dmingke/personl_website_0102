import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavigationBar = ({ style, to, to1, to2, to3, to4 }) => {
  return (
    <div className="navigation-bar" style={style}>
      <div className="div">
        <Link className="mingke-dai" to={to}>
          MINGKE DAI
        </Link>
        <Link className="text-wrapper" to={to1}>
          RESUME
        </Link>
        <Link className="programming" to={to2}>
          PROGRAMMING
        </Link>
        <Link className="design-2" to={to3}>
          DESIGN
        </Link>
        <Link className="research-2" to={to4}>
          RESEARCH
        </Link>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
};
