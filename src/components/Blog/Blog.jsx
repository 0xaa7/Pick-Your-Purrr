import { useRef } from 'react';
import "./blog.scss";
import { useScroll, motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const blogs = [
  {
    id: 1,
    img: "/Images/cat1.jpeg",
    blogTitle: "Best Cat Food",
    blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem."
  },
  {
    id: 2,
    img: "/Images/cat2.jpeg",
    blogTitle: "Best Cat Food",
    blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem."
  },
  {
    id: 3,
    img: "/Images/cat3.jpeg",
    blogTitle: "Best Cat Food",
    blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem."
  },
  {
    id: 4,
    img: "/Images/cat4.jpeg",
    blogTitle: "Best Cat Food",
    blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe, ipsam nihil dicta facilis qui quos excepturi illum commodi rem."
  },
];

const Blog = () => {
  const ref = useRef(null);

const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.33 1"]});

 const image = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
 const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);


  return (
    <>
    <div className='blog'  ref={ref} >
        <div className='wrapper' >
          <motion.div  style={{
                   scale,
                    opacity ,
                  }} className='main-header'>
            <h1>Our Blogs</h1>
          </motion.div>
          <motion.div
           style={{
            scale: image,
            opacity: imageOpacity,
          }}
           className='image-container'>
            <img src='catblog-removebg-preview.png' alt="blog-image" />
          </motion.div>
          <motion.div className='blog-container'>
            <div className='row'>
              {blogs.map(blog => (
                
                <BlogCard key={blog.id} blog={blog} />
                
              ))}
            </div>
          </motion.div> 
          <Link to="/blogpage" className="view-all-button">
            View All
          </Link>
        </div>
      </div>
    </>
  )
}

export default Blog;
