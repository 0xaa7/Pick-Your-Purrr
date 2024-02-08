import { motion } from 'framer-motion';
import './test.scss'

const Test = () => {
const words = "Hello"

  return (
    <div className='container12'>
 <motion.div
  className="test"
  animate={{ x: 0 }}
  transition={{ duration: 5, delay:2, ease: 'easeOut' }}
  initial={{ x: -1300 }}
  staggerChildren={0.2} // Adjust stagger value as needed
>
  {/* Multiple child elements here */}
</motion.div>
          <div className='wrapper12'>  
            {words.split('').map((letter, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: '20px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut', delay: index * 0.1 }} // Stagger delay
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.h1>
        ))}
          </div>

    </div>
         
     
    
  );
};

export default Test;