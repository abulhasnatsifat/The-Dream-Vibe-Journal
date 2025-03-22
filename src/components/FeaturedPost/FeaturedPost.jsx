import  { useEffect, useState } from 'react';
import './FeaturedPost.css';
import Thumbnail from './Thumbnail/Thumbnail';

const FeaturedPost = () => {
  const [countdown, setCountdown] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='featured-post' aria-label='Featured system update notification'>
      <div className='featured-content'>
        <div className='featured-text'>
          <h1 className='featured-title' aria-label='Important System Update'>Important System Update</h1>
          <p className='featured-description' aria-label='Update details'>Attention all administrators, we are scheduled to perform essential system updates tonight at 12:00 PM. During this maintenance window, the platform will be temporarily unavailable for up to 2 hours. Please ensure all critical tasks are completed before the downtime begins. We apologize for any inconvenience and appreciate your understanding.</p>
          <p className='update-time'>Update Time: 12:00 PM - 1:00 AM</p>
          <p className='countdown'>Time remaining: {formatTime(countdown)}</p>
          <p className='featured-note'>Please make sure to save your work and log out before the maintenance begins.</p>
        </div>
        <Thumbnail />
      </div>
    </div>
  );
};

export default FeaturedPost;