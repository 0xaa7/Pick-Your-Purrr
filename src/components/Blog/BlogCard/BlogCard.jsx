import { useRef } from "react";
import "./blogcard.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const BlogCard = ({ blog }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.76 1"]});


  const scale1 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    
       <motion.div key={blog.id}
                  style={{
                  scale: scale1,
                  opacity: opacity1}} 
                  className='blog'
                  >
                  <div className='blog-image' ref={ref} >
                    <img src={blog.img} alt={`blog-${blog.id}`} />
                  </div>
                  <div className='blog-content'>
                    <h3>{blog.blogTitle}</h3>
                    <h4>{blog.blogDesc}</h4>
                  </div>
          </motion.div>
    
  )
}

export default BlogCard