import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({ style }) => {
  return (
    <Link className="button" style={style} to={"/resumezhong"}>
      <div className="overlap-group-4">
        <div className="rectangle" />
        <div className="frame">
          <div className="element">中文</div>
          <div className="english">English</div>
        </div>
      </div>
    </Link>
  );
};
