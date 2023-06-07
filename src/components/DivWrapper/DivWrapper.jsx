import React from "react";
import "./style.css";

export const DivWrapper = ({ style, overlapGroupStyle, polygonStyle }) => {
  return (
    <div className="div-wrapper" style={style}>
      <div className="overlap-group-3" style={overlapGroupStyle}>
        <div className="research-2">RESEARCH</div>
        <img className="polygon-2" style={polygonStyle} alt={"Polygon"} src={"/img/polygon-1.svg"} />
      </div>
    </div>
  );
};
