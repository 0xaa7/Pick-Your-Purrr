import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.scss";
import Blogs from "./components/Blogs/Blogs";
import GalleryScroll from "./components/Gallery/Galleryscroll/GalleryScroll";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import GalleryPage from "./components/Gallery/GalleryPage/GalleryPage";

export default function App () {

  return (
    <BrowserRouter>
      <Cursor />


      <Routes>

        <Route path="/" element={
          <> 
          <section>
          <Navbar />
          <Hero />
          </section>
            <section>
            <Parallax />

            </section>

              <section id="galler-scroll">

            <GalleryScroll />
              </section>
          <section>
            
            <Blogs />
          </section>
          <section>
            
            <Portfolio />
          </section>
          <section>
            
            <Contact /> 
          </section>
          </>
        } />

        <Route path="/gallerypage" element={
          <GalleryPage />
        } />

      </Routes>

    </BrowserRouter>
  );
}


