// BlogItem.js
import React, { useState } from 'react';
import "./blogItem.scss"

const BlogItem = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`blog-item ${expanded ? 'expanded' : ''}`}>
      <div className="thumbnail-container">
        <img src={blog.thumbnail} alt={blog.title} />
      </div>
      <div className="content-container">
        <h3>{blog.title}</h3>
        <p>{expanded ? blog.content : blog.content.substring(0, 100) + '...'}</p>
        <button onClick={toggleExpand}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
