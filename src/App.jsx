import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.scss";
// import Blogs from "./components/Blogs/Blogs";
import GalleryScroll from "./components/Gallery/Galleryscroll/GalleryScroll";
// import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
// import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
// import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
import GalleryPage from "./components/Gallery/GalleryPage/GalleryPage";


const App = () => {
  return (

  
<BrowserRouter>
<div>
  <section id="galler-scroll">
    <GalleryScroll />
   
   
  </section>
  
      {/* <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>

        <section id="Gallery">
         
        </section>
      <section id="Blogs">
       <Blogs />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> */}
    {/* <section > */}
    <Routes>
      {/* <Route path="/gallery" element={<GalleryScroll />} /> */}
      <Route path="/gallerypage" element={<GalleryPage />} />   
      </Routes>
    {/* </section> */}
   
  </div>

</BrowserRouter>
        

  );
};

export default App;
