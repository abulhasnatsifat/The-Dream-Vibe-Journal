import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Find.css';

const Find = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [loading] = useState(false);
    const [searchResults] = useState(['Home', 'Friends', 'Messages', 'Settings', 'Logout']);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        
        if (event.key === 'Enter' || event.type === 'click') {
            navigate(`/search?q=${encodeURIComponent(value)}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            if (focusedIndex < searchResults.length - 1) {
                setFocusedIndex(focusedIndex + 1);
            }
        } else if (event.key === 'ArrowUp') {
            if (focusedIndex > 0) {
                setFocusedIndex(focusedIndex - 1);
            }
        } else if (event.key === 'Enter') {
            if (focusedIndex >= 0 && focusedIndex < searchResults.length) {
                const selectedItem = searchResults[focusedIndex];
                // Logic to select the focused menu item
                console.log(`Selected item: ${selectedItem}`);
            }
        }
    };

    return (
        <div className="find-container"> 
          <div className="modern-text">Find Your Dreams</div>
            <div className="search-wrapper">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search-bar" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    onKeyDown={(e) => {
                        handleKeyDown(e);
                        if (e.key === 'Enter') handleSearch(e);
                    }}
                />
                <button 
                    className="search-button"
                    onClick={() => handleSearch({ type: 'click', target: { value: searchInput } })}
                >
                    Search
                </button>
                {loading && <div className="spinner" />}
            </div>
        </div>
    );
};

export default Find;