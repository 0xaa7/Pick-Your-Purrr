import { useRef } from "react";
import './Test.scss'
import { motion, useScroll, useTransform } from "framer-motion"

const Cards = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.76 1"]});


  const scale1 = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    
       <motion.div key={data.id}
                  style={{
                  scale: scale1,
                  opacity: opacity1}} 
                   className="card"
                   ref={ref} 
                  >
             <img src={data.card} />     
                
          </motion.div>
    
  )
}

export default Cards