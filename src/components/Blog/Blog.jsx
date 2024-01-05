

import { useRef } from 'react'
import "./blog.scss"
import { useScroll, motion, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom';

const Blog = () => {
const ref = useRef(null);
 const { scrollYProgress } = useScroll({
    target: ref,
    offset:["0 1", "0.9 1"],
  });

 const scale = useTransform(scrollYProgress,[0, 1], [0.6, 1]);
 const scale1 = useTransform(scrollYProgress,[0, 1], [2, 1]);
  const opacity = useTransform(scrollYProgress,[0, 1], [0.6, 1]);
 const scaleimage = useTransform(scrollYProgress,[0, 1], [0.4, 1]);
const opacityimage = useTransform(scrollYProgress,[0, 1], [0.3, 1]);
  return (
    <>
    <div  className='blog'>
      
      <div className='wrapper'>
         
        <div className='main-header'>
          <h1 
              >Our Blogs</h1>
        </div>
        <motion.div style={{
              scale:scaleimage,
              opacity:opacityimage,
            }} className='image-container'>
          <img src='catblog-removebg-preview.png' />
        </motion.div>

        <motion.div ref={ref} className='blog-container'>
                    <div className='r1'>
            <motion.div  style={{
              scale:scale,
              opacity:opacity,
            }} className='blog'>
              <div className='blog-image'>
              <img src="catblog1.jpeg"/>
              </div>
              <div className='blog-content'>
                <h3>Best foods for kittens</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem.</h4>
              </div>
            </motion.div>
          <motion.div style={{
            scale:scale1,
            opacity:opacity,
          }} className='blog'>

              <div className='blog-image'>
              <img src="cat222.jpeg"/>
              </div>
              <div className='blog-content'>
                <h3>Best foods for kittens</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem.</h4>
              </div>
            </motion.div>

          </div>
          
          <div className='r2'>
          <motion.div  style={{
            scale:scale1,
            opacity:opacity,
            }} className='blog'><div className='blog-image'>
              <img src="cat333.webp"/>
              </div>
              <div className='blog-content'>
                <h3>Best foods for kittens</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem.</h4>
              </div></motion.div>

          <motion.div  style={{
            scale:scale,
            opacity:opacity,
            }} className='blog'><div className='blog-image'>
              <img src="cat555.webp"/>
              </div>
              <div className='blog-content'>
                <h3>Best foods for kittens</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem.</h4>
              </div></motion.div>
          </div>
        </motion.div>
         {/* <Link to="/blogpage" className="view-all-button">
            View All
          </Link> */}
      </div>
    </div>
            </>
  )
}

export default Blog;