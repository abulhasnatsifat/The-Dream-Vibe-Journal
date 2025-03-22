import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Friends.css';
// Import profile photos
import photo1 from '../../../assets/Profile/Photos/photo1.jpg';
import photo2 from '../../../assets/Profile/Photos/photo2.jpg';
import photo3 from '../../../assets/Profile/Photos/photo3.jpg';
import photo4 from '../../../assets/Profile/Photos/photo4.jpg';
import photo5 from '../../../assets/Profile/Photos/photo5.jpg';
import photo6 from '../../../assets/Profile/Photos/photo6.jpg';
import photo7 from '../../../assets/Profile/Photos/photo7.jpg';
import photo8 from '../../../assets/Profile/Photos/photo8.jpg';

// Add prop types for the StatusIcon component
const StatusIcon = ({ status }) => {
  const statusConfig = {
    online: { icon: '●', color: '#28a745', title: 'Online' },
    away: { icon: '◐', color: '#ffc107', title: 'Away' },
    offline: { icon: '○', color: '#6c757d', title: 'Offline' }
  };

  const config = statusConfig[status];
  return (
    <span 
      className={`status-icon ${status}`}
      title={config.title}
      style={{ color: config.color }}
    >
      {config.icon}
    </span>
  );
};

StatusIcon.propTypes = {
  status: PropTypes.oneOf(['online', 'away', 'offline']).isRequired
};

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showMutualModal, setShowMutualModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendRequests, setFriendRequests] = useState([]);
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const [page, setPage] = useState(1);
  const [loading] = useState(false);
  const [hasMore] = useState(true);
  const [pinnedFriends, setPinnedFriends] = useState([]);
  const [itemsPerPage] = useState(8);
  const observer = useRef();

  useEffect(() => {
    // Enhanced mock friends data with status and friendship details
    const mockFriends = [
      { 
        id: 1, 
        name: 'John Doe', 
        status: 'online', // 'online', 'away', 'offline'
        lastActive: new Date().toISOString(),
        dateAdded: '2024-03-20', 
        mutualFriends: 5,
        photo: photo1,
        categories: ['Family', 'School'],
        friendshipMilestones: [
          { type: 'friendship_started', date: '2024-03-20' },
          { type: 'first_message', date: '2024-03-21' }
        ]
      },
      { 
        id: 2, 
        name: 'Jane Smith', 
        status: 'away',
        lastActive: '2024-03-25T15:30:00',
        dateAdded: '2024-03-19', 
        mutualFriends: 3,
        photo: photo2,
        categories: ['Work'],
        friendshipMilestones: [
          { type: 'friendship_started', date: '2024-03-19' }
        ]
      },
      { 
        id: 3, 
        name: 'Mike Johnson', 
        status: 'online',
        lastActive: new Date().toISOString(),
        dateAdded: '2024-03-18', 
        mutualFriends: 7,
        photo: photo3,
        categories: ['School']
      },
      { 
        id: 4, 
        name: 'Sarah Williams', 
        status: 'online',
        lastActive: new Date().toISOString(),
        dateAdded: '2024-03-17', 
        mutualFriends: 4,
        photo: photo4,
        categories: ['Family']
      },
      { 
        id: 5, 
        name: 'David Brown', 
        status: 'offline',
        dateAdded: '2024-03-16', 
        mutualFriends: 2,
        photo: photo5,
        categories: ['Work', 'School']
      },
      { 
        id: 6, 
        name: 'Emma Davis', 
        status: 'online',
        lastActive: new Date().toISOString(),
        dateAdded: '2024-03-15', 
        mutualFriends: 6,
        photo: photo6,
        categories: ['Family']
      },
      { 
        id: 7, 
        name: 'James Wilson', 
        status: 'offline',
        dateAdded: '2024-03-14', 
        mutualFriends: 8,
        photo: photo7,
        categories: ['Work']
      },
      { 
        id: 8, 
        name: 'Lisa Anderson', 
        status: 'online',
        lastActive: new Date().toISOString(),
        dateAdded: '2024-03-13', 
        mutualFriends: 5,
        photo: photo8,
        categories: ['School', 'Work']
      }
    ];
    setFriends(mockFriends);

    // Mock friend requests data
    const mockFriendRequests = [
      {
        id: 9,
        name: 'Alex Thompson',
        photo: photo1,
        mutualFriends: 4,
        requestDate: '2024-03-21',
        mutualFriendsList: [
          { id: 1, name: 'John Doe', photo: photo1 },
          { id: 2, name: 'Jane Smith', photo: photo2 },
        ]
      },
      {
        id: 10,
        name: 'Maria Garcia',
        photo: photo2,
        mutualFriends: 6,
        requestDate: '2024-03-20',
        mutualFriendsList: [
          { id: 3, name: 'Mike Johnson', photo: photo3 },
          { id: 4, name: 'Sarah Williams', photo: photo4 },
        ]
      }
    ];

    // Mock suggested friends based on mutual connections
    const mockSuggestedFriends = [
      {
        id: 11,
        name: 'Chris Wilson',
        photo: photo3,
        mutualFriends: 8,
        mutualFriendsList: [
          { id: 1, name: 'John Doe', photo: photo1 },
          { id: 2, name: 'Jane Smith', photo: photo2 },
        ]
      },
      {
        id: 12,
        name: 'Emily Brown',
        photo: photo4,
        mutualFriends: 5,
        mutualFriendsList: [
          { id: 3, name: 'Mike Johnson', photo: photo3 },
          { id: 4, name: 'Sarah Williams', photo: photo4 },
        ]
      }
    ];

    setFriendRequests(mockFriendRequests);
    setSuggestedFriends(mockSuggestedFriends);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Family', 'Work', 'School'];


  const filteredFriends = friends.filter(friend => {
    const matchesSearch = friend.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || friend.categories.includes(selectedCategory);
    
    let matchesFilter = true;
    switch (filterType) {
      case 'online':
        matchesFilter = friend.status === 'online';
        break;
      case 'recent': {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        matchesFilter = new Date(friend.dateAdded) >= oneWeekAgo;
        break;
      }
      case 'mutual':
        matchesFilter = friend.mutualFriends > 0;
        break;
      default:
        break;
    }
    
    return matchesSearch && matchesCategory && matchesFilter;
  });

  const showMutualFriends = (friend) => {
    setSelectedFriend(friend);
    setShowMutualModal(true);
  };

  const MutualFriendsModal = () => {
    if (!selectedFriend) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowMutualModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Mutual Friends with {selectedFriend.name}</h3>
            <button className="close-btn" onClick={() => setShowMutualModal(false)}>×</button>
          </div>
          <div className="mutual-friends-grid">
            {selectedFriend.mutualFriendsList.map(friend => (
              <div key={friend.id} className="mutual-friend-item">
                <img src={friend.photo} alt={friend.name} />
                <Link to={`/profile?id=${friend.id}`}><p>{friend.name}</p></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Add a section for friends with most mutual connections
  const topMutualFriends = [...friends]
    .sort((a, b) => b.mutualFriends - a.mutualFriends)
    .slice(0, 4);

  const handleFriendRequest = (requestId, action) => {
    setFriendRequests(prev => prev.filter(request => request.id !== requestId));
    
    if (action === 'accept') {
      const acceptedFriend = friendRequests.find(request => request.id === requestId);
      setFriends(prev => [...prev, {
        ...acceptedFriend,
        status: 'offline',
        lastActive: new Date().toISOString(),
        categories: []
      }]);
    }
  };

  const handleAddFriend = (suggestedId) => {
    console.log(`Sent friend request to ${suggestedId}`);
    setSuggestedFriends(prev => prev.filter(friend => friend.id !== suggestedId));
  };

  // Add these new components before the main return statement
  const FriendRequestsSection = () => (
    <div className="friend-requests-section">
      <h2>Friend Requests ({friendRequests.length})</h2>
      <div className="requests-grid">
        {friendRequests.map(request => (
          <div key={request.id} className="request-card">
            <div className="friend-photo">
              <img src={request.photo} alt={request.name} />
            </div>
            <div className="request-info">
              <Link to={`/profile?id=${request.id}`}><h3>{request.name}</h3></Link>
              <button 
                className="mutual-count-btn"
                onClick={() => showMutualFriends(request)}
              >
                {request.mutualFriends} mutual friends
              </button>
              <p className="request-date">Requested on {new Date(request.requestDate).toLocaleDateString()}</p>
            </div>
            <div className="request-actions">
              <button 
                className="accept-btn"
                onClick={() => handleFriendRequest(request.id, 'accept')}
              >
                Accept
              </button>
              <button 
                className="decline-btn"
                onClick={() => handleFriendRequest(request.id, 'decline')}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SuggestedFriendsSection = () => (
    <div className="suggested-friends-section">
      <h2>Suggested Friends</h2>
      <div className="suggested-grid">
        {suggestedFriends.map(friend => (
          <div key={friend.id} className="suggested-card">
            <div className="friend-photo">
              <img src={friend.photo} alt={friend.name} />
            </div>
            <div className="suggested-info">
              <Link to={`/profile/${friend.id}`}><Link to={`/profile?id=${friend.id}`}><h3>{friend.name}</h3></Link></Link>
              <button 
                className="mutual-count-btn"
                onClick={() => showMutualFriends(friend)}
              >
                {friend.mutualFriends} mutual friends
              </button>
            </div>
            <button 
              className="add-friend-btn"
              onClick={() => handleAddFriend(friend.id)}
            >
              Add Friend
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Last element ref for infinite scroll
  const lastFriendElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Lazy loading image component
  const LazyImage = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, [src]);

    return (
      <div className={`lazy-image-container ${isLoaded ? 'loaded' : ''}`}>
        <img
          ref={imgRef}
          alt={alt}
          className="friend-photo-img"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // Placeholder
        />
        {!isLoaded && <div className="image-placeholder" />}
      </div>
    );
  };

  LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };

  const togglePinFriend = (friendId) => {
    setPinnedFriends(prev => {
      const isPinned = prev.includes(friendId);
      return isPinned 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId];
    });
  };

  // Sort friends with pinned ones first
  const sortedFriends = [...filteredFriends].sort((a, b) => {
    const aPinned = pinnedFriends.includes(a.id);
    const bPinned = pinnedFriends.includes(b.id);
    if (aPinned && !bPinned) return -1;
    if (!aPinned && bPinned) return 1;
    return 0;
  });

  // Paginate friends
  const paginatedFriends = sortedFriends.slice(0, page * itemsPerPage);

  // Update friends list rendering
  const renderFriendCard = (friend, index) => {
    const isPinned = pinnedFriends.includes(friend.id);
    const isLastElement = index === paginatedFriends.length - 1;

    return (
      <div 
        ref={isLastElement ? lastFriendElementRef : null}
        key={friend.id} 
        className={`friend-card ${isPinned ? 'pinned' : ''}`}
      >
        <div className="friend-photo">
          <LazyImage src={friend.photo} alt={friend.name} />
          <StatusIcon status={friend.status} />
          <button 
            className={`pin-button ${isPinned ? 'pinned' : ''}`}
            onClick={() => togglePinFriend(friend.id)}
            title={isPinned ? 'Unpin friend' : 'Pin friend'}
          >
            📌
          </button>
        </div>
        
        <div className="friend-info">
          <div className="friend-header">
            <Link to={`/profile/${friend.id}`}><Link to={`/profile?id=${friend.id}`}><h3>{friend.name}</h3></Link></Link>
            <StatusIcon status={friend.status} />
          </div>
          
          <div className="friend-status-details">
            {friend.status === 'away' && (
              <p className="last-active">
                Last active: {new Date(friend.lastActive).toLocaleString()}
              </p>
            )}
            <p className="friendship-duration">
              Friends for {formatFriendshipDuration(friend.dateAdded)}
            </p>
          </div>

          <button 
            className="mutual-count-btn"
            onClick={() => showMutualFriends(friend)}
          >
            {friend.mutualFriends} mutual friends
          </button>

          <div className="friend-categories">
            {friend.categories.map(category => (
              <span key={category} className="category-tag">{category}</span>
            ))}
          </div>

          {friend.friendshipMilestones?.length > 0 && (
            <div className="friendship-milestones">
              <span className="milestone-icon">🤝</span>
              <span className="milestone-text">
                Friends since {new Date(friend.friendshipMilestones[0].date).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>


 
      </div>
    );
  };

  // Add friendship duration formatter
  const formatFriendshipDuration = (dateAdded) => {
    const start = new Date(dateAdded);
    const now = new Date();
    const diffMonths = (now.getFullYear() - start.getFullYear()) * 12 + 
      (now.getMonth() - start.getMonth());
    
    if (diffMonths < 1) {
      const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      return `${diffDays} days`;
    } else if (diffMonths < 12) {
      return `${diffMonths} months`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      return remainingMonths > 0 ? 
        `${years} years, ${remainingMonths} months` : 
        `${years} years`;
    }
  };

  return (
    <div className="friends-container">
      {/* Add these sections right after the header */}
      {friendRequests.length > 0 && <FriendRequestsSection />}
      <SuggestedFriendsSection />
      
      <div className="friends-header">
        <input
          type="text"
          placeholder="Search friends..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filterType === 'online' ? 'active' : ''}`}
            onClick={() => setFilterType('online')}
          >
            Online
          </button>
          <button
            className={`filter-btn ${filterType === 'recent' ? 'active' : ''}`}
            onClick={() => setFilterType('recent')}
          >
            Recently Added
          </button>
          <button
            className={`filter-btn ${filterType === 'mutual' ? 'active' : ''}`}
            onClick={() => setFilterType('mutual')}
          >
            Mutual Friends
          </button>
        </div>
      </div>

      {/* New section for top mutual friends */}
      <div className="mutual-friends-section">
        <h2>Friends You May Know Best</h2>
        <div className="top-mutual-friends">
          {topMutualFriends.map(friend => (
            <div key={friend.id} className="mutual-highlight-card">
              <div className="friend-photo">
                <img src={friend.photo} alt={friend.name} />
                <StatusIcon status={friend.status} />
              </div>
              <div className="friend-info">
                <Link to={`/profile/${friend.id}`}><Link to={`/profile?id=${friend.id}`}><h3>{friend.name}</h3></Link></Link>
                <button 
                  className="mutual-count-btn"
                  onClick={() => showMutualFriends(friend)}
                >
                  {friend.mutualFriends} mutual friends
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main friends list */}
      <h2>All Friends</h2>
      <div className="friends-list">
        {paginatedFriends.map((friend, index) => renderFriendCard(friend, index))}
        {loading && <div className="loading-spinner">Loading...</div>}
      </div>

      {/* Mutual Friends Modal */}
      {showMutualModal && <MutualFriendsModal />}
    </div>
  );
};

export default Friends;
