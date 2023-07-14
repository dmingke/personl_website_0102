import PropTypes from "prop-types";
import React, { useState } from "react";
import  NavLink from './NavLink';
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
        <NavLink className="mingke-dai" activeClassName="active-tab" to={to}>
          MINGKE DAI
        </NavLink>
        <NavLink className="text-wrapper" activeClassName="active-tab" to={to1}>
          RESUME
        </NavLink>
        <div
          className="dropdown-wrapper"
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
         <button className={`work-button ${isDropdownOpen ? 'upside-down' : ''}`}>
            WORK
            <span className={`dropdown-arrow ${isDropdownOpen ? 'upside-down' : ''}`}></span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <NavLink activeClassName="active-tab" to="/1cademy-overview">1Cademy</NavLink>
              <NavLink activeClassName="active-tab" to="/expedia-students-travel">UX Research: Student travel</NavLink>
              <NavLink activeClassName="active-tab" to="/communieat">UI/UX Design: Communieat</NavLink>
              <NavLink activeClassName="active-tab" to="/web-development">Web Development</NavLink>
              <NavLink activeClassName="active-tab" to="/freeze">UI/UX Design: FREEZE</NavLink>
            </div>
          )}
        </div>
        <NavLink className="programming" activeClassName="active-tab" to={to2}>
          PROGRAMMING
        </NavLink>
        <NavLink className="design-2" activeClassName="active-tab" to={to3}>
          DESIGN
        </NavLink>
        <NavLink className="research-2" activeClassName="active-tab" to={to4}>
          RESEARCH
        </NavLink>
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
