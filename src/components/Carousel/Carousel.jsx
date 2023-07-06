import React, { useState } from 'react';

const Carousel = ({ contents }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goRight = () => {
        if (currentIndex < contents.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="carousel-container">
            <button className="arrow-left" onClick={goLeft}>
                {"<"}
            </button>
            {contents[currentIndex]}
            <button className="arrow-right" onClick={goRight}>
                {">"}
            </button>
        </div>
    );
};

export default Carousel;
