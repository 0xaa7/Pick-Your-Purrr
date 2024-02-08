import { motion } from 'framer-motion';
import './test.scss'

const Test = () => {
  return (
    <div className='container'>
 <motion.div
  className="test"
  animate={{ x: 0 }}
  transition={{ duration: 5, delay:2, ease: 'easeOut' }}
  initial={{ x: -1300 }}
  staggerChildren={0.2} // Adjust stagger value as needed
>
  {/* Multiple child elements here */}
</motion.div>
          <div className='wrapper'>  
            <h1>
              Hello
            </h1>
          </div>

    </div>
         
     
    
  );
};

export default Test;