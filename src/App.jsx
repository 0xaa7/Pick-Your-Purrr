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







function AppLayout() {
  return (
    <>
    <Cursor />

      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Our-Story">     
        <StoryPage />
      </section>
      
      <section id="Gallery">
        <GalleryScroll />
      </section>

      <section id="video">
        <Video />
      </section>

      <section id="Blog">
        <Blog />
      </section> 
      
        <Steps />
      <section id="testimonials"> 
        <Testimonials />
      </section>

      <section id="faq">
        <Faq />
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


  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/blogpage" element={<BlogPage 
       
         />} />
        <Route path="/blog/:id" element={<BlogContent
       
          />} />
      </Routes>
    </AnimatePresence>
  );
}
