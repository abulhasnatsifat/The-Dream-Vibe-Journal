import { motion } from 'framer-motion';
import './Services.css';
;

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
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
  
        <motion.h1 
          className="gradient-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          aria-label="Welcome to Dream Vibe Journal"
        >
          Welcome to Dream Vibe Journal
        </motion.h1>
        <motion.p 
          className="welcome-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your personal space for capturing thoughts and dreams
        </motion.p>
        <motion.button
          className="glass-button"
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