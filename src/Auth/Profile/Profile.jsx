import  { useState } from 'react';
import Header from './Header/Header';
import Cover from './Cover/Cover';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import About from './About/About';
import Friends from './Friends/Friends';
import Photos from './Photos/Photos';
import Videos from './Videos/Videos';

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState('Main');

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Main':
                return <Main />;
            case 'About':
                return <About />;
            case 'Friends':
                return <Friends />;
            case 'Photos':
                return <Photos />;
            case 'Videos':
                return <Videos />;
            default:
                return <Main />;
        }
    };

    return (
        <div className="profile">
            <Header />
            <Cover />
            <Navbar onTabChange={setSelectedTab} />
            {renderTabContent()}
        </div>
    );
};

export default Profile;