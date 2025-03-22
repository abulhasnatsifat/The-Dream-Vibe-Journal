import  { useEffect, useRef, useState } from 'react';
import video1 from '../../../assets/Profile/Videos/video1.mp4';
import video2 from '../../../assets/Profile/Videos/video2.mp4';
import ProfilePic from '../../../assets/Profile/your-profile-image.jpg';
import SearchIcon from '../../../assets/Profile/Videos/search.svg';
import SendIcon from '../../../assets/Profile/Videos/send.svg';
import './Videos.css';

const Videos = () => {
    const [videos, setVideos] = useState([
        { id: 1, src: video1, title: 'Exploring AI: The Future of Technology', views: 100, likes: 10, comments: 2, user: { name: 'Hasnat', profilePic: ProfilePic }, liked: false },
        { id: 2, src: video2, title: 'AI in Everyday Life: Transforming Our World', views: 200, likes: 20, comments: 2, user: { name: 'Sifat', profilePic: ProfilePic }, liked: false },
    ]);

    const [comments, setComments] = useState({});
    const [showCommentInput, setShowCommentInput] = useState({});
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const videoRefs = useRef([]);

    const toggleLike = (id) => {
        setVideos(videos.map(video => 
            video.id === id ? { ...video, liked: !video.liked, likes: video.liked ? video.likes - 1 : video.likes + 1 } : video
        ));
    };

    const handleCommentClick = (id) => {
        setShowCommentInput(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleShareClick = (id) => {
        // Logic to handle sharing
        console.log(`Share video ${id}`);
    };

    const exampleComments = {
        1: ['Great video!', 'Loved the content!'],
        2: ['I learned something new today!', 'Can you make more videos like this?']
    };

    const handleCommentSubmit = (id, comment) => {
        if (comment.trim()) {
            setComments(prevComments => ({
                ...prevComments,
                [id]: [...(prevComments[id] || []), comment],
            }));
        }
    };

    const handleVideoPlay = (id) => {
        const videoRef = videoRefs.current[id];
        if (videoRef.paused) {
            videoRef.play();
        } else {
            videoRef.pause();
        }
    };

    const handleUpload = (file, title, description) => {
        const newVideo = {
            id: uploadedVideos.length + 1,
            src: URL.createObjectURL(file),
            title: title,
            description: description,
            views: 0,
            likes: 0,
            comments: 0,
            user: { name: 'You', profilePic: ProfilePic },
            liked: false,
        };
        setUploadedVideos([...uploadedVideos, newVideo]);
    };

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleScroll = () => {
            // Removed auto-play functionality on scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="videos-container">
            <div className="top-nav">
                <input type="text" placeholder="Search videos..." className="search-bar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button onClick={() => setSearchQuery(searchQuery)} className="submit-search-button">
                    <img src={SearchIcon} alt="Search" className="send-icon" style={{ width: '30px', height: '30px' }} />
                </button>
                <div className="nav-icons">
                    <span className="icon">🔔</span>
                    <span className="icon">👤</span>
                    <span className="icon">📤</span>
                </div>
            </div>
            <div className="upload-section">
                <h2>Upload Video</h2>
                <input type="file" accept="video/*" className="upload-input" />
                <input type="text" placeholder="Title" className="upload-title" />
                <textarea placeholder="Description" className="upload-description" />
                <button className="upload-button" onClick={() => {
                    const fileInput = document.querySelector('.upload-input');
                    const titleInput = document.querySelector('.upload-title');
                    const descriptionInput = document.querySelector('.upload-description');
                    handleUpload(fileInput.files[0], titleInput.value, descriptionInput.value);
                    fileInput.value = '';
                    titleInput.value = '';
                    descriptionInput.value = '';
                }}>Upload</button>
            </div>
            <div className="video-feed">
                {filteredVideos.map((video) => (
                    <div key={video.id} className="video-card">
                        <video ref={(el) => videoRefs.current[video.id] = el} className="video">
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="play-button" onClick={() => handleVideoPlay(video.id)}>▶️</button>
                        <div className="video-info">
                            <h3>{video.title}</h3>
                            <div className="user-info">
                                <img src={video.user.profilePic} alt="profile" className="profile-pic" />
                                <span>{video.user.name}</span>
                            </div>
                            <div className="video-stats" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginTop: '10px', float: 'right' }}>
                                <span style={{ marginRight: '10px' }}>{video.views} views</span>
                                <span style={{ marginRight: '10px' }}>{video.likes} likes</span>
                                <span>{video.comments} comments</span>
                            </div>
                            <div className="video-reactions">
                                <button onClick={() => toggleLike(video.id)} className="like-button">{video.liked ? 'Unlike' : 'Like'}</button>
                                <button onClick={() => handleCommentClick(video.id)} className="comment-button">Comment</button>
                                <button onClick={() => handleShareClick(video.id)} className="share-button">Share</button>
                            </div>
                            {showCommentInput[video.id] && (
                                <div className="comments-section">
                                    <input type="text" placeholder="Add a comment..." className="comment-input" id={`comment-input-${video.id}`} />
                                    <button onClick={() => {
                                        const commentInput = document.getElementById(`comment-input-${video.id}`);
                                        handleCommentSubmit(video.id, commentInput.value);
                                        commentInput.value = '';
                                    }} className="submit-comment-button">
                                        <img src={SendIcon} alt="Send" className="send-icon" />
                                    </button>
                                </div>
                            )}
                            <div className="existing-comments">
                                {(comments[video.id] || []).map((comment, index) => (
                                    <div key={index} className="comment">{comment}</div>
                                ))}
                                {(exampleComments[video.id] || []).map((comment, index) => (
                                    <div key={index} className="comment">{comment}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                {uploadedVideos.map((video) => (
                    <div key={video.id} className="video-card">
                        <video ref={(el) => videoRefs.current[video.id] = el} className="video">
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="play-button" onClick={() => handleVideoPlay(video.id)}>▶️</button>
                        <div className="video-info">
                            <h3>{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;