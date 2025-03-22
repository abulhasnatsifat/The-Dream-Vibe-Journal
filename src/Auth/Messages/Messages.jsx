import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaSmile, FaPaperclip, FaBell, FaBellSlash, FaTrash, FaBan } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import photo1 from '../../assets/Profile/Photos/photo1.jpg';
import photo2 from '../../assets/Profile/Photos/photo2.jpg';
import photo3 from '../../assets/Profile/Photos/photo3.jpg';
import photo4 from '../../assets/Profile/Photos/photo4.jpg';
import photo5 from '../../assets/Profile/Photos/photo5.jpg';
import photo6 from '../../assets/Profile/Photos/photo6.jpg';
import photo7 from '../../assets/Profile/Photos/photo7.jpg';
import photo8 from '../../assets/Profile/Photos/photo8.jpg';
import homeicon from '../../assets/Author/home.svg';
import './Messages.css';

const Messages = () => {
  const [conversations] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: photo1,
      status: 'online',
      lastMessage: 'Hey, how are you?',
      timestamp: '10:30 AM',
      unread: 2,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true
        },
        {
          id: 2,
          text: 'Im good, thanks! How about you?',
          sent: false,
          timestamp: '10:31 AM',
          read: true
        }
      ]
    },
    {
      id: 1,
      name: 'John Doe',
      avatar: photo1,
      lastMessage: 'Hey, how are you?',
      timestamp: '10:30 AM',
      unread: 2,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true
        },
        {
          id: 2,
          text: 'Im good, thanks! How about you?',
          sent: false,
          timestamp: '10:31 AM',
          read: true
        }
      ]
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      avatar: photo2,
      lastMessage: 'The project looks great!',
      timestamp: '9:45 AM',
      unread: 0,
      isTyping: true,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'The project looks great!',
          sent: true,
          timestamp: '9:45 AM',
          read: true
        }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: photo3,
      lastMessage: 'When is the meeting?',
      timestamp: 'Yesterday',
      unread: 1,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'When is the meeting?',
          sent: true,
          timestamp: 'Yesterday',
          read: true
        }
      ]
    },
    {
      id: 4,
      name: 'Emma Davis',
      avatar: photo4,
      lastMessage: 'Thanks for your help!',
      timestamp: 'Yesterday',
      unread: 0,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Thanks for your help!',
          sent: true,
          timestamp: 'Yesterday',
          read: true
        }
      ]
    },
    {
      id: 5,
      name: 'Alex Thompson',
      avatar: photo5,
      lastMessage: 'See you tomorrow!',
      timestamp: 'Monday',
      unread: 0,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'See you tomorrow!',
          sent: true,
          timestamp: 'Monday',
          read: true
        }
      ]
    },
    {
      id: 6,
      name: 'Sophie Chen',
      avatar: photo6,
      lastMessage: 'Did you see the latest updates?',
      timestamp: 'Just now',
      unread: 3,
      isTyping: true,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Did you see the latest updates?',
          sent: true,
          timestamp: 'Just now',
          read: true
        }
      ]
    },
    {
      id: 7,
      name: 'Marcus Rodriguez',
      avatar: photo7,
      lastMessage: 'Let me know when youre free to discuss',
      timestamp: '2 hours ago',
      unread: 0,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Let me know when youre free to discuss',
          sent: true,
          timestamp: '2 hours ago',
          read: true
        }
      ]
    },
    {
      id: 8,
      name: 'Olivia Parker',
      avatar: photo8,
      lastMessage: 'Great meeting you yesterday!',
      timestamp: 'Tuesday',
      unread: 1,
      isTyping: false,
      messageHistory: [
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Hey, how are you?',
          sent: true,
          timestamp: '10:30 AM',
          read: true,
          type: 'text'
        },
        {
          id: 1,
          text: 'Great meeting you yesterday!',
          sent: true,
          timestamp: 'Tuesday',
          read: true
        }
      ]
    }
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

