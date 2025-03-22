import  { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';
import Client1 from '../../assets/testimonials/Client1Avatar.jpg';
import Client2 from '../../assets/testimonials/Client2Avatar.jpg';
import Client3 from '../../assets/testimonials/Client3Avatar.jpg';


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            id: 1,
            text: "I've been using this blog site for months.",
            author: "Admin",
            image: Client1
        },
        {
            id: 2,
            text: "The blog site stands out for its modern and elegant design.",
            author: "Moderator",
            image: Client2
        },
        {
            id: 3,
            text: "What keeps me coming back to this blog site is ?.",
            author: "Hasnat Sifat",
            image: Client3
        }
    ];

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);


    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
        <div className='testimonials'>
            <h2>What Our Clients Say</h2>
            <div className='testimonial-card'>
            <a href={`/profile?id=${testimonials[currentIndex].id}`}>     <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} /></a> <a href={`/profile?id=${testimonials[currentIndex].id}`}> <h4>- {testimonials[currentIndex].author}</h4></a>
                <div> 
                <p dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].text }}></p> <div className='testimonials'><a href={`/feedback/${testimonials[currentIndex].id}`}>  <h4> -   View</h4> </a></div>
                   
                </div>
            </div>
       
            <div className='pagination'>
                {testimonials.map((_, index) => (
                    <span key={index} className={index === currentIndex ? 'active' : ''} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
