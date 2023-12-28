import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import GalleryScroll from "./components/Gallery/Galleryscroll/GalleryScroll";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
import GalleryPage from "./components/Gallery/GalleryPage/GalleryPage";
import Blog from "./components/Blog/Blog";
import BlogPage from "./pages/BlogPage/BlogPage";
import useFetch from "./hooks/useFetch";


export default function App () {
  const apiUrl = "http://localhost:1337/api/blogs?populate=*";
  const { loading, error, data } = useFetch(apiUrl);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

 

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
          
          <section id="blog" >
          <Blog />
          </section>
        
          <section>
            {/* <Portfolio /> */}
          </section>

          <section>
            
          </section>
          <section>
            
            <Contact /> 
          </section>
          </>
        } />
        

        <Route path="/gallerypage" element={<GalleryPage />  } />
        <Route path="/blogpage" element={<BlogPage blogs={data?data:""} />  } />
        

      </Routes>


    </BrowserRouter>
  );
}


