import React from 'react';
import './Newslater.css';

const Newslater = () => {
    return (
        <div className='newslater-page'>
            <div className="tick-animation"></div>
            <br/>
            <h1>Subscription Confirmed!</h1>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>You will receive the latest updates and news directly to your inbox.</p>
            <button className='back-to-home-btn' onClick={() => window.location.href = '/home'}>Back to Home</button>
        </div>
    );
};

export default Newslater;