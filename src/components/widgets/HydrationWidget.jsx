import React, { useState } from 'react';
import GuttieCharacter from '../GuttieCharacter';
import './HydrationWidget.css';

const HydrationWidget = () => {
    const [glasses, setGlasses] = useState(0);
    const goal = 8;

    const addGlass = () => {
        if (glasses < goal) setGlasses(glasses + 1);
    };

    const progress = (glasses / goal) * 100;

    return (
        <div className="hydration-widget glass-panel">
            <div className="hydration-header">
                <h3>Daily Hydration</h3>
                <span className="counter">{glasses}/{goal} Glasses</span>
            </div>

            <div className="hydration-content">
                <div className="guttie-mini-preview">
                    {/* Mini Guttie reacting to water */}
                    <div className={`mini-guttie ${glasses === goal ? 'celebrating' : ''}`}>
                        <GuttieCharacter className="scale-dict" />
                    </div>
                </div>

                <div className="water-controls">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <button className="add-water-btn" onClick={addGlass} disabled={glasses >= goal}>
                        + 💧
                    </button>
                </div>
            </div>
            {glasses === goal && <p className="success-msg">Great job! You reached your goal!</p>}
        </div>
    );
};

export default HydrationWidget;