useEffect(() => {
  if (selectedChat) {
    setMessages(selectedChat.messageHistory || []);
  }
}, [selectedChat]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [searchQuery] = useState('');
  const [mutedChats, setMutedChats] = useState(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [deletedChats, setDeletedChats] = useState(new Set());
  const typingTimeoutRef = useRef(null);

  const messageContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() || attachments.length > 0) {
      const newMsg = {
        id: Date.now(),
        text: newMessage,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false,
        attachments: attachments
      };
      setMessages(prev => [...prev, newMsg]);
      setNewMessage('');
      setAttachments([]);
    }
  };

  const handleEmojiClick = (emojiData) => {
    setNewMessage(prev => prev + emojiData.emoji);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newAttachments = files.map(file => ({
        id: Date.now() + Math.random(),
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith('image/') ? 'image' : 'file'
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
    }
  };

  const removeAttachment = (id) => {
    setAttachments(prev => {
      const filtered = prev.filter(att => att.id !== id);
      const removed = prev.find(att => att.id === id);
      if (removed && removed.preview) {
        URL.revokeObjectURL(removed.preview);
      }
      return filtered;
    });
  };

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
    }
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const filteredConversations = conversations.filter(conv =>
    !deletedChats.has(conv.id) && conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="messages-container">
      {/* Left Sidebar */}
      <div className="conversations-sidebar">
      
        <div className="conversations-list">
          {filteredConversations.map(conv => (
            <div
              key={conv.id}
              className={`conversation-item ${selectedChat?.id === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(conv)}
            >
              <img src={conv.avatar} alt={conv.name} className="avatar" />
              <div className="conversation-info">
                <h3>{conv.name}</h3>
                <p className="last-message">
                  {conv.isTyping ? 'Typing...' : conv.lastMessage}
                </p>
              </div>
              <div className="conversation-meta">
                <span className="timestamp">{conv.timestamp}</span>
                {conv.unread > 0 && <span className="unread-count">{conv.unread}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="main-chat">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="avatar" />
              <h2>{selectedChat.name}</h2>
            </div>
            <div className="messages-container" ref={messageContainerRef}>
              {messages.map((message, index) => {
                const showDate = index === 0 || 
                  new Date(message.timestamp).toDateString() !== 
                  new Date(messages[index - 1].timestamp).toDateString();
                
                return (
                  <React.Fragment key={message.id}>
                    {showDate && (
                      <div className="message-date-divider">
                        <span>{new Date(message.timestamp).toLocaleDateString()}</span>
                      </div>
                    )}
                    <div className={`message ${message.sent ? 'sent' : 'received'}`}>
                      <div className="message-content">
                        {message.attachments?.map(att => (
                          <div key={att.id} className="message-attachment">
                            {att.type === 'image' ? (
                              <img src={att.url} alt="attachment" />
                            ) : (
                              <div className="file-attachment">
                                <FaPaperclip />
                                <span>{att.name}</span>
                              </div>
                            )}
                          </div>
                        ))}
                        {message.type === 'image' ? (
  <img 
    src={message.imageUrl} 
    alt="Sent attachment"
    className="message-image"
    onLoad={() => window.URL.revokeObjectURL(message.imageUrl)}
  />
) : (
  <p>{message.text}</p>
)}
                        <div className="message-meta">
                          <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
                          {message.sent && <span className="read-status">{message.read ? '✓✓' : '✓'}</span>}
                          {!message.sent && (
                            <span className="sender-info">
                              {selectedChat?.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
              {isTyping && (
                <div className="typing-indicator">
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>
              )}
            </div>
            <div className="message-input-container">
              {showEmojiPicker && (
                <div className="emoji-picker-container">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
              <button
                className="attachment-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaPaperclip />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept="image/*,video/*"
              />
              <button
                className="emoji-btn"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <FaSmile />
              </button>
              <textarea
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                  handleTyping();
                }}
                placeholder="Type a message..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              {attachments.length > 0 && (
                <div className="attachments-preview">
                  {attachments.map(att => (
                    <div key={att.id} className="attachment-preview">
                      {att.type === 'image' ? (
                        <img src={att.preview} alt="preview" />
                      ) : (
                        <div className="file-preview">
                          <FaPaperclip />
                          <span>{att.file.name}</span>
                        </div>
                      )}
                      <button onClick={() => removeAttachment(att.id)} className="remove-attachment">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!newMessage.trim() && attachments.length === 0}
              >
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>

      {/* Right Panel */}
      {selectedChat && (
        <div className="user-info-panel">
          <div className="user-profile">
            <img src={selectedChat.avatar} alt={selectedChat.name} className="large-avatar" />
            <h2>{selectedChat.name}</h2>
          </div>
          <div className="user-actions">
            <button
              className={`action-btn ${mutedChats.has(selectedChat.id) ? 'active' : ''}`}
              onClick={() => {
                setMutedChats(prev => {
                  const newMuted = new Set(prev);
                  if (newMuted.has(selectedChat.id)) {
                    newMuted.delete(selectedChat.id);
                  } else {
                    newMuted.add(selectedChat.id);
                  }
                  return newMuted;
                });
              }}
            >
              {mutedChats.has(selectedChat.id) ? <FaBellSlash /> : <FaBell />}
              <span>{mutedChats.has(selectedChat.id) ? 'Unmute' : 'Mute'} Notifications</span>
            </button>
            <button className="action-btn">
              <FaBan />
              <span>Block User</span>
            </button>
            <button 
              className="action-btn danger"
              onClick={() => {
                setDeletedChats(prev => new Set([...prev, selectedChat.id]));
                setSelectedChat(null);
              }}
            >
              <FaTrash />
              <span>Delete Conversation</span>
            </button>
          </div>
          <button 
                                className="read-more-button" 
                                onClick={() => window.location.href=`/home`}
                            >
                                <img src={homeicon} alt="Home" style={{ width: '30px', height: '30px' }} />Back To Home
                            </button>
        </div>
      )}
           
                        
    </div>
  );
};

export default Messages;