import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LogoIcon1 from '../../assets/logo/logo.svg';
import LogoIcon2 from '../../assets/logo/logo1.svg';
import './Logo.css';

const Logo = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = [LogoIcon1, LogoIcon2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <motion.div 
      className="dream-logo"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
    >
      <motion.img 
        key={currentLogo}
        src={logos[currentLogo]} 
        alt="Dream Vibe Journal Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Logo;
