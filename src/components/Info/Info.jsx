import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Info = ({ style, text = "Evaluator Name", text1 = "Evaluator Name:" }) => {
  return (
    <div className="info" style={style}>
      <div className="auto">
        <div className="evaluator-name">{text1}</div>
        <div className="evaluator-name-2">{text}</div>
      </div>
    </div>
  );
};

Info.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
