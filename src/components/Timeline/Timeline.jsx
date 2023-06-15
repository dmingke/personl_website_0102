import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./style.css";

export const Timeline = ({ data }) => {
  const [activeId, setActiveId] = useState();

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setActiveId(first.target.id);
        }
      },
      { threshold: 0.6 }
    )
  );
  
  const [elements, setElements] = useState([]);

  useLayoutEffect(() => {
    let elements = data.map((el) => document.getElementById(el.id));
    setElements(elements);
  }, [data]);

  useEffect(() => {
    let observerCurrent = observer.current;

    if (elements) {
      elements.forEach((el) => {
        observerCurrent.observe(el);
      });
    }

    return () => {
      if (elements) {
        elements.forEach((el) => {
          observerCurrent.unobserve(el);
        });
      }
    };
  }, [elements]);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Timeline item ${id} was clicked!`);
  };

  return (
    <div className="App">
      <div className="sidebar">
        {data.map((item) => (
          <button
            onClick={() => handleClick(item.id)}
            className={item.id === activeId ? "active" : ""}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
