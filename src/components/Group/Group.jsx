import React from "react";
import "./style.css";

export const Group = ({ style, polygonStyle, onMouseEnter }) => {
  return (
    <div className="group" style={style} onMouseEnter={onMouseEnter}>
      <div className="overlap-group">
        <div className="div">
          <div className="programming">PROGRAMMING</div>
          <img className="polygon" style={polygonStyle} alt={"Polygon"} src={"/img/polygon-1.svg"} />
        </div>
      </div>
    </div>
  );
};
