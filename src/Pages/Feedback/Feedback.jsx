import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client1 from '../../assets/testimonials/Client1Avatar.jpg';
import Client2 from '../../assets/testimonials/Client2Avatar.jpg';
import Client3 from '../../assets/testimonials/Client3Avatar.jpg';
import './Feedback.css';

const testimonials = [
  {
    id: 1,
    text: "I've been using this blog site for months and I’m continually impressed by its seamless user experience. The clean layout, intuitive navigation, and fast loading times make it a pleasure to browse. I love how easy it is to find articles by category or keyword. It feels like the site is designed with the reader in mind, ensuring every visit is enjoyable and hassle-free.",
    author: "Admin",
    image: Client1
  },
  {
    id: 2,
    text: "The blog site stands out for its modern and elegant design. The aesthetic choices, from typography to color schemes, create a calming and engaging reading environment. I also appreciate the thoughtful use of images and graphics that enhance the content without overwhelming it. It's clear that the creators value both style and substance.",
    author: "Moderator",
    image: Client2
  },
  {
    id: 3,
    text: "What keeps me coming back to this blog site is the consistent quality of the content. Each post is well-researched, insightful, and presented in a way that’s both informative and engaging. I always leave with new knowledge and inspiration. It’s a go-to source for anyone who values in-depth articles and thoughtful perspectives.",
    author: "Hasnat Sifat",
    image: Client3
  }
];

const Feedback = () => {
  const { id } = useParams();
  const [testimonial, setTestimonial] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const foundTestimonial = testimonials.find(t => t.id === parseInt(id));
    setTestimonial(foundTestimonial);
  }, [id]);

  if (!testimonial) {
    return <div>Testimonial not found</div>;
  }

  return (
    <div className="feedback-container">
      <div className="testimonial-details">
        <img src={testimonial.image} alt={testimonial.author} />
        <h2>{testimonial.author}</h2>
        <p>{testimonial.text}</p>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (hover || rating) ? 'star filled' : 'star'}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;