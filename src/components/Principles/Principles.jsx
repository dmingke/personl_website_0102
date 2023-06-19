import PropTypes from "prop-types";
import React from "react";
import { SeverityWrapper } from "../SeverityWrapper";
import "./style.css";

export const Principles = ({
  style,
  text = "(The system should always keep users informed about what is going on, through appropriate feedback within reasonable time)",
  text1 = "Description of the violation",
  text2 = "Recommendation",
  override = (
    <SeverityWrapper
      style={{
        minWidth: "76px",
        position: "relative",
        width: "unset",
      }}
      text="0"
    />
  ),
  text3 = "1. Visibility of system status",
}) => {
  return (
    <div className="principles" style={style}>
      <div className="principle">
        <p className="element-visibility-of">{text3}</p>
        <p className="description">{text}</p>
      </div>
      <div className="description-of-the">{text1}</div>
      <div className="recommendation-2">{text2}</div>
      {override}
    </div>
  );
};

Principles.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
