import React, { useRef, useEffect } from 'react';
import './VideoPlayerOverlay.css';

const VideoPlayerOverlay = ({ videoSrc, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
        }
    }, []);

    return (
        <div className="video-player-overlay">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    controls
                    className="fullscreen-video"
                    autoPlay
                    muted
                />
            </div>
        </div>
    );
};

export default VideoPlayerOverlay;
