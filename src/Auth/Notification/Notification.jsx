import  { useState } from 'react';
import './Notification.css';
import photo1 from '../../assets/Profile/Photos/photo1.jpg';
import photo2 from '../../assets/Profile/Photos/photo2.jpg';
import photo3 from '../../assets/Profile/Photos/photo3.jpg';
import photo4 from '../../assets/Profile/Photos/photo4.jpg';
import photo5 from '../../assets/Profile/Photos/photo5.jpg';
import photo6 from '../../assets/Profile/Photos/photo6.jpg';
import photo7 from '../../assets/Profile/Photos/photo7.jpg';
import photo8 from '../../assets/Profile/Photos/photo8.jpg';
import Homeicon from '../../assets/Author/home.svg';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 8,
      profilePic: photo8,
      message: 'John Doe accepted your friend request',
      type: 'friend-request-accept',
      timestamp: 'Just now',
      unread: true
    },
    {
      id: 1,
      profilePic: photo1,
      message: 'John Doe sent you a friend request',
      type: 'friend-request',
      timestamp: 'Just now',
      unread: true
    },
    {
      id: 2,
      profilePic: photo2,
      message: 'Jane Smith liked your post',
      type: 'like',
      timestamp: '2 hours ago',
      unread: true
    },
    {
      id: 3,
      profilePic: photo3,
      message: 'You were mentioned in a comment',
      type: 'mention',
      timestamp: '3 hours ago',
      unread: true
    },
    {
      id: 4,
      profilePic: photo4,
      message: 'Michael Brown viewed your profile',
      type: 'profile-view',
      timestamp: '1 hour ago',
      unread: true
    },

    {
      id: 5,
      profilePic: photo5,
      message: 'Michael Brown commented on your post',
      type: 'comment',
      timestamp: '2 days ago',
      unread: true
    },
    {
      id: 6,
      profilePic: photo6,
      message: 'Emily Davis shared your post',
      type: 'share',
      timestamp: '3 days ago',
      unread: true
    },
    {
      id: 7,
      profilePic: photo7,
      message: 'David Wilson started following you',
      type: 'follow',
      timestamp: '4 days ago',
      unread: true
    },

  ]);

  const [filter, setFilter] = useState('all');

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter(n => n.type === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  const handleMarkAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'friend-request': return '👤';
      case 'like': return '❤️';
      case 'comment': return '💬';
      case 'mention': return '📌';

      case 'follow': return '➕';
      case 'friend-request-accept': return '🤝';
      case 'share': return '🔗';
      case 'profile-view': return '👀';
      default: return null;
    }
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Notifications</h2>     <button 
          className="read-more-button" 
          onClick={() => window.location.href=`/home`}
        >
          <img src={Homeicon} alt="Home" style={{ width: '20px', height: '20px' }} /> Back To Home
        </button>
        <select
          className="notification-filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="friend-request">Friend Requests</option>
          <option value="like">Likes</option>
          <option value="comment">Comments</option>
          <option value="mention">Mentions</option>

          <option value="follow">Follows</option>
          <option value="friend-request-accept">Friend Request Accepts</option>
          <option value="profile-view">Profile Views</option>
        </select>
        <button 
          className="notification-action-button"
          onClick={handleMarkAllAsRead}
        >
          Mark All as Read
        </button>
    
      </div>

      {filteredNotifications.map(notification => (
        <div 
          key={notification.id} 
          className={`notification-card ${notification.unread ? 'notification-unread' : ''}`}
        >
          <img 
            src={notification.profilePic} 
            alt="Profile" 
            className="notification-profile-pic"
          />
          <div className="notification-content">
            <div className="notification-message">
              {getNotificationIcon(notification.type)} {notification.type === 'friend-request' || notification.type === 'follow' || notification.type === 'friend-request-accept' || notification.type === 'profile-view' ? (<a href={`/profile/?id=${notification.id}`}>{notification.message}</a>) : (notification.type === 'like' || notification.type === 'comment' || notification.type === 'mention' || notification.type === 'share' ? (<a href={`/postview/${notification.id}`}>{notification.message}</a>) : notification.message)}
            </div>
            <div className="notification-timestamp">
              {notification.timestamp}
            </div>
          </div>
          {notification.unread && (
            <button 
              className="notification-action-button"
              onClick={() => handleMarkAsRead(notification.id)}
            >
              Mark as Read
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notification;