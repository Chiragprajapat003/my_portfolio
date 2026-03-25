import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="scanner"></div>
                <div className="text-container">
                    <span className="tech-text">INITIALIZING SYSTEM...</span>
                    <span className="tech-text sub">LOADING ASSETS</span>
                    <span className="tech-text sub">VERIFYING CREDENTIALS</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
