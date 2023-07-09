import PropTypes from "prop-types";
import React from "react";
import { DivWrapper } from "../DivWrapper";
import { FrameWrapper } from "../FrameWrapper";
import "./style.css";

export const Component = ({
  className,
  frameWrapperPolygonClassName,
  frameWrapperPolygon = "/img/polygon-1-2.png",
  frameWrapperText = "Main Page",
  divWrapperPolygon = "/img/polygon-1-3.png",
  divWrapperPolygonClassName,
  to,
  to1,
}) => {
  return (
    <div className={`component ${className}`}>
      <FrameWrapper
        className="frame-258"
        mainPageClassName="frame-instance"
        polygon={frameWrapperPolygon}
        polygonClassName={frameWrapperPolygonClassName}
        text={frameWrapperText}
        to={to}
      />
      <DivWrapper
        className="frame-262"
        polygon={divWrapperPolygon}
        polygonClassName={divWrapperPolygonClassName}
        text="UX Research - Student Travel"
        to={to1}
      />
    </div>
  );
};

Component.propTypes = {
  frameWrapperPolygon: PropTypes.string,
  frameWrapperText: PropTypes.string,
  divWrapperPolygon: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
