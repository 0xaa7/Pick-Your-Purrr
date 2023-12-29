import { useParams } from 'react-router-dom';
import './blogcontent.scss';


const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blogs && blogs.data) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  } 

  return (
    <div className='blog-content'>
      <div className='image-container'>
          {blog.attributes.coverImage && (
          <img
          src={`http://localhost:1337${blog.attributes.coverImage.data[0].attributes.url}`}
          alt="Blog Cover"
          />
          )}
      </div>
      <div className='content-container'>
        <div className='blog-title'>
          <h1>{blog.attributes.blogTitle}</h1>
        </div>
        <div className='blog-text'>
          {blog.attributes.blogContent &&
            blog.attributes.blogContent.map((paragraph, index) => (
              <p key={index}>
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default  BlogContent;
