/* eslint-disable jsx-a11y/img-redundant-alt */
import  { useState } from 'react';
import './Photos.css';
import photo1 from '../../../assets/Profile/Photos/photo1.jpg';
import photo2 from '../../../assets/Profile/Photos/photo2.jpg';
import photo3 from '../../../assets/Profile/Photos/photo3.jpg';
import photo4 from '../../../assets/Profile/Photos/photo4.jpg';
import photo5 from '../../../assets/Profile/Photos/photo5.jpg';
import photo6 from '../../../assets/Profile/Photos/photo6.jpg';
import photo7 from '../../../assets/Profile/Photos/photo7.jpg';
import photo8 from '../../../assets/Profile/Photos/photo8.jpg';
import SendIcon from '../../../assets/story/send.svg';

const Photos = () => {
    const [uploadedPhoto, setUploadedPhoto] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const caption = document.querySelector('.caption-input').value;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedPhoto(reader.result);
                setPhotos(prevPhotos => [...prevPhotos, reader.result]);
                setPhotoDetails([...photoDetails, { caption: caption || 'New Upload', likes: 0, comments: [] }]);
                setComments([...comments, []]);
            };
            reader.readAsDataURL(file);
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [photoDetails, setPhotoDetails] = useState([
        { caption: 'A beautiful sunset over the mountains.', likes: 0, comments: [] },
        { caption: 'A day at the beach with friends.', likes: 0, comments: [] },
        { caption: 'Exploring the city streets.', likes: 0, comments: [] },
        { caption: 'A serene lake view.', likes: 0, comments: [] },
        { caption: 'Capturing memories with loved ones.', likes: 0, comments: [] },
        { caption: 'A vibrant flower garden.', likes: 0, comments: [] },
        { caption: 'A cozy coffee shop ambiance.', likes: 0, comments: [] },
        { caption: 'An adventurous hiking trail.', likes: 0, comments: [] }
    ]);
    const [photos, setPhotos] = useState([photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]);
    const [comments, setComments] = useState([
        ['Great photo!', 'Amazing view!'],
        ['Looks stunning!', 'Wish I was there!'],
        ['So vibrant!', 'Incredible shot!'],
        ['Beautiful scenery!', 'Nature at its best!'],
        ['Memories captured!', 'Love this place!'],
        ['Such a lovely garden!', 'Flowers are beautiful!'],
        ['Cozy vibes!', 'Perfect coffee spot!'],
        ['Adventure awaits!', 'Hiking looks fun!']
    ]);
    const [currentComment, setCurrentComment] = useState('');

    const openPopup = (photo, index) => {
        setCurrentPhoto(photo);
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const nextPhoto = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
        setCurrentPhoto(photos[(currentIndex + 1) % photos.length]);
    };

    const prevPhoto = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
        setCurrentPhoto(photos[(currentIndex - 1 + photos.length) % photos.length]);
    };

    const handleLike = (index) => {
        const updatedPhotoDetails = [...photoDetails];
        updatedPhotoDetails[index].likes++;
        setPhotoDetails(updatedPhotoDetails);
    };

    const handleCommentSubmit = () => {
        if (currentComment) {
            const updatedComments = [...comments];
            updatedComments[currentIndex].push(currentComment);
            setComments(updatedComments);
            setCurrentComment('');
        }
    };

    return (
        <div className='photos-section'>
            <h2 className='photos-title'>Photos</h2>
            <div className='photo-upload-section'>      {uploadedPhoto && <img src={uploadedPhoto} alt='Uploaded' className='uploaded-photo-preview' />}
                <input type='file' accept='image/*' onChange={handlePhotoUpload} />
                <input type='text' placeholder='Add a caption...' className='caption-input' />
           <button className='upload-submit-button' onClick={handlePhotoUpload}>Upload</button>
            </div>
            <div className='photos-grid'>
                {photos.map((photo, index) => (
                    <div className='photo-item' key={index}>
                        <img src={photo} alt={`Photo ${index + 1}`} className='photo-thumbnail' onClick={() => openPopup(photo, index)} />
                        <p className='photo-caption'>{photoDetails[index].caption}</p>
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className='popup'>
                    <button className='close-button' onClick={closePopup}>✖ Close</button>
                    <img src={currentPhoto} alt='Full view' className='full-screen-image' />
                    <div className='card'>
                        <p className='photo-caption'>{photoDetails[currentIndex].caption}</p>
                        <div className='photo-actions'>
                            <button className='like-button' onClick={() => handleLike(currentIndex)}>❤️ {photoDetails[currentIndex].likes} Loves</button>
                            <button className='comment-button' onClick={handleCommentSubmit}>💬 Comment</button>
                            <button className='share-button' onClick={() => alert('Share functionality coming soon!')}>🔗 Share</button>
                        </div>
                        <div className='comments-section'>
                            <h4>Comments:</h4>
                            {comments[currentIndex].map((comment, index) => (
                                <p key={index}>{comment}</p>
                            ))}
                        </div>
                        <input
                            type='text'
                            className='comment-input'
                            placeholder='Add a comment...'
                            value={currentComment}
                            onChange={(e) => setCurrentComment(e.target.value)}
                        />
                        <button className='submit-comment-button' onClick={handleCommentSubmit}>
                            <img src={SendIcon} alt='Send' style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                    <div className='navigation-buttons'>
                        <button onClick={prevPhoto} className='nav-button'>◀</button>
                        <button onClick={nextPhoto} className='nav-button'>▶</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photos;