import { Route, Routes, useLocation } from "react-router-dom";
import "./app.scss";
import GalleryScroll from "./components/Gallery/Galleryscroll/GalleryScroll";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import GalleryPage from "./components/Gallery/GalleryPage/GalleryPage";
import Blog from "./components/Blog/Blog";
import BlogPage from "./pages/BlogPage/BlogPage";
import useFetch from "./hooks/useFetch";
import BlogContent from "./pages/BlogContent/BlogContent";

import { AnimatePresence } from "framer-motion";
import { Outlet } from 'react-router-dom';
import Steps from "./components/steps/Steps";

import Testimonials from "./components/Testimonials/Testimonials";


function AppLayout() {
  return (
    <>
    <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
    
      <section id="Our-Story">
        <Parallax />
      </section>
      <section id="Gallery">
        <GalleryScroll />
      </section>

      
      <section id="blog">
        <Blog />
      </section> 
      
      
        <Steps />
      
    
    
      <section>
        <Testimonials />
      </section>

      <section id="contact">
        <Contact /> 
      </section>

      <main>
        <Outlet />  
      </main>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const apiUrl = "https://backend-wpof.onrender.com/api/blogs?populate=*";
  const { loading, error, data } = useFetch(apiUrl);
  console.log(data)
 
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/blogpage" element={<BlogPage 
        blogs={data ? data : ""}
         />} />
        <Route path="/blog/:id" element={<BlogContent
         blogs={data ? data : ""}
          />} />
      </Routes>
    </AnimatePresence>
  );
}
