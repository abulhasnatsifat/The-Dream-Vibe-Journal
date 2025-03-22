import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Search.css';
import authorAvatar from '../../assets/Author/default-profile.png';
import video1 from '../../assets/Profile/Videos/video1.mp4';
import video2 from '../../assets/Profile/Videos/video2.mp4';
import thumbnail1 from '../../assets/thumbnails/thumbnail1.jpg';
import thumbnail2 from '../../assets/thumbnails/thumbnail2.jpg';

const allResults = [
  { id: 11, text: 'Exploring AI: The Future of Technology', media: video1, mediaType: 'video', likes: 5, comments: [], userName: 'AI Explorer', authorAvatar },
  { id: 12, text: 'AI in Everyday Life: Transforming Our World', media: video2, mediaType: 'video', likes: 3, comments: [], userName: 'Tech Innovator', authorAvatar },
  { id: 13, text: 'Beautiful Sunset', media: thumbnail1, mediaType: 'photo', likes: 10, comments: [], userName: 'Nature Lover', authorAvatar },
  { id: 14, text: 'City Lights at Night', media: thumbnail2, mediaType: 'photo', likes: 8, comments: [], userName: 'Urban Explorer', authorAvatar },
];

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      filterResults(searchQuery);
    }
  }, [location]);

  const filterResults = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    const filteredResults = allResults.filter(result =>
      result.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    navigate(`?q=${searchQuery}`, { replace: true });
    filterResults(searchQuery);
  };

  return (
    <div className="search-container">
      {/* Search Bar */}
      <div className="search-bar">
      
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        /> 
      </div>

      {/* Search Results */}
      <h2>Search Results for: {query} </h2>
      <div className="results-list">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="post-card">
              <div className="post-header">
                <img src={result.authorAvatar} alt="User Avatar" className="avatar" />
                <span className="user-name">{result.userName}</span>
              </div>
              <div className="post-content">
                <p>{result.text}</p>
                {result.mediaType === 'video' ? (
                  <video controls className="media">
                    <source src={result.media} type="video/mp4" />
                  </video>
                ) : (
                  <img src={result.media} alt="Post" className="media" loading="lazy" />
                )}
              </div>
              <div className="post-details">
                <span className="likes">❤️ {result.likes}</span>
                <span className="comments">💬 {result.comments.length}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No results found. Please try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
