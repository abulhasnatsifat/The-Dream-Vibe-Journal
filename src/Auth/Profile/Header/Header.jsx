import { useState } from 'react';
import { FaHome, FaSpinner } from 'react-icons/fa';
import './Header.css';

const ProfileHeader = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        setLoading(true);

        setTimeout(() => {
            const items = ['Home', 'Friends', 'Messages', 'Settings', 'Logout'];
            const filteredResults = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setSearchResults(filteredResults);
            setLoading(false);
        }, 2000);
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
        <header className='profile-header'>
            <nav className='navigation'>
            
                 <a href='/home'><FaHome /> Home</a>
                    
                  
                        <input type='text' placeholder='Search...' className='search-bar' value={searchInput} onChange={handleSearch} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} onKeyDown={handleKeyDown} />
                        {loading && <FaSpinner className='spinner' />}
                        {searchResults.length > 0 && (
                            <ul className='search-results'>
                                {searchResults.map((result, index) => (
                                    <li key={index} className={focusedIndex === index ? 'focused' : ''}><a href={`#${result.toLowerCase()}`}>{result}</a></li>
                                ))}
                            </ul>
                        )}
                   
               
            </nav>
        </header>
    );
};

export default ProfileHeader;
