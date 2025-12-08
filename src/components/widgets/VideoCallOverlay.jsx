import React, { useState, useEffect } from 'react';
import './VideoCallOverlay.css';

const VideoCallOverlay = ({ onClose }) => {
    const [status, setStatus] = useState('connecting'); // connecting, connected
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Simulate connection delay
        const timer = setTimeout(() => {
            setStatus('connected');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (status === 'connected') {
            const interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [status]);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="video-overlay">
            {status === 'connecting' ? (
                <div className="connecting-screen">
                    <div className="avatar-pulse">
                        <img src="/src/assets/emily_avatar.jpg" alt="Emily" />
                    </div>
                    <h3>Connecting to Emily...</h3>
                    <p>Secure Video Session</p>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            ) : (
                <div className="call-screen">
                    <div className="remote-video">
                        <img src="/src/assets/emily.jpg" alt="Emily Video" className="remote-img" />
                        <div className="overlay-gradient"></div>
                        <div className="call-info">
                            <h3>Emily Torres-Medaglia RDN</h3>
                            <span className="call-timer">{formatTime(seconds)}</span>
                        </div>
                    </div>

                    <div className="self-view">
                        <div className="self-placeholder">You</div>
                    </div>

                    <div className="call-controls">
                        <button className="control-btn mute">🎤</button>
                        <button className="control-btn end-call" onClick={onClose}>📞</button>
                        <button className="control-btn video">📹</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCallOverlay;
