import React from 'react';
import './DotsLoader.css'; // CSS file for styling

const DotsLoader = ({ size = 15, color = '#000' }) => {
    const dotStyle = {
        width: size,
        height: size,
        backgroundColor: color
    };

    return (
        <div className="dots-loader" data-testid="dots-loader">
            <div className="dot" style={dotStyle}></div>
            <div className="dot" style={dotStyle}></div>
            <div className="dot" style={dotStyle}></div>
        </div>
    );
};

export default DotsLoader;
