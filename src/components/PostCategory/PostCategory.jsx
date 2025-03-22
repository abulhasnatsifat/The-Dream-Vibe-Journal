import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PostCategory.css';

// Import images
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
import homeicon from '../../assets/Author/home.svg';

const categories = [
    { id: 1, name: 'Technology', icon: '💻' },
    { id: 2, name: 'Art & Design', icon: '🎨' },
    { id: 3, name: 'Education', icon: '📚' },
    { id: 4, name: 'Fitness', icon: '🏋️‍♂️' },
    { id: 5, name: 'Cooking', icon: '🍳' },
    { id: 6, name: 'Gaming', icon: '🎮' },
    { id: 7, name: 'Music', icon: '🎵' },
    { id: 8, name: 'Travel', icon: '✈️' },
    { id: 9, name: 'Business', icon: '💼' },
    { id: 10, name: 'Entertainment', icon: '🎬' }
];

const PostCategory = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const categoryId = query.get('categoryId') || '1';

    const toggleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, likes: post.likes + (post.liked ? -1 : 1), liked: !post.liked }
                    : post
            )
        );
    };

    const handleCommentSubmit = (postId, commentText) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, comments: [...post.comments, { text: commentText, id: post.comments.length + 1 }] }
                    : post
            )
        );
    };

    useEffect(() => {
        // Define posts for each category
        const allPostsData = [
            { 
                id: 1, 
                text: 'The Future of AI in Technology', 
                media: thumbnail1, 
                likes: 0, 
                comments: [{ text: 'Great insights!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 1, 
                userName: 'Tech Guru', 
                authorAvatar: authorAvatar,
                location: 'Silicon Valley, CA',
                feeling: { id: 1, emoji: '🤔', text: 'thoughtful' },
                taggedFriends: [
                    { id: 1, name: 'John Smith', avatar: authorAvatar },
                    { id: 2, name: 'Emma Wilson', avatar: authorAvatar }
                ],
                category: categories[0] // Technology
            },
            { 
                id: 2, 
                text: 'Exploring Art & Design Trends', 
                media: thumbnail2, 
                likes: 0, 
                comments: [{ text: 'I love this trend!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 2, 
                userName: 'Art Lover', 
                authorAvatar: authorAvatar,
                location: 'New York, NY',
                feeling: { id: 2, emoji: '😊', text: 'happy' },
                taggedFriends: [
                    { id: 3, name: 'Alice Johnson', avatar: authorAvatar },
                    { id: 4, name: 'Michael Brown', avatar: authorAvatar }
                ],
                category: categories[1] // Art & Design
            },
            { 
                id: 3, 
                text: 'Top Educational Resources for 2023', 
                media: thumbnail3, 
                likes: 0, 
                comments: [{ text: 'Great resource!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 3, 
                userName: 'Edu Expert', 
                authorAvatar: authorAvatar,
                location: 'Online',
                feeling: { id: 3, emoji: '📚', text: 'informed' },
                taggedFriends: [
                    { id: 5, name: 'Sarah Johnson', avatar: authorAvatar },
                    { id: 6, name: 'David Kim', avatar: authorAvatar }
                ],
                category: categories[2] // Education
            },
            { 
                id: 4, 
                text: 'Fitness Tips for a Healthy Lifestyle', 
                media: thumbnail4, 
                likes: 0, 
                comments: [{ text: 'Great tips!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 4, 
                userName: 'Fitness Fanatic', 
                authorAvatar: authorAvatar,
                location: 'Los Angeles, CA',
                feeling: { id: 4, emoji: '��', text: 'motivated' },
                taggedFriends: [
                    { id: 7, name: 'Lisa Martinez', avatar: authorAvatar },
                    { id: 8, name: 'Tom Miller', avatar: authorAvatar }
                ],
                category: categories[3] // Fitness
            },
            { 
                id: 5, 
                text: 'Delicious Cooking Recipes', 
                media: thumbnail5, 
                likes: 0, 
                comments: [{ text: 'Delicious!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 5, 
                userName: 'Chef Master', 
                authorAvatar: authorAvatar,
                location: 'Culinary Institute, NY',
                feeling: { id: 5, emoji: '🍽️', text: 'hungry' },
                taggedFriends: [
                    { id: 9, name: 'Anna Garcia', avatar: authorAvatar },
                    { id: 10, name: 'Chris Lee', avatar: authorAvatar }
                ],
                category: categories[4] // Cooking
            },
            { 
                id: 6, 
                text: 'Latest Gaming Releases', 
                media: thumbnail6, 
                likes: 0, 
                comments: [{ text: 'Exciting!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 6, 
                userName: 'Gamer Guy', 
                authorAvatar: authorAvatar,
                location: 'Online',
                feeling: { id: 6, emoji: '🎮', text: 'excited' },
                taggedFriends: [
                    { id: 11, name: 'Emma Wilson', avatar: authorAvatar },
                    { id: 12, name: 'John Doe', avatar: authorAvatar }
                ],
                category: categories[5] // Gaming
            },
            { 
                id: 7, 
                text: 'Music Trends of 2023', 
                media: thumbnail7, 
                likes: 0, 
                comments: [{ text: 'Inspiring!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 7, 
                userName: 'Music Lover', 
                authorAvatar: authorAvatar,
                location: 'Nashville, TN',
                feeling: { id: 7, emoji: '🎶', text: 'inspired' },
                taggedFriends: [
                    { id: 13, name: 'Michael Brown', avatar: authorAvatar },
                    { id: 14, name: 'Sophie Taylor', avatar: authorAvatar }
                ],
                category: categories[6] // Music
            },
            { 
                id: 8, 
                text: 'Travel Destinations to Explore', 
                media: thumbnail8, 
                likes: 0, 
                comments: [{ text: 'Beautiful!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 8, 
                userName: 'Travel Blogger', 
                authorAvatar: authorAvatar,
                location: 'Various Locations',
                feeling: { id: 8, emoji: '✈️', text: 'adventurous' },
                taggedFriends: [
                    { id: 15, name: 'Alice Johnson', avatar: authorAvatar },
                    { id: 16, name: 'Emma Wilson', avatar: authorAvatar }
                ],
                category: categories[7] // Travel
            },
            { 
                id: 9, 
                text: 'Business Strategies for Success', 
                media: thumbnail9, 
                likes: 0, 
                comments: [{ text: 'Strategic!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 9, 
                userName: 'Business Expert', 
                authorAvatar: authorAvatar,
                location: 'New York, NY',
                feeling: { id: 9, emoji: '📈', text: 'strategic' },
                taggedFriends: [
                    { id: 17, name: 'David Park', avatar: authorAvatar },
                    { id: 18, name: 'Julia Wright', avatar: authorAvatar }
                ],
                category: categories[8] // Business
            },
            { 
                id: 10, 
                text: 'Entertainment News and Updates', 
                media: thumbnail10, 
                likes: 0, 
                comments: [{ text: 'Exciting!', id: 1 }, { text: 'Looking forward to this!', id: 2 }],
                userId: 10, 
                userName: 'Entertainment Guru', 
                authorAvatar: authorAvatar,
                location: 'Hollywood, CA',
                feeling: { id: 10, emoji: '🎬', text: 'excited' },
                taggedFriends: [
                    { id: 19, name: 'Chris Lee', avatar: authorAvatar },
                    { id: 20, name: 'Anna Garcia', avatar: authorAvatar }
                ],
                category: categories[9] // Entertainment
            }
        ];

        setAllPosts(allPostsData);

        // Filter posts based on the selected category
        const filteredPosts = allPostsData.filter(post => post.category.id === parseInt(categoryId));
        setPosts(filteredPosts);
    }, [categoryId]);

    return (
        <div className="post-category-container">
            <h1 className="category-title">Posts in Category: {categories.find(cat => cat.id === parseInt(categoryId)).name}</h1>
            
            {/* Filter Section as a List of Buttons */}
            <div className="filter-section">
                <span>Filter by Category:</span>
                <div className="category-buttons">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-button ${category.id === parseInt(categoryId) ? 'active' : ''}`}
                            onClick={() => {
                                const selectedCategoryId = category.id;
                                // Update the URL with the selected categoryId
                                const newUrl = `${location.pathname}?categoryId=${selectedCategoryId}`;
                                window.history.pushState({}, '', newUrl);
                                setPosts(allPosts.filter(post => post.category.id === selectedCategoryId));
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <a href={`/profile?id=${post.userId}`}><img src={post.authorAvatar} alt={`${post.userName}'s avatar`} className="avatar" /></a>
                            <div className="post-info">
                                <a href={`/profile?id=${post.userId}`}><span className="user-name">{post.userName}</span></a>
                                <span className="post-timestamp">{new Date(post.id).toLocaleString()}</span>
                                
                            </div>
                        </div>
                        <div className="post-content">{post.text}</div>
                        {post.location && (
                            <div className="post-location">
                                <span>Location: {post.location}</span>
                            </div>
                        )}
                        {post.feeling && (
                            <div className="post-feeling">
                                Feeling: {post.feeling.text} <span className="feeling-emoji">{post.feeling.emoji}</span>
                            </div>
                        )}
                        {post.taggedFriends.length > 0 && (
                            <div className="tagged-friends">
                                <span>Tagged Friends: </span>
                                {post.taggedFriends.map(friend => (
                                    <span key={friend.id} className="tagged-friend">
                                        <img src={friend.avatar} alt=<a href={`/profile?id=${friend.id}`}>{friend.name}</a> className="tagged-avatar" />
                                        <a href={`/profile?id=${friend.id}`}>{friend.name}</a>
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        {post.media && (
                            <img src={post.media} alt="Post Media" className="post-media" />
                        )}
                        <div className="post-actions">
                            <button className="like-button" onClick={() => toggleLike(post.id)}>
                                {post.liked ? 'Unlike' : 'Like'} ({post.likes})
                            </button>
                            <button className="share-button">
                                Share
                            </button>
                            <button className="read-more-button" onClick={() => window.location.href=`/postview/${post.id}`}>
                                Read More
                            </button>
                        </div>
                        <div className="comment-input-wrapper">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                className="comment-input"
                                data-post-id={post.id}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.target.value) {
                                        handleCommentSubmit(post.id, e.target.value);
                                        e.target.value = ''; // Clear input after submission
                                    }
                                }}
                            />
                            <button 
                                className="comment-submit-button" 
                                onClick={() => {
                                    const inputField = document.querySelector(`input[data-post-id="${post.id}"]`);
                                    if (inputField.value) {
                                        handleCommentSubmit(post.id, inputField.value);
                                        inputField.value = ''; // Clear input after submission
                                    }
                                }}
                            >
                                Submit
                            </button>
                        </div>
                        <div className="comments-list">
                            {post.comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    {comment.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="read-more-button" onClick={() => window.location.href=`/home`}>
            <img src={homeicon} alt="Home" style={{ width: '30px', height: '30px' }} />  Back To Home
                            </button>
        </div>
    );
};

export default PostCategory;