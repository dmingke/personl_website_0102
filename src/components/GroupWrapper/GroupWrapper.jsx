import React from "react";
import "./style.css";

export const GroupWrapper = ({ style, overlapGroupStyle, polygonStyle }) => {
  return (
    <div className="group-wrapper" style={style}>
      <div className="overlap-group-2" style={overlapGroupStyle}>
        <div className="group-2">
          <div className="text-wrapper">DESIGN</div>
          <img className="img" style={polygonStyle} alt={"Polygon"} src={"/img/polygon-1.svg"} />
        </div>
      </div>
    </div>
  );
};
