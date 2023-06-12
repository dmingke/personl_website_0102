import React, { useState, useEffect } from "react";
import "./style.css";


export const Group = ({ style }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="group" style={style} onClick={scrollToTop}>
      <img className="vector" alt="Vector" src="/img/vector-1.png" />
      <div className="top">Top</div>
    </div>
  );
};

