import React, { useState } from 'react';
import './SmartLog.css';

const SmartLogSheet = ({ isOpen, onClose, mealType }) => {
    if (!isOpen) return null;

    return (
        <div className="smart-log-overlay">
            <div className="smart-log-sheet">
                <div className="sheet-handle"></div>

                <div className="sheet-header">
                    <h3>Log {mealType}</h3>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search food (e.g. Avocado Toast)" autoFocus />
                    <button className="barcode-btn">||||</button>
                </div>

                <div className="quick-add-section">
                    <h4>Recent</h4>
                    <div className="recent-item">
                        <span className="icon">🥣</span>
                        <div className="info">
                            <span className="name">Oatmeal & Berries</span>
                            <span className="cals">350 kcal</span>
                        </div>
                        <button className="add-btn">+</button>
                    </div>
                </div>

                <div className="camera-section">
                    <button className="snap-btn">
                        📷 Snap & Track
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SmartLogSheet;
