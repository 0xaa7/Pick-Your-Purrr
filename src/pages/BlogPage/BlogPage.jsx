import { Link } from 'react-router-dom';
import './blogpage.scss'

const BlogPage = ({ blogs }) => {
  return (
    <div className="blog-page">
      <div className="wrapper">
        <div className="header">
          <div className="image-container">
            <img src="kitty2.png" alt="Header Image" />
          </div>
          <div className="text-container">
            <h1>Learn more about your cats</h1>
          </div>
        </div>

       
        <div className="blog-card">
          {blogs && blogs.data.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <div  className="blog">
              <div className='blog-image'>
                {blog.attributes.coverImage && (
                  <img
                  src={`http://localhost:1337${blog.attributes.coverImage.data[0].attributes.url}`}
                  alt="Blog Cover"
                  />
                  )}
              </div>
              <div className='blog-content' >
                <h3>{blog.attributes.blogTitle}</h3>
              </div >   
            </div>
          </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default BlogPage;


