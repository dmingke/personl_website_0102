/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({ className }) => {
  return (
    <Link className={`button ${className}`} to="/resumezhong">
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="frame-2">
          <div className="element">中文</div>
          <div className="english">English</div>
        </div>
      </div>
    </Link>
  );
};
