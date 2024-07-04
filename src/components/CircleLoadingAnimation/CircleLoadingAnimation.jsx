import React from 'react';
import './CircleLoadingAnimation.css'; // CSS file for styling (create this next)

const CircleLoadingAnimation = ({ size = 40, color = '#000' }) => {
    const circleStyle = {
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: 'transparent'
    };

    return (
        <div className="circle-loading-animation">
            <div className="circle" style={circleStyle}></div>
        </div>
    );
};

export default CircleLoadingAnimation;
