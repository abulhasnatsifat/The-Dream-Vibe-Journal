import { motion } from 'framer-motion';
import './Updated.css';
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
  
    
        <motion.p 
          className="Info"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          This Featured on The Dream Vibe Journal Not Added
        </motion.p>
        <motion.p 
          className="Update"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Myabe Added This Feature In  Future 
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
          Back To Home 
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;