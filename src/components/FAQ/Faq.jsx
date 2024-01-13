import { useRef } from "react";
import "./faq.scss"
import { motion, useScroll, useTransform} from "framer-motion"

const Faq = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.8 1"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  

  return (
    <div className='wrapper1' ref={ref} >
      <div className="circle-container">
      <motion.div className='c1' style={{scale}} >
        <motion.div style={{scale}} className='c2'>
          <motion.div style={{scale}} className='c3' >
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
      <motion.div style={{scale:scale1}} className="image-container1" >
        <img src="cat54.png" />   
      </motion.div>
    </div>
  )
}

export default Faq;