import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUserFriends, FaVideo, FaInfoCircle, FaImage, FaClipboardList } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState('Main');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        onTabChange(tab);
    };

    const tabs = [
        { name: 'Posts', icon: <FaClipboardList />, value: 'Main' },
        { name: 'About', icon: <FaInfoCircle />, value: 'About' },
        { name: 'Friends', icon: <FaUserFriends />, value: 'Friends' },
        { name: 'Photos', icon: <FaImage />, value: 'Photos' },
        { name: 'Videos', icon: <FaVideo />, value: 'Videos' },
    ];

    return (
        <nav className='navbar'>
            <ul className='navbar-tabs'>
                {tabs.map(tab => (
                    <li key={tab.value} className={`navbar-tab ${selectedTab === tab.value ? 'active' : ''}`} onClick={() => handleTabChange(tab.value)}>
                        {tab.icon} {tab.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    onTabChange: PropTypes.func.isRequired,
};

export default Navbar;