import React from 'react';
import './DualRingLoader.css'; // CSS file for styling

const DualRingLoader = ({ size = 40, color = '#000' }) => {
    const ringStyle = {
        width: size,
        height: size,
    };

    return (
        <div className="dual-ring-loader" style={ringStyle} data-testid="dual-ring-loader">
            <div className="dual-ring" style={{ borderColor: `${color} transparent ${color} transparent` }}></div>
        </div>
    );
};

export default DualRingLoader;
