import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function HoverEffect({ src, alt, className, to}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <Link to={to}>
        <div 
            className={`image-container ${isHovered ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className={className} src={src} alt={alt}/>
        </div>
    </Link>
    );
}

export default HoverEffect;
