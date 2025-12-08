import React, { useState } from 'react';
import MoodTracker from '../components/diary/MoodTracker';
import SymptomLog from '../components/diary/SymptomLog';
import SmartLogSheet from '../components/diary/SmartLogSheet';
import './Dashboard.css'; // Reusing layout
import './Diary.css';

const Diary = () => {
    const [isLogOpen, setIsLogOpen] = useState(false);
    const [activeMeal, setActiveMeal] = useState('');

    const openLog = (meal) => {
        setActiveMeal(meal);
        setIsLogOpen(true);
    };

    return (
        <div className="dashboard-container">
            {/* Header/Date Nav */}
            <div className="date-nav">
                <button className="nav-arrow">‹</button>
                <div className="current-date">
                    <span className="day">Today</span>
                    <span className="full-date">Dec 7</span>
                </div>
                <button className="nav-arrow">›</button>
            </div>

            {/* Daily Summary */}
            <div className="summary-card glass-panel">
                <div className="macro-ring">
                    <span className="cals-rem">1,250</span>
                    <span className="cals-label">kcal left</span>
                </div>
                <div className="macros-row">
                    <div className="macro-item"><span className="dot pro"></span>120g P</div>
                    <div className="macro-item"><span className="dot carb"></span>150g C</div>
                    <div className="macro-item"><span className="dot fat"></span>60g F</div>
                </div>
            </div>

            {/* Meal Slots */}
            <h3 className="section-title">Meals</h3>
            {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
                <div key={meal} className="meal-card" onClick={() => openLog(meal)}>
                    <div className="meal-header">
                        <h4>{meal}</h4>
                        <button className="add-btn-mini">+</button>
                    </div>
                    <div className="empty-state">
                        Tap to log food
                    </div>
                </div>
            ))}

            <h3 className="section-title">Daily Check-in</h3>
            <MoodTracker />
            <SymptomLog />

            {/* Height spacer for bottom nav */}
            <div style={{ height: '80px' }}></div>

            <SmartLogSheet
                isOpen={isLogOpen}
                onClose={() => setIsLogOpen(false)}
                mealType={activeMeal}
            />
        </div>
    );
};

export default Diary;
