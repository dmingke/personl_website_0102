import React, { useRef } from 'react';
import './style.css';

export const Carousel = ({ contents }) => {
  const scrollAmount = 400; // You might need to adjust this value according to the width of your cards
  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += scrollAmount;
  };

  return (
    <div className='carousel-container'>
      <button className='arrow-left' onClick={scrollLeft}>
        <div className='vector-wrapper'>
          <img className='vector-1' alt='Vector' src='/img/vector-4-1.png' />
        </div>
      </button>
      <div className='carousel-contents' ref={carouselRef}>
        {contents.map((content, index) => (
          <div key={index} className='carousel-item'>
            {content}
          </div>
        ))}
      </div>
      <button className='arrow-right' onClick={scrollRight}>
        <div className='vector-wrapper'>
          <img className='vector-2' alt='Vector' src='/img/vector-4-1.png' />
        </div>
      </button>
    </div>
  );
};
