import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonDefault = ({ style }) => {
  return (
    <Link className="button-default" style={style} to={"/resume"}>
      <div className="overlap-group-5">
        <div className="rectangle-2" />
        <div className="frame-2">
          <div className="element-2">中文</div>
          <div className="english-2">English</div>
        </div>
      </div>
    </Link>
  );
};
