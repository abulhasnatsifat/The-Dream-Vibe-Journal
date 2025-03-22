import  { useState } from 'react';
import './About.css';

const About = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        fullName: 'John Doe',
        username: '@johndoe',
        bio: 'A passionate software developer with experience in building web applications.',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        location: 'New York, USA',
        contactDetails: {
            email: 'johndoe@example.com',
            phone: '123-456-7890'
        },
        workAndEducation: {
            work: 'Software Engineer at Tech Company',
            education: 'B.Sc. in Computer Science'
        }
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Logic to save the profile data
        setIsEditing(false);
    };

    return (
        <div className="profile-details">
              <h2>About  {profileData.fullName}</h2>


            <button className="edit-profile-button" onClick={handleEditToggle}>{isEditing ? 'Cancel' : 'Edit Profile'}</button>
            {isEditing ? (
                <div className="about-section" style={{ color: 'black' }}>
                  
                    <div className="field">
                        <label>Date of Birth</label>
                        <input type="date" value={profileData.dateOfBirth} onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })} />
                        <span className="icon">🎂</span>
                        <select className="privacy-setting">
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Gender</label>
                        <input type="text" value={profileData.gender} onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })} placeholder="e.g., Male/Female" />
                        <span className="icon">🚻</span>
                        <select className="privacy-setting">
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type="text" value={profileData.location} onChange={(e) => setProfileData({ ...profileData, location: e.target.value })} placeholder="Current City" />
                        <span className="icon">🏙️</span>
                        <input type="text" placeholder="Hometown" />
                        <span className="icon">🏡</span>
                        <select className="privacy-setting">
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Contact Details</label>
                        <input type="email" value={profileData.contactDetails.email} onChange={(e) => setProfileData({ ...profileData, contactDetails: { ...profileData.contactDetails, email: e.target.value } })} placeholder="Email" />
                        <span className="icon">📧</span>
                        <input type="tel" value={profileData.contactDetails.phone} onChange={(e) => setProfileData({ ...profileData, contactDetails: { ...profileData.contactDetails, phone: e.target.value } })} placeholder="Phone" />
                        <span className="icon">📞</span>
                        <select className="privacy-setting">
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Work and Education</label>
                        <input type="text" value={profileData.workAndEducation.work} onChange={(e) => setProfileData({ ...profileData, workAndEducation: { ...profileData.workAndEducation, work: e.target.value } })} placeholder="Work" />
                        <span className="icon">💼</span>
                        <input type="text" value={profileData.workAndEducation.education} onChange={(e) => setProfileData({ ...profileData, workAndEducation: { ...profileData.workAndEducation, education: e.target.value } })} placeholder="Education" />
                        <span className="icon">🎓</span>
                        <select className="privacy-setting">
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                  
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div className="about-section" style={{ color: 'black' }}>
                 
                    <div className="field">
                        <label>Date of Birth :- </label>
                        <p>{profileData.dateOfBirth}</p>
                        <span className="icon">🎂</span>
                    </div>
                    <div className="field">
                        <label>Gender :- </label>
                        <p>{profileData.gender}</p>
                        <span className="icon">🚻</span>
                    </div>
                    <div className="field">
                        <label>Location :- </label>
                        <p>{profileData.location}</p>
                        <span className="icon">🏙️</span>
                    </div>
                    <div className="field">
                        <label>Contact Details :- </label> 
                        <p>{profileData.contactDetails.email}</p>
                        <span className="icon">📧</span>
                        <p>{profileData.contactDetails.phone}</p>
                        <span className="icon">📞</span>
                    </div>
                    <div className="field">
                        <label>Work and Education : </label> - 
                        <p>{profileData.workAndEducation.work}</p>
                        <span className="icon">💼</span>
                        <p>{profileData.workAndEducation.education}</p>
                        <span className="icon">🎓</span>
                    </div>
         
                        
                </div>
            )}
           
        </div>
    );
};

export default About;