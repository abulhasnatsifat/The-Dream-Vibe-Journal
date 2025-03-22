import  { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        // Simulate an API call
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        setTimeout(() => {
            setIsLoading(false);
            setSuccessMessage('');
            setName('');
            setEmail('');
            window.location.href = '/Newslater';
        }, 2000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='newsletter-signup'>
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter your name'
                    aria-label='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder='Enter your email'
                    aria-label='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Subscribe'}
                </button>
            </form>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            {showModal && (
                <div className='modal'>
                    <p>Subscription Successful!</p>
                    <button onClick={handleCloseModal}>Close</button>
                </div>
            )}
               
        </div>
    );
};

export default NewsletterSignup;