import React, { useEffect, useState } from 'react';
import './Thumbnail.css';
import thumbnailImage from '../../../assets/FeaturedPost/featured-thumbnail.jpg';

const Thumbnail = () => {
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate receiving a notification
      setHasNotification(prev => !prev);
    }, 5000); // Toggle notification every 5 seconds for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='thumbnail'>
      <img src={thumbnailImage} alt='Featured Thumbnail' className='thumbnail-image' />
      <div className={`notification-icon animated-icon ${hasNotification ? 'active' : ''}`} aria-label='Live notification'>🔔</div>
    </div>
  );
};

export default Thumbnail;
