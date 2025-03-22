import React from 'react';
import './Cover.css';
import coverPhoto from '../../../assets/Cover/your-cover-photo.jpg'; 
import profilePhoto from '../../../assets/Profile/your-profile-image.jpg'; 
import { FaUserPlus, FaUserCheck, FaEnvelope, FaEllipsisV, FaFlag, FaBan, FaShare, FaBookmark } from 'react-icons/fa';

const Cover = () => {
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [loading, setLoading] = React.useState({ addFriend: false, follow: false });
    const [messagePopupOpen, setMessagePopupOpen] = React.useState(false);
    const [messageText, setMessageText] = React.useState('');
    const [sendingMessage, setSendingMessage] = React.useState(false);
    const [messageSent, setMessageSent] = React.useState(false);

    const handleAddFriend = () => {
        setLoading(prev => ({ ...prev, addFriend: true }));
        // Simulate an async action
        setTimeout(() => setLoading(prev => ({ ...prev, addFriend: false })), 2000);
    };

    const handleFollow = () => {
        setLoading(prev => ({ ...prev, follow: true }));
        // Simulate an async action
        setTimeout(() => setLoading(prev => ({ ...prev, follow: false })), 2000);
    };

    const handleSendMessage = () => {
        if (!messageText.trim()) return;
        setSendingMessage(true);
        // Simulate sending message
        setTimeout(() => {
            setSendingMessage(false);
            setMessageSent(true);
            setTimeout(() => {
                setMessageText('');
                setMessagePopupOpen(false);
                setMessageSent(false);
            }, 1500);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="cover" style={{ width: '100vw' }}>
            <div className='cover-container'>
                <div className='cover-photo-container'>
                    <img src={coverPhoto} alt="Cover" className='cover-photo' style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='cover-photo-container'>
                    <img src={profilePhoto} alt="Profile" className='profile-photo' />
                </div>
                <br/>
                <h1 className="user-name">Hasnat Sifat</h1>
                <p className="user-bio">Admin of The Dream Vibe Journal</p>
                <div className="action-buttons">
                    <button className="add-friend" onClick={handleAddFriend} aria-label="Add Friend">
                        {loading.addFriend ? 'Adding...' : <><FaUserPlus /> Add Friend</>}
                    </button>
                    <button className="follow" onClick={handleFollow} aria-label="Follow">
                        {loading.follow ? 'Following...' : <><FaUserCheck /> Follow</>}
                    </button>
                    <button className="message" onClick={() => setMessagePopupOpen(true)} aria-label="Message"><FaEnvelope /> Message</button>
                    <div className="more-actions" ref={dropdownRef}>
                        <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)} aria-label="More Actions"><FaEllipsisV /> More Actions</button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                              <a href="/updated"><button className="report"><FaFlag /> Report Profile</button> </a>
                              <a href="/updated"><button className="block"><FaBan /> Block User</button></a>
                              <a href="/updated"><button className="share"><FaShare /> Share Profile</button></a>
                              <a href="/updated"><button className="save"><FaBookmark /> Save Profile</button></a>
                            </div>
                        )}
                    </div>
                </div>
                {messagePopupOpen && (
                    <div className="message-popup">
                        <div className="message-content">
                            <div className="message-header">
                                <h2>Send Message</h2>
                                <button className="close-message" onClick={() => setMessagePopupOpen(false)}>&times;</button>
                            </div>
                            <textarea
                                className="message-input"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Write your message... (Press Enter to send)"
                                disabled={sendingMessage}
                            />
                            <button
                                className="send-message"
                                onClick={handleSendMessage}
                                disabled={!messageText.trim() || sendingMessage}
                            >
                                {sendingMessage ? 'Sending...' : messageSent ? 'Message Sent!' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cover;