import  { useState } from 'react';
import './Nav.css';
import MenuIcon from '../../assets/nav/Menu.svg';
import StoryIcon from '../../assets/nav/Story.svg';
import CategoryIcon from '../../assets/nav/Category.svg';
import UserProfile from '../../assets/nav/UserProfile.svg';
import ProfileIcon from '../../assets/nav/Profile.svg';
import MessageIcon from '../../assets/nav/Message.svg';
import LogoutIcon from '../../assets/nav/Logout.svg';
import NotificationIcon from '../../assets/nav/Notification.svg';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='nav'>
            <button className='menu-button' onClick={toggleMenu}>
              <img src={MenuIcon} alt="Menu" width="24" height="24" style={{marginLeft: '0px'}} />
            </button>
            <div className={`nav-popup ${isMenuOpen ? 'open' : ''}`}>  
                <div className="nav-items">
                  <div className="nav-item updated-nav-item">
                    <img src={StoryIcon} alt="Story" width="24" height="24" />
                    <a className="nav-link" href='/story'>Story</a>
                  </div>
                  <div className="nav-item updated-nav-item">
                    <img src={CategoryIcon} alt="Services" width="24" height="24" />
                    <a className="nav-link" href='/postcategory'>Category</a>
                  </div>
                </div>
            </div>
            <button className='profile-button' onClick={() => setProfileOpen(!isProfileOpen)}>
              <img src={ProfileIcon} alt="Profile" width="35" height="35" />
            </button>
            {isProfileOpen && (
              <div className={`profile-popup open`}>  
                <div className="profile-items">
                  
                  <div className="profile-item updated-profile-item">
                    <img src={UserProfile} alt="Profile" width="24" height="24" />
                    <a className="profile-link" href='/profile'>Profile</a>
                  </div>
                  <div className="profile-item updated-profile-item">
                    <img src={MessageIcon} alt="Messages" width="24" height="24" />
                    <a className="profile-link" href='/messages'>Messages</a>
                  </div><div className="profile-item updated-profile-item">
                    <img src={NotificationIcon} alt="Notifications" width="24" height="24" />
                    <a className="profile-link" href='/notifications'>Notifications</a>
                  </div>
                  <div className="profile-item updated-profile-item">
                    <img src={LogoutIcon} alt="Logout" width="24" height="24" />
                    <a className="profile-link" href='/updated'>Logout</a>
                  </div>
                </div>
              </div>
            )}
        </nav>
    );
};

export default Nav;