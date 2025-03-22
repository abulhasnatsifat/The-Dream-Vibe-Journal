import React, { useState, useEffect, useRef } from 'react';
import './Story.css';
import photo1 from '../../assets/story/photo1.jpg';
import photo2 from '../../assets/story/photo2.jpg';
import photo3 from '../../assets/story/photo3.jpg';
import photo4 from '../../assets/story/photo4.jpg';
import photo5 from '../../assets/story/photo5.jpg';
import photo6 from '../../assets/story/photo6.jpg';
import photo7 from '../../assets/story/photo7.jpg';
import prevIcon from '../../assets/story/prev.svg'; 
import nextIcon from '../../assets/story/next.svg'; 
import Homeicon from '../../assets/story/home.svg'; 
import Uploadicon from '../../assets/story/upload.svg'; 
import creator1 from '../../assets/story/creator/creator1.jpg';
import creator2 from '../../assets/story/creator/creator2.jpg';
import creator3 from '../../assets/story/creator/creator3.jpg';
import creator4 from '../../assets/story/creator/creator4.jpg';
import creator5 from '../../assets/story/creator/creator5.jpg';
import creator6 from '../../assets/story/creator/creator6.jpg';
import creator7 from '../../assets/story/creator/creator7.jpg';
import AdminIcon from '../../assets/story/category/admin.svg';
import ModeratorIcon from '../../assets/story/category/moderator.svg';
import UserIcon from '../../assets/story/category/user.svg';
import video1 from '../../assets/story/videos/video1.mp4';
import video2 from '../../assets/story/videos/video2.mp4';
import video3 from '../../assets/story/videos/video3.mp4';
import video4 from '../../assets/story/videos/video4.mp4';
import video5 from '../../assets/story/videos/video5.mp4';
import video6 from '../../assets/story/videos/video6.mp4';
import video7 from '../../assets/story/videos/video7.mp4';
import EmojiAnimation from './EmojiAnimation';
import SendIcon from '../../assets/story/send.svg';

const creators = [
    { id: 1, name: 'John Doe', photo: creator1, story: photo1 },
    { id: 2, name: 'Jane Smith', photo: creator2, story: photo2 },
    { id: 3, name: 'Alice Johnson', photo: creator3, story: photo3 },
    { id: 4, name: 'Bob Brown', photo: creator4, story: photo4 },
    { id: 5, name: 'Charlie Davis', photo: creator5, story: photo5 },
    { id: 6, name: 'Eve White', photo: creator6, story: photo6 },
    { id: 7, name: 'Frank Black', photo: creator7, story: photo7 }
];


const videoCreators = [
    { id: 1, name: 'John Doe', photo: creator1, video: video1 },
    { id: 2, name: 'Jane Smith', photo: creator2, video: video2 },
    { id: 3, name: 'Alice Johnson', photo: creator3, video: video3 },
    { id: 4, name: 'Bob Brown', photo: creator4, video: video4 },
    { id: 5, name: 'Charlie Davis', photo: creator5, video: video5 },
    { id: 6, name: 'Eve White', photo: creator6, video: video6 },
    { id: 7, name: 'Frank Black', photo: creator7, video: video7 }
];

const categories = [
    { name: 'Admin', icon: AdminIcon, creators: [
        { name: 'John Doe', photo: creator1 },
        { name: 'Jane Smith', photo: creator2 }
    ]},
    { name: 'Moderator', icon: ModeratorIcon, creators: [
        { name: 'Alice Johnson', photo: creator3 },
        { name: 'Bob Brown', photo: creator4 }
    ]},
    { name: 'User', icon: UserIcon, creators: [
        { name: 'Charlie Davis', photo: creator5 },
        { name: 'Eve White', photo: creator6 },
        { name: 'Frank Black', photo: creator7 }
    ]}
];

