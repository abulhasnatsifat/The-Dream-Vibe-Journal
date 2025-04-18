/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import './Homeblog.css';
import thumbnail1 from '../../assets/thumbnails/thumbnail1.jpg';
import thumbnail2 from '../../assets/thumbnails/thumbnail2.jpg';
import thumbnail3 from '../../assets/thumbnails/thumbnail3.jpg';
import thumbnail4 from '../../assets/thumbnails/thumbnail4.jpg';
import thumbnail5 from '../../assets/thumbnails/thumbnail5.jpg';
import thumbnail6 from '../../assets/thumbnails/thumbnail6.jpg';
import thumbnail7 from '../../assets/thumbnails/thumbnail7.jpg';
import thumbnail8 from '../../assets/thumbnails/thumbnail8.jpg';
import thumbnail9 from '../../assets/thumbnails/thumbnail9.jpg';
import thumbnail10 from '../../assets/thumbnails/thumbnail10.jpg';
import authorAvatar from '../../assets/Author/default-profile.png';
import video1 from '../../assets/Profile/Videos/video1.mp4';
import video2 from '../../assets/Profile/Videos/video2.mp4';
import PostView from '../../components/PostView/PostView';

const Main = () => {
    const [posts, setPosts] = useState([]);

    const [newComment, setNewComment] = useState({});


    const exampleNames = [
        'John Smith',
        'Emma Wilson',
        'Michael Brown',
        'Sophie Taylor',
        'James Anderson',
        'Lisa Martinez',
        'Chris Lee',
        'Anna Garcia',
        'Tom Miller',
        'Julia Wright',
        'David Park',
        'Sarah Johnson',
        'Robert Chen',
        'Maria Garcia',
        'Alex Turner'
    ];




    useEffect(() => {
        const initialPosts = [
            {
                id: 11,
                text: 'Exploring AI: The Future of Technology',
                media: video1,
                mediaType: 'video',
                likes: 0,
                comments: [
                    { text: 'Amazing video on AI!', userId: 1, userName: <a href={`/profile?id=1`}>Tech Enthusiast</a>, authorAvatar: authorAvatar }
                ],
                userId: 11,
                userName: 'AI Explorer',
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 1, name: 'John Smith', avatar: authorAvatar },
                    { id: 2, name: 'Emma Wilson', avatar: authorAvatar }
                ],
                location: 'Silicon Valley, CA',
                feeling: { id: 1, emoji: '🤔', text: 'thoughtful' },
                category: { id: 1, icon: '💻', name: 'Technology' },
                tags: ['AI', 'Technology', 'Future']
            },
            {
                id: 12,
                text: 'AI in Everyday Life: Transforming Our World',
                media: video2,
                mediaType: 'video',
                likes: 0,
                comments: [
                    { text: 'Great explanation of AI applications!', userId: 2, userName: <a href={`/profile?id=2`}>Future Tech</a>, authorAvatar: authorAvatar }
                ],
                userId: 12,
                userName: 'Tech Innovator',
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 3, name: 'Michael Brown', avatar: authorAvatar }
                ],
                location: 'MIT Campus, Cambridge',
                feeling: { id: 2, emoji: '😊', text: 'happy' },
                category: { id: 3, icon: '📚', name: 'Education' },
                tags: ['AI', 'Technology', 'Education']
            },
            { 
                id: 1, 
                text: 'The Rise of AI in Everyday Life', 
                media: thumbnail1, 
                mediaType: 'image',
                likes: 0, 
                comments: [
                    { text: 'Great insights on AI!', userId: 1, userName: <a href={`/profile?id=1`}>Sarah Johnson</a>, authorAvatar: authorAvatar }
                ], 
                userId: 1, 
                userName: 'Techie Trends', 
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 4, name: 'Sophie Taylor', avatar: authorAvatar },
                    { id: 5, name: 'James Anderson', avatar: authorAvatar }
                ],
                location: 'Google Campus, Mountain View',
                feeling: { id: 3, emoji: '😎', text: 'cool' },
                category: { id: 1, icon: '💻', name: 'Technology' },
                tags: ['AI', 'Technology', 'Future']
            },
            { 
                id: 2, 
                text: 'Top 10 JavaScript Frameworks in 2025', 
                media: thumbnail2, 
                likes: 0, 
                comments: [
                    { text: 'Very informative, thanks!', userId: 2, userName: <a href={`/profile?id=2`}>Mike Chen</a>, authorAvatar: authorAvatar }
                ], 
                userId: 2, 
                userName: 'Code Crafters', 
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 6, name: 'Lisa Martinez', avatar: authorAvatar }
                ],
                location: 'Facebook HQ, Menlo Park',
                feeling: { id: 4, emoji: '🤗', text: 'blessed' },
                category: { id: 1, icon: '💻', name: 'Technology' },
                tags: ['Technology', 'Future']
            },
            { 
                id: 3, 
                text: 'Is Blockchain the Future of Security?', 
                media: thumbnail3, 
                likes: 0, 
                comments: [
                    { text: 'Interesting perspective!', userId: 3, userName: <a href={`/profile?id=3`}>Alex Turner</a>, authorAvatar: authorAvatar },
                    { text: 'Blockchain is the future!', userId: 4, userName: <a href={`/profile?id=4`}>David Kim</a>, authorAvatar: authorAvatar },
                    { text: 'I have my doubts.', userId: 5, userName: <a href={`/profile?id=5`}>Rachel White</a>, authorAvatar: authorAvatar }
                ], 
                userId: 3, 
                userName: 'Digital Future', 
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 7, name: 'Chris Lee', avatar: authorAvatar },
                    { id: 8, name: 'Anna Garcia', avatar: authorAvatar }
                ],
                location: 'Crypto Conference, Miami',
                feeling: { id: 5, emoji: '😡', text: 'angry' },
                category: { id: 9, icon: '💼', name: 'Business' },
                tags: ['Blockchain', 'Crypto', 'Business']
            },
            { 
                id: 4, 
                text: '5 Quick and Easy Breakfast Ideas', 
                media: thumbnail4, 
                likes: 0, 
                comments: [{ text: 'Yum! I need to try these!', userId: 4 }], 
                userId: 4, 
                userName: 'Flavor Fiesta', 
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 9, name: 'Tom Miller', avatar: authorAvatar }
                ],
                location: 'Culinary Institute, New York',
                feeling: { id: 6, emoji: '😊', text: 'happy' },
                category: { id: 5, icon: '🍳', name: 'Cooking' },
                tags: ['Cooking', 'Breakfast']
            },
            { 
                id: 5, 
                text: 'Best Vegan Restaurants in NYC', 
                media: thumbnail5, 
                likes: 0, 
                comments: [
                    { text: 'Can\'t wait to visit these places!', userId: 5 }, 
                    { text: 'I\'m a vegan too!', userId: 6 }
                ], 
                userId: 5, 
                userName: 'Vegan Vibes', 
                authorAvatar: authorAvatar,
                taggedFriends: [
                    { id: 10, name: 'Julia Wright', avatar: authorAvatar },
                    { id: 11, name: 'David Park', avatar: authorAvatar }
                ],
                location: 'Manhattan, New York',
                feeling: { id: 7, emoji: '🤔', text: 'thoughtful' },
                category: { id: 5, icon: '🍳', name: 'Cooking' },
                tags: ['Vegan', 'Cooking']
            },
            { 
                id: 6, 
                text: 'The Art of Baking the Perfect Cake', 
                media: thumbnail6, 
                likes: 0, 
                comments: [{ text: 'I love baking!', userId: 6 }], 
                userId: 6, 
                userName: 'Sweet Treats', 
                authorAvatar: authorAvatar,
                feeling: { id: 8, emoji: '😊', text: 'happy' },
                category: { id: 2, icon: '🎨', name: 'Art & Design' },
                tags: ['Baking', 'Art']
            },
            { 
                id: 7, 
                text: '10 Simple Ways to Reduce Stress', 
                media: thumbnail7, 
                likes: 0, 
                comments: [{ text: 'Thanks for the tips!', userId: 7 }], 
                userId: 7, 
                userName: 'Zen Living', 
                authorAvatar: authorAvatar,
                feeling: { id: 9, emoji: '😌', text: 'relaxed' },
                category: { id: 4, icon: '🏋️‍♂️', name: 'Fitness' },
                tags: ['Fitness', 'Stress']
            },
            { 
                id: 8, 
                text: 'DIY Home Decor on a Budget', 
                media: thumbnail8, 
                likes: 0, 
                comments: [{ text: 'Love these ideas!', userId: 8 }], 
                userId: 8, 
                userName: 'Home Haven', 
                authorAvatar: authorAvatar,
                feeling: { id: 10, emoji: '😊', text: 'happy' },
                category: { id: 2, icon: '🎨', name: 'Art & Design' },
                tags: ['DIY', 'Home Decor']
            },
            { 
                id: 9, 
                text: 'Sustainable Living: A Beginner\'s Guide', 
                media: thumbnail9, 
                likes: 0, 
                comments: [{ text: 'Very helpful guide!', userId: 9 }], 
                userId: 9, 
                userName: 'Eco Warrior', 
                authorAvatar: authorAvatar,
                feeling: { id: 1, emoji: '🤔', text: 'thoughtful' },
                category: { id: 3, icon: '📚', name: 'Education' },
                tags: ['Sustainable', 'Living']
            },
            { 
                id: 10, 
                text: 'How to Pitch Your Startup to Investors', 
                media: thumbnail10, 
                likes: 0, 
                comments: [
                    { text: 'Great advice!', userId: 10 }, 
                    { text: 'I found this very useful!', userId: 11 }
                ], 
                userId: 10, 
                userName: 'Startup Success', 
                authorAvatar: authorAvatar,
                feeling: { id: 2, emoji: '😊', text: 'happy' },
                category: { id: 9, icon: '💼', name: 'Business' },
                tags: ['Startup', 'Business']
            }
        ];
        setPosts(initialPosts);
    }, []);


    const handleReaction = (postId) => {
        setPosts(posts.map(post => 
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleCommentSubmit = (postId) => {
        const randomName = exampleNames[Math.floor(Math.random() * exampleNames.length)];
        
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return { 
                    ...post, 
                    comments: [
                        ...post.comments, 
                        { 
                            text: newComment[postId], 
                            replies: [], 
                            userId: 1, 
                            userName: randomName,
                            authorAvatar: authorAvatar 
                        }
                    ] 
                };
            }
            return post;
        }));
        setNewComment({ ...newComment, [postId]: '' });
    };

    const handleCommentEdit = (postId, index) => {
        const updatedComment = prompt('Edit your comment:', posts.find(post => post.id === postId).comments[index].text);
        if (updatedComment !== null) {
            setPosts(posts.map(post => {
                if (post.id === postId) {
                    const updatedComments = [...post.comments];
                    updatedComments[index].text = updatedComment;
                    return { ...post, comments: updatedComments };
                }
                return post;
            }));
        }
    };

    const handleCommentDelete = (postId, index) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                const updatedComments = post.comments.filter((_, i) => i !== index);
                return { ...post, comments: updatedComments };
            }
            return post;
        }));
    };

    const handleCommentReply = (postId, index) => {
        const reply = prompt('Reply to comment:', '');
        if (reply !== null) {
            setPosts(posts.map(post => {
                if (post.id === postId) {
                    const updatedComments = [...post.comments];
                    if (!updatedComments[index].replies) {
                        updatedComments[index].replies = [];
                    }
                    updatedComments[index].replies.push(reply);
                    return { ...post, comments: updatedComments };
                }
                return post;
            }));
        }
    };

    const handleUserProfileClick = (userId) => {
        // Navigate to user profile (this is a placeholder for actual navigation logic)
        console.log(`Navigate to profile of user: ${userId}`);
    };

    const handleShare = (postId) => {
        // Implement sharing functionality here
        // For example, you could show a modal with sharing options
        alert('Sharing post: ' + postId);
    };








    return (
        <div className="main-container">
           
            <div className="posts-list">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <div className="avatar-container">
                               
                               
                              <div className="post-content">
                                
                              {post.text}</div>
                              <div className="user-info-line">
                              <a href={`/profile?id=${post.userId}`} className="user-name"> <img className="avatar" 
                                    src={post.authorAvatar} ></img>
                                        {post.userName}
                                    </a>
                              {post.category && (
                                <span className="user-name">
                                    <a href={`/postcategory?categoryId=${post.category.id}`} className="post-category-link">
                                        <span className="post-category-icon">{post.category.icon}</span>
                                        {post.category.name}
                                    </a>
                                </span>
                                
                            )}
                            <span></span>   <span></span>   <span></span>
                              {post.taggedFriends && post.taggedFriends.length > 0 && (
                                  <>
                                      <span className="tags-with"> Tagged with</span>
                                      {post.taggedFriends.map((friend, index) => (
                                          <span key={friend.id} className="tagged-friend">
                                              <img src={friend.avatar} alt={friend.name} />
                                              <a href={`/profile/?id=${friend.id}`}><span className="tagged-name">{friend.name}</span></a>
                                              {index < post.taggedFriends.length - 1 && ', '}
                                          </span>
                                      ))}
                                  </>
                              )}
                              {post.role && <span className="user-role"> · {post.role}</span>}
                          </div>
                          <div className="post-metadata">
                                    <span className="post-date">
                                        {new Date(post.id).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                    {post.location && (
                                        <>
                                            <span className="metadata-separator">·</span>
                                            <span className="post-location">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                                    <circle cx="12" cy="9" r="2.5"/>
                                                </svg>
                                                {post.location}
                                            </span>
                                        </>
                                    )}
                                    {post.feeling && (
                                        <>
                                            <span className="metadata-separator">·</span>
                                            <span className="post-feeling">
                                                Feeling {post.feeling.text} 
                                                <span className="post-feeling-emoji">{post.feeling.emoji}</span>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="post-info">

                                
                            </div>
                        </div>
                      
                      
                        
                        {post.media && (
                            post.mediaType === 'video' ? (
                                <video 
                                    src={post.media} 
                                    controls 
                                    className="post-media"
                                />
                            ) : (
                                <img 
                                    src={post.media} 
                                    alt="Post Media" 
                                    className="post-media"
                                />
                            )
                        )}
                        <div className="post-actions"> 
                            <div className="left-actions">
                                <button className="like-button" onClick={() => handleReaction(post.id)}>Like ({post.likes})</button>
                                <div className="comment-input-wrapper">
                                    <input
                                        type="text"
                                        value={newComment[post.id] || ''}
                                        onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                                        placeholder="Write a comment..."
                                        className="comment-input"
                                    />
                                    <button 
                                        className="comment-submit-button" 
                                        onClick={() => handleCommentSubmit(post.id)}
                                        disabled={!newComment[post.id]}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button className="share-button" onClick={() => handleShare(post.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="18" cy="5" r="3"></circle>
                                    <circle cx="6" cy="12" r="3"></circle>
                                    <circle cx="18" cy="19" r="3"></circle>
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                </svg>
                                
                            </button>
                        </div>
                        <div className="comments-section">
                            <div className="comments-list">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="comment-item">
                                        <div className="comment-header">
                                            <div className="comment-user">
                                                <img 
                                                    src={comment.authorAvatar || authorAvatar} 
                                                    alt="User Avatar" 
                                                    className="comment-avatar" 
                                                />
                                                <span 
                                                    className="comment-username" 
                                                    onClick={() => handleUserProfileClick(comment.userId)}
                                                >
                                                    {comment.userName || exampleNames[Math.floor(Math.random() * exampleNames.length)]}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="comment-text">{comment.text}</p>
                                        <div className="comment-actions">
                                            <button onClick={() => handleCommentEdit(post.id, index)}>Edit</button>
                                            <button onClick={() => handleCommentDelete(post.id, index)}>Delete</button>
                                            <button onClick={() => handleCommentReply(post.id, index)}>Reply</button>
                                        </div>
                                        <div className="replies">
                                            {comment.replies && comment.replies.map((reply, replyIndex) => (
                                                <p key={replyIndex} className="reply-item">{reply}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        <a href={`/postview/${post.id}`}><button className="read-more-button">Read More</button></a>
                    </div>
                ))}
            </div>
            <PostView posts={posts} />
        </div>
    );
};

export default Main;