import React from 'react';
import './PulseLoader.css';

const PulseLoader = ({ size = 15, color = '#fff' }) => {
    const pulseStyle = {
        width: size,
        height: size,
        backgroundColor: 'transparent',
        borderColor: color
    };

    return (
        <div className="pulse-loader" data-testid="pulse-loader">
            <div className="pulses" style={pulseStyle}></div>
            <div className="pulses" style={pulseStyle}></div>
            <div className="pulses" style={pulseStyle}></div>
        </div>
    );
};

export default PulseLoader;
