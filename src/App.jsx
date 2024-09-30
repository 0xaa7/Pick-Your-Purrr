import { Route, Routes, useLocation } from "react-router-dom";
import "./app.scss";
import GalleryScroll from "./components/Gallery/Galleryscroll/GalleryScroll";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import GalleryPage from "./components/Gallery/GalleryPage/GalleryPage";
import Blog from "./components/Blog/Blog";
import BlogPage from "./pages/BlogPage/BlogPage";

 import BlogContent from "./pages/BlogContent/BlogContent";
import { AnimatePresence } from "framer-motion";
import { Outlet } from 'react-router-dom';
import Steps from "./components/steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";
import Video from "./components/video/Video";
import  Faq  from "./components/FAQ/Faq";
import StoryPage from "./pages/StoryPage/page/StoryPage";
import Home from "./blogpages/home/Home";
// import Blog from "./components/Blog/Blog";

// import Blog from "./blogpages/blog/Blog";
// import AllBlogs from "./blogpages/allBlogs/AllBlogs";
// import NoPage from "./blogpages/nopage/NoPage";
// import BlogInfo from "./blogpages/blogInfo/BlogInfo";
// import AdminLogin from "./blogpages/admin/adminLogin/AdminLogin";
// import Dashboard from "./blogpages/admin/dashboard/Dashboard";
// import MyState from "./context/data/MyState"
// import CreateBlog from "./blogpages/admin/createBlog/CreateBlog";
import { Toaster } from "react-hot-toast";
import Test from "./components/Test/Test"






function AppLayout() {
  return (
    <>
    {/* <Cursor /> */}

      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Ourstory">     
        <StoryPage />
      </section>
      
      <section id="Gallery">
        <GalleryScroll />
      </section>

      <section id="Video">
        <Video />
      </section>

       <section id="Blog">
        <Blog />
      </section>  
      
       <Steps />
      <section id="Testimonials"> 
        <Testimonials /> 
      </section>

      <section id="FAQ">
        <Faq />
      </section>


      <section id="Contact us">
        <Contact /> 
      </section>  

      <section>
       <Test />
      </section>


      <main>
        <Outlet />  
      </main>
    </>
  );
}

export default function App() {
  const location = useLocation();


  return (
    <AnimatePresence mode="wait">
      {/* <MyState> */}
          


      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} /> */}
        <Route path="/blogpage" element={<BlogPage 
       
       />} />
       <Route path="/blog/:id" element={<BlogContent
        
       />} /> 
      </Routes>
      <Toaster />
    {/* </MyState> */}
    </AnimatePresence>
  );
}
