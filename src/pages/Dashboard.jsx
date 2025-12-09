import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HydrationWidget from '../components/widgets/HydrationWidget';
import VideoCallOverlay from '../components/widgets/VideoCallOverlay';
import VideoPlayerOverlay from '../components/widgets/VideoPlayerOverlay';
import mealPlanVideo from '../assets/meal_planning.mp4';
import './Dashboard.css';

import logoImg from '../assets/logo.jpg';
import emilyAvatarImg from '../assets/emily_avatar.jpg';

const Dashboard = () => {
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);
    const [showMealPlanVideo, setShowMealPlanVideo] = useState(false);

    return (
        <div className="dashboard-container">
            {isVideoCallActive && <VideoCallOverlay onClose={() => setIsVideoCallActive(false)} />}
            {showMealPlanVideo && <VideoPlayerOverlay videoSrc={mealPlanVideo} onClose={() => setShowMealPlanVideo(false)} />}

            <div className="header-section">
                <div className="guttie-avatar-logo">
                    <img src={logoImg} alt="Guttie" />
                </div>
                <div className="greeting">
                    <h1>Good Morning!</h1>
                    <p>Let's nourish your body today.</p>
                </div>
            </div>

            {/* Habit Rings Row (Mock visual) */}
            <div className="habit-section">
                <div className="habit-ring ring-blue" style={{ '--p': 80 }}>
                    <span className="icon">💧</span>
                    <span className="label">Water</span>
                </div>
                <div className="habit-ring ring-green" style={{ '--p': 45 }}>
                    <span className="icon">🥗</span>
                    <span className="label">Food</span>
                </div>
                <div className="habit-ring ring-orange" style={{ '--p': 60 }}>
                    <span className="icon">🚶</span>
                    <span className="label">Move</span>
                </div>
            </div>

            {/* Upcoming Appointment */}
            <div className="appointment-card premium-gradient">
                <div className="appt-time">3:00 PM</div>
                <div className="appt-info">
                    <h4>Video Call with RD</h4>
                    <span className="status-badge">In 4 hours</span>
                </div>
                <button className="join-btn" onClick={() => setIsVideoCallActive(true)}>📹</button>
            </div>

            {/* Meet Your Dietitian Banner */}
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <div className="emily-banner glass-panel">
                    <div className="emily-avatar">
                        <img src={emilyAvatarImg} alt="Emily" />
                    </div>
                    <div>
                        <h4 style={{ margin: 0, color: 'var(--color-primary-dark)' }}>Meet Emily RDN</h4>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Your dedicated specialist →</span>
                    </div>
                </div>
            </Link>

            {/* Widgets */}
            <h3 className="section-title">My Daily Goals</h3>
            <HydrationWidget />

            {/* Quick Actions */}
            <h3 className="section-title">Quick Actions</h3>
            <div className="quick-actions-grid">
                <Link to="/diary" className="action-tile glass-panel">
                    <span className="tile-icon">🍎</span>
                    Log Lunch
                </Link>
                <button
                    className="action-tile glass-panel"
                    onClick={() => setShowMealPlanVideo(true)}
                    type="button"
                    style={{ cursor: 'pointer', border: 'none', background: 'rgba(255,255,255,0.7)', fontFamily: 'inherit' }}
                >
                    <span className="tile-icon">🥗</span>
                    Meal Plan
                </button>
                <Link to="/schedule" className="action-tile glass-panel">
                    <span className="tile-icon">📅</span>
                    Schedule
                </Link>
                <Link to="/classes" className="action-tile glass-panel">
                    <span className="tile-icon">🎓</span>
                    Learn
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