const Story = () => {
    const [activeTab, setActiveTab] = useState('photos');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('Comment submitted!');
    const [photos, setPhotos] = useState([photo1, photo2, photo3, photo4, photo5, photo6, photo7]);
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        try {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm'];
            if (!validTypes.includes(file.type)) {
                setPopupMessage('Invalid file type. Please upload an image or video.');
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 2000);
                return;
            }

            const fileType = file.type.split('/')[0];
            const fileUrl = URL.createObjectURL(file);

            if (fileType === 'image') {
                const newPhoto = fileUrl;
                const newCreator = { id: Date.now(), name: 'You', photo: creator1, story: newPhoto };
                setPhotos(prev => [...prev, newPhoto]);
                creators.push(newCreator);
                setPopupMessage('Photo uploaded successfully!');
            } else if (fileType === 'video') {
                const newVideo = { id: Date.now(), name: 'You', photo: creator1, video: fileUrl };
                setUploadedVideos(prev => [...prev, newVideo]);
                setPopupMessage('Video uploaded successfully!');
            }

            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
            event.target.value = '';
        } catch (error) {
            setPopupMessage('Upload failed. Please try again.');
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
            console.error('Upload error:', error);
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadingWidth, setLoadingWidth] = useState(100);
    const [selectedCreator, setSelectedCreator] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const intervalId = useRef();
    const loadingInterval = useRef();
    const [reactions, setReactions] = useState(Array(photos.length).fill({}));
    const [animationEmoji, setAnimationEmoji] = useState(null);
    const [comments, setComments] = useState(Array(photos.length + videoCreators.length).fill('')); // Adjusted for both photos and videos
    const [currentComment, setCurrentComment] = useState('');

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            setLoadingWidth(100); // Reset loading width
        }, 10000); // Change photo every 10 seconds

        loadingInterval.current = setInterval(() => {
            setLoadingWidth((prevWidth) => prevWidth - (100 / 100)); // Decrease width over 10 seconds
        }, 100);

        return () => {
            clearInterval(intervalId.current);
            clearInterval(loadingInterval.current);
            // Cleanup object URLs when component unmounts
            photos.forEach(photo => {
                if (photo.startsWith('blob:')) {
                    URL.revokeObjectURL(photo);
                }
            });
        }; // Cleanup on unmount
    }, [photos, photos.length]);

    const showNextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setLoadingWidth(100); // Reset loading width
    };

    const showPreviousPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
        setLoadingWidth(100); // Reset loading width
    };

    const handleCreatorClick = (index) => {
        setSelectedCreator(index);
        setCurrentIndex(index);
        clearInterval(intervalId.current); // Stop the auto-scrolling
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedCreator(null);
    };

    const handleReaction = (emoji) => {
        setReactions((prev) => {
            const newReactions = [...prev];
            newReactions[currentIndex] = {
                ...newReactions[currentIndex],
                [emoji]: (newReactions[currentIndex][emoji] || 0) + 1
            };
            return newReactions;
        });
        setAnimationEmoji(emoji);
    };

    const handleAnimationEnd = () => {
        setAnimationEmoji(null);
    };

    const handleCommentSubmit = (index) => {
        const newComments = [...comments];
        newComments[index] = currentComment;
        setComments(newComments);
        setShowPopup(true);
        setCurrentComment('');
        setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
    };

    const displayedCreators = selectedCategory ? selectedCategory.creators : creators;

    return (
        <div className='story-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100vh', width: '100vw' }}>
            {activeTab === 'photos' && (
                <div className="comment-section" style={{ width: '20%', margin: '0 auto', position: 'relative', top: '530px' }}>
                    <input type="text" placeholder="" className="comment-input" value={currentComment} onChange={(e) => setCurrentComment(e.target.value)} style={{ width: 'calc(100% - 100px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', marginLeft: '0' }} />
                    <button className="send-button" onClick={() => handleCommentSubmit(currentIndex)} style={{ width: '100px', padding: '10px', fontSize: '16px', border: 'none', backgroundColor: 'transparent', color: '#fff', cursor: currentComment.trim() === '' ? 'not-allowed' : 'pointer', outline: 'none' }} disabled={currentComment.trim() === ''}>
                        <img src={SendIcon} alt="Send" style={{ width: '30px', height: '30px' }} />
                    </button>
                    {showPopup && <div className="popup" style={{ position: 'absolute', top: '7px', left: '-175px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', color: 'black' }}>{popupMessage}</div>}
                    <div style={{ color: 'black', marginTop: '5px' }}>{comments[currentIndex]}</div> {/* Display comment for current photo */}
                </div>
            )}
            <div className='sidebar'>
                <h2>Creators</h2>
                <div className='divider'></div>
                <ul>
                    {displayedCreators.map((creator, index) => (
                        <React.Fragment key={index}>
                            <li onClick={() => handleCreatorClick(index)} className={selectedCreator === index ? 'selected' : ''}>
                                <img src={creator.photo} alt={creator.name} className='creator-photo' />
                                {creator.name}
                            </li>
                            {index < displayedCreators.length - 1 && <div className='divider'></div>}
                        </React.Fragment>
                    ))}
                </ul>
                <button 
                                className="read-more-button" 
                                onClick={() => window.location.href=`/home`}
                            >
                                <img src={Homeicon} alt="Home" style={{ width: '30px', height: '30px' }} />Back To Home
                            </button>
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <div className='nav-buttons'>
                </div>
                {activeTab === 'photos' ? (
                    <div className="photo-section" style={{ marginBottom: '5px', position: 'relative', top: '-95px' }}>
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '0px', borderRadius: '8px', position: 'absolute', top: '65px', right: '620px', zIndex: 10 }}>
                            <div className='creator-info' style={{ width: '200px', height: 'auto', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                <img src={displayedCreators[currentIndex].photo} alt='Creator' className='creator-photo' style={{ width: '30px', height: '30px', marginRight: '3px', verticalAlign: 'middle', marginTop: '5px' }} />
                                <span style={{ color: 'black', fontSize: '14px', display: 'inline', marginTop: '5px' }}>Creator : </span><a href={`/profile?id=${displayedCreators[currentIndex].id}`} style={{ color: 'black', fontSize: '14px', display: 'inline', marginTop: '5px', textDecoration: 'none' }}>{displayedCreators[currentIndex].name}</a>
                            </div>
                        </div>
                        <div className="story" style={{ position: 'relative' }}>
                            <img src={selectedCreator !== null && displayedCreators[selectedCreator].story ? displayedCreators[selectedCreator].story : photos[currentIndex]} alt={`Story ${currentIndex + 1}`} className='story-photo' style={{ margin: '0 auto', marginTop: '60px' }} />
                            <div className='loading-bar' style={{ margin: '0 auto' }}>
                                <div className='loading-fill' style={{ width: `${loadingWidth}%` }}></div>
                            </div>
                            <div className="navigation-buttons" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                                <img src={prevIcon} alt="Previous" className="prev-photo-icon" onClick={showPreviousPhoto} style={{ cursor: 'pointer' }} />
                                <img src={nextIcon} alt="Next" className="next-photo-icon" onClick={showNextPhoto} style={{ cursor: 'pointer' }} />
                            </div>
                            <div className="emoji-reactions">
                                {['😀', '😍', '😢', '😡'].map((emoji) => (
                                    <span key={emoji} onClick={() => handleReaction(emoji)} className="emoji">
                                        {emoji} {reactions[currentIndex][emoji] || 0}
                                    </span>
                                ))}
                                {animationEmoji && <EmojiAnimation emoji={animationEmoji} onAnimationEnd={handleAnimationEnd} />}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="video-section">
                        {[...videoCreators, ...uploadedVideos].map((creator, index) => (
                            <div key={index} className='video-item' style={{ position: 'relative' }}>
                                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '0px', borderRadius: '8px', position: 'absolute', top: '15px', left: '285px', zIndex: 10 }}>
                                    <div className='creator-info' style={{ width: '200px', height: 'auto', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                        <img src={creator.photo} alt='Creator' className='creator-photo' style={{ width: '30px', height: '30px', marginRight: '3px', verticalAlign: 'middle' }} />
                                        <span style={{ color: 'black', fontSize: '14px', display: 'inline', marginTop: '5px' }}>Creator : </span><a href={`/profile?id=${creator.id}`} style={{ color: 'black', fontSize: '14px', display: 'inline', marginTop: '5px', textDecoration: 'none' }}>{creator.name}</a>
                                    </div>
                                </div>
                                <video controls width='800' height='450'>
                                    <source src={creator.video} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="comment-section" style={{ width: '30%', margin: '0 auto', position: 'relative', top: '10px' }}>
                                    <input type="text" placeholder="" className="comment-input" value={currentComment} onChange={(e) => setCurrentComment(e.target.value)} style={{ width: 'calc(100% - 100px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', marginLeft: '0' }} />
                                    <button className="send-button" onClick={() => handleCommentSubmit(photos.length + index)} style={{ width: '100px', padding: '10px', fontSize: '16px', border: 'none', backgroundColor: 'transparent', color: '#fff', cursor: currentComment.trim() === '' ? 'not-allowed' : 'pointer', outline: 'none' }} disabled={currentComment.trim() === ''}>
                                        <img src={SendIcon} alt="Send" style={{ width: '30px', height: '30px' }} />
                                    </button>
                                    {showPopup && <div className="popup" style={{ position: 'absolute', top: '7px', left: '-175px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', color: 'black' }}>{popupMessage}</div>}
                                    <div style={{ color: 'black', marginTop: '5px' }}>{comments[photos.length + index]}</div> {/* Display comment for current video */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='right-bar'>
                <h2>Categories</h2>
                <div className='divider'></div>
                <ul>
                    {categories.map((category, index) => (
                        <React.Fragment key={index}>
                            <li onClick={() => handleCategoryClick(category)}>
                                <img src={category.icon} alt={`${category.name} icon`} style={{ width: '20px', marginRight: '8px' }} />
                                {category.name}
                            </li>
                            {index < categories.length - 1 && <div className='divider'></div>}
                        </React.Fragment>
                    ))}
                </ul>
                <div className='categories'>
                    <h3 style={{ color: 'black' }}>Story Categories</h3>
                    <hr style={{ margin: '20px 0', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                    <ul>
                        <li><button className='nav-button' onClick={() => setActiveTab('photos')}>
                            <svg width='16' height='16' fill='currentColor' className='bi bi-image' viewBox='0 0 16 16'>
                                <path d='M4.5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5z'/>
                                <path d='M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm1 0v14h12V1H1z'/>
                            </svg> 
                             Photos
                        </button></li>
                        <li><button className='nav-button' onClick={() => setActiveTab('videos')}>
                            <svg width='16' height='16' fill='currentColor' className='bi bi-film' viewBox='0 0 16 16'>
                                <path d='M3.5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5z'/>
                                <path d='M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm1 0v14h12V1H1z'/>
                            </svg> 
                             Videos
                        </button></li>
                    </ul>
                </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                accept="image/*,video/*"
                                style={{ display: 'none' }}
                            />
                            <button 
                                className="read-more-button"
                                onClick={() => fileInputRef.current.click()}
                                style={{ marginBottom: '10px' }}
                            >
                              <img src={Uploadicon} alt="Home" style={{ width: '30px', height: '30px' }} />  Upload Story
                            </button>
                        
            </div>
     
        </div>
    );
};

export default Story;