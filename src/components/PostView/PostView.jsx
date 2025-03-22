import React, { useState } from 'react';
import './PostView.css';
import { useParams } from 'react-router-dom';
import Homeicon from '../../assets/story/home.svg'; 
import video1 from '../../assets/Profile/Videos/video1.mp4';
import video2 from '../../assets/Profile/Videos/video2.mp4';
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

const PostView = () => {
    const { id } = useParams();
    
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
        { text: 'Great post!', userId: 1, userName: 'User1', authorAvatar: authorAvatar },
        { text: 'Very informative, thanks!', userId: 2, userName: 'User2', authorAvatar: authorAvatar },
        { text: 'I learned a lot from this.', userId: 3, userName: 'User3', authorAvatar: authorAvatar }
    ]); // Example comments

    const posts = [
        {
            id: 11,
            text: 'Exploring AI: The Future of Technology',
            media: video1,
            mediaType: 'video',
            likes: 0,
            comments: [
                { text: 'Amazing video on AI!', userId: 1, userName: 'Tech Enthusiast', authorAvatar: authorAvatar }
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
            date: '2023-10-01',
            tags: ['AI', 'Technology', 'Future']
        },
        {
            id: 12,
            text: 'AI in Everyday Life: Transforming Our World',
            media: video2,
            mediaType: 'video',
            likes: 0,
            comments: [
                { text: 'Great explanation of AI applications!', userId: 2, userName: 'Future Tech', authorAvatar: authorAvatar }
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
            date: '2023-10-02',
            tags: ['AI', 'Education']
        },
        { 
            id: 1, 
            text: 'The Rise of AI in Everyday Life', 
            media: thumbnail1, 
            mediaType: 'image',
            likes: 0, 
            comments: [
                { text: 'Great insights on AI!', userId: 1, userName: 'Sarah Johnson', authorAvatar: authorAvatar }
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
            date: '2023-10-03',
            tags: ['AI', 'Technology']
        },
        { 
            id: 2, 
            text: 'Top 10 JavaScript Frameworks in 2025', 
            media: thumbnail2, 
            likes: 0, 
            comments: [
                { text: 'Very informative, thanks!', userId: 2, userName: 'Mike Chen', authorAvatar: authorAvatar }
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
            date: '2023-10-04',
            tags: ['JavaScript', 'Technology']
        },
        { 
            id: 3, 
            text: 'Is Blockchain the Future of Security?', 
            media: thumbnail3, 
            likes: 0, 
            comments: [
                { text: 'Interesting perspective!', userId: 3, userName: 'Alex Turner', authorAvatar: authorAvatar },
                { text: 'Blockchain is the future!', userId: 4, userName: 'David Kim', authorAvatar: authorAvatar },
                { text: 'I have my doubts.', userId: 5, userName: 'Rachel White', authorAvatar: authorAvatar }
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
            date: '2023-10-05',
            tags: ['Blockchain', 'Security', 'Business']
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
            date: '2023-10-06',
            tags: ['Cooking']
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
            date: '2023-10-07',
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
            date: '2023-10-08',
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
            date: '2023-10-09',
            tags: ['Fitness']
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
            date: '2023-10-10',
            tags: ['DIY', 'Art']
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
            date: '2023-10-11',
            tags: ['Sustainable', 'Education']
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
            date: '2023-10-12',
            tags: ['Startup', 'Business']
        }
    ];

    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    // Filter out the current post for related posts
    const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 3); // Get 3 related posts

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment = {
                text: newComment,
                userId: 0,
                userName: 'Anonymous',
                authorAvatar: authorAvatar
            };
            setComments(prevComments => [...prevComments, comment]);
            setNewComment('');
        }
    };

    const handleEditPost = () => {
        const updatedText = prompt("Edit your post:", post.text);
        if (updatedText !== null) {
            // Update the post text (this would typically involve state management)
            // Assuming you have a way to update the post in your state
            // setPost(prevPost => ({ ...prevPost, text: updatedText })); // Example
        }
    };

    const handleLikeToggle = () => {
        setLiked(!liked);
        setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1);
    };

    const handleDeletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            // Handle post deletion (this would typically involve state management)
            alert("Post deleted!"); // Placeholder for actual deletion logic
        }
    };

    const handleShare = () => {
        alert('Share functionality not implemented yet.'); // Placeholder for share functionality
    };

    return (
        <div className="post-view">
            <h1 className="post-title">{post.text}</h1>   <button 
                                className="read-more-button" 
                                onClick={() => window.location.href=`/home`}
                            >
                                <img src={Homeicon} alt="Home" style={{ width: '20px', height: '20px' }} /> Back To Home
                            </button>
            {post.mediaType === 'video' ? (
                <video src={post.media} controls className="post-media" />
            ) : (
                <img src={post.media} alt="Post Media" className="post-media" />
            )}
            <div className="author-section">
                <div className="author-card">
                    <img src={post.authorAvatar} alt={`${post.userName}'s avatar`} className="author-avatar" />
                    <div className="author-info">
                        <p className="author-name"><strong>{post.userName}</strong></p>
                        <p className="author-location">{post.location}</p>
                    </div>
                </div>
            </div>
            <div className="post-details">
                <p className="likes-comments">Likes: {likes} | Comments: {comments.length}</p>
                <p className="feeling-category">Feeling: {post.feeling.text} {post.feeling.emoji} | Category: {post.category.name} {post.category.icon}</p>
                <p className="post-date">Date: {new Date(post.date).toLocaleDateString()}</p>
            </div>

            {/* Display Tags */}
            {post.tags && post.tags.length > 0 && (
                <div className="post-tags">
                    <h3>Tags:</h3>
                    <ul>
                        {post.tags.map((tag, index) => (
                            <li key={index} className="post-tag">{tag}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display Tagged Friends */}
            {post.taggedFriends && post.taggedFriends.length > 0 && (
                <div className="tagged-friends">
                    <h3>Tagged Friends:</h3>
                    <div className="tagged-friends-list">
                        {post.taggedFriends.map(friend => (
                            <div key={friend.id} className="tagged-friend">
                                <img src={friend.avatar} alt={friend.name} className="tagged-friend-avatar" />
                                <span>{friend.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p><strong>{comment.userName}</strong>: {comment.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit} className="comment-form">
                <input 
                    type="text" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Add a comment..." 
                    required 
                    className="comment-input"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="post-actions">
                <button onClick={handleLikeToggle} className={`like-button ${liked ? 'liked' : ''}`}>
                    <span role="img" aria-label="like">👍</span> {liked ? 'Unlike' : 'Like'}
                </button>
                <button onClick={handleShare} className="share-button">
                    <span role="img" aria-label="share">🔗</span> Share
                </button>
                <button onClick={handleEditPost} className="edit-button">Edit Post</button>
                <button onClick={handleDeletePost} className="delete-button">Delete Post</button>
            </div>

            {/* Related Posts Section */}
            <div className="related-posts">
                <h2>Related Posts</h2>
                <div className="related-posts-list">
                    {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="related-post">
                            <a href={`/postview/${relatedPost.id}`} className="related-post-link">
                                <img src={relatedPost.media} alt={relatedPost.text} className="related-post-thumbnail" />
                                <p>{relatedPost.text}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostView;
