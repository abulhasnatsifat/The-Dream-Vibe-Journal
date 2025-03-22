import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';
import Homeblog from '../Homeblog/Homeblog';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
  return (
<div>
  <Nav />   
  <br/>
  <br/>
  <br/>
   <div className="homeblog">
  <FeaturedPost />
  <Homeblog/>
  <NewsletterSignup />
  <Testimonials />
  <br/>
  <br/>
  <br/>
  <Footer />
</div>
</div>
    
      
  );
};

export default Home;