import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionCard from '../components/profile/SubscriptionCard';
import SettingsToggle from '../components/profile/SettingsToggle';
import './Dashboard.css'; // Common layout
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: 'Guest', goal: 'Wellness', email: '' });

    useEffect(() => {
        const stored = localStorage.getItem('gutti_user_profile');
        if (stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    const handleLogout = () => {
        // Clear onboarding to show wizard again? Or just clear user?
        // Let's just navigate to signup for "Edit Profile" simulation
        navigate('/signup');
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <h2 style={{ marginBottom: 20, fontSize: '1.8rem', color: 'var(--color-primary-dark)' }}>My Profile</h2>

            <div className="profile-header">
                <div className="profile-avatar-xl">
                    <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}`} alt="Profile" />
                </div>
                <div className="profile-details">
                    <h3>{user.name}</h3>
                    <p className="member-since">Goal: <strong>{user.goal}</strong></p>
                    <div className="stats-row">
                        <div className="stat">🔥 3 Day Streak</div>
                    </div>
                </div>
            </div>

            <h3 className="section-title">Membership</h3>
            <SubscriptionCard />

            <h3 className="section-title">Preferences</h3>

            <h4 style={{ margin: '15px 0 10px', color: '#64748b', fontSize: '0.9rem' }}>Notifications</h4>
            <div className="settings-group">
                <SettingsToggle label="Meal Reminders" icon="🥣" initialValue={true} />
                <SettingsToggle label="Hydration Nudges" icon="💧" initialValue={true} />
                <SettingsToggle label="Daily Weigh-in" icon="⚖️" initialValue={false} />
            </div>

            <h4 style={{ margin: '20px 0 10px', color: '#64748b', fontSize: '0.9rem' }}>General</h4>
            <div className="settings-group">
                <SettingsToggle label="Use Metric Units (kg/ml)" icon="📏" initialValue={false} />
                <SettingsToggle label="Sync Apple Health" icon="❤️" initialValue={true} />
                <SettingsToggle label="Share Data with RDN" icon="🩺" initialValue={true} />
            </div>

            <button className="logout-btn" onClick={handleLogout} style={{ marginTop: 30 }}>Edit Profile / Sign Out</button>

            {/* Height spacer for bottom nav */}
            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Profile;
