import "./blogpage.scss"
import BlogCard from "../../components/Blog/BlogCard"

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <div className="wrapper">
        <span >

    <h1>Learn more about your furred ones</h1>
        </span>
      <div className="card-layout">

    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
      </div>
      </div>
      
    </div>
  )
}

export default BlogPage