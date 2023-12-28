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

        <div className='card-layout'>
        <div className="blog-card">
          {blogs && blogs.data.map((blog) => (
            <div key={blog.id} className="blog">
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
              <p>{blog.attributes.blogDesc}</p>
              </div >   
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


