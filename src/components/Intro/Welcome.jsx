import { motion } from 'framer-motion';
import './Welcome.css';
import Logo from './Logo';

const Welcome = () => {
  const handleStartJournaling = () => {
    window.location.href = '/home';
  };

  return (
    <motion.div 
      className="welcome-container centered-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="glass-container centered-content"
        style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.3)" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Logo />
        <motion.h1 
          className="gradient-text"
          style={{ background: "linear-gradient(90deg, #FF7E5F, #FEB47B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          aria-label="Welcome to Your Dream Journal"
        >
          Welcome to Your  <br/ >Dream Vibe Journal
        </motion.h1>
        <motion.p 
          className="welcome-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your sanctuary for documenting dreams and exploring their meanings
        </motion.p>
        <motion.button
          className="glass-button"
          style={{ background: "rgba(255, 255, 255, 0.2)", border: "1px solid rgba(255, 255, 255, 0.5)", color: "#fff", padding: "12px 24px", fontSize: "1.1rem", fontWeight: "500" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          aria-label="Start Journaling"
          onClick={handleStartJournaling}
        >
          Start Journaling
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;