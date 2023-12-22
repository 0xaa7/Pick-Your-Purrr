import "./blogs.scss"
import BlogItem from './BlogItem/BlogItem'; // Create BlogItem component in a separate file

const blogsData = [
  {
    id: 1,
    title: 'Blog Title 1',
    thumbnail: 'https://placekitten.com/100/100', // Replace with your image URL
    content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis.',
  },
  {
    id: 2,
    title: 'Blog Title 2',
    thumbnail: 'https://placekitten.com/100/101',
    content: 'Lorem ipsum  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis. sit amet, consectetur adipiscing elit. ...',
  },
  {
    id: 3,
    title: 'Blog Title 2',
    thumbnail: 'https://placekitten.com/100/101',
    content: 'Lorem ipsum  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis. sit amet, consectetur adipiscing elit. ...',
  },{
    id: 4,
    title: 'Blog Title 2',
    thumbnail: 'https://placekitten.com/100/101',
    content: 'Lorem ipsum  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis. sit amet, consectetur adipiscing elit. ...',
  },{
    id: 5,
    title: 'Blog Title 2',
    thumbnail: 'https://placekitten.com/100/101',
    content: 'Lorem ipsum  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis. sit amet, consectetur adipiscing elit. ...',
  },
  {
    id: 5,
    title: 'Blog Title 2',
    thumbnail: 'https://placekitten.com/100/101',
    content: 'Lorem ipsum  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque eveniet perspiciatis iste? Culpa tempore, fugit, cum sint repellendus incidunt necessitatibus voluptatibus nihil, id nulla commodi tenetur omnis autem recusandae. Ipsum officiis eos culpa. Natus quis, sequi quaerat, magnam sunt non quos consectetur, quo temporibus quam a ipsam dignissimos illo illum harum unde voluptatum aperiam at dolorem perspiciatis! At animi, maxime cupiditate omnis, vero quasi ratione facere architecto praesentium explicabo, dolorum cum id sunt incidunt nobis qui velit aliquam quod! Consequuntur vero mollitia libero eveniet natus in laborum, nostrum iure laboriosam tempore corrupti, nam non omnis! Reiciendis fuga vero blanditiis. sit amet, consectetur adipiscing elit. ...',
  },
  
  
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      {blogsData.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
