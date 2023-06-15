import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavigationBar = ({ style, to, to1, to2, to3, to4 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navigation-bar" style={style}>
      <div className="div">
        <Link className="mingke-dai" to={to}>
          MINGKE DAI
        </Link>
        <Link className="text-wrapper" to={to1}>
          RESUME
        </Link>
        <div
          className="dropdown-wrapper"
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <button className="work-button">Work</button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/web-dev">Web Development</Link>
              <Link to="/communieat">UI/UX Design: Communieat</Link>
              <Link to="/freeze">UI/UX Design: FREEZE</Link>
              <Link to="/ux-research">UX Research: Expedia</Link>
              <Link to="/1cademy">1Cademy</Link>
            </div>
          )}
        </div>
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
  style: PropTypes.object,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
};
