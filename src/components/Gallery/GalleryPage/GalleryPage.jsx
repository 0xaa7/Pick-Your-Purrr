import  { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { debounce } from 'lodash';
import './GalleryPage.scss';
import Transition from '../../../Transition';


const GalleryPage = () => {
  const [catImages, setCatImages] = useState([]);
  const [page, setPage] = useState(1);
  const [headerText, setHeaderText] = useState("It's a tough job choosing between fluffballs! Who'll be your purr-fect match?");
  
  const scrollLevels = [
    { position: 0, text: "Did you find your furred one yet?" },
    { position: 100, text: "hmmmm.. seems you need more cats to look at" },
    { position: 140, text: "well, you can always reach us for more assisstance to find the furred baby" },
  ];

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random',
          {
            params: {
              query: 'cat',
              count: 10,
              page: page,
              client_id: 'ipTICpxdxfqMYHcvUIcfA4JLb_3_yAp9q5wVHctXRF4',
            },
          }
        );

        if (response.data.length > 0) {
          setCatImages((prevImages) => [...prevImages, ...response.data]);
        }
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    const handleScroll = debounce(() => {
      
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const newText = scrollLevels.find(level => scrollPosition > level.position)?.text || headerText;
      setHeaderText(newText);

     
      if (
        window.innerHeight + scrollPosition ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 500);

    window.addEventListener('scroll', handleScroll);

    fetchCatImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]); 

  return (
<Transition>

    <div className='cat-gallery'>
      <div className='header'>
        <h1>Gallery</h1>
      </div>
      <div className='top-heading'>
        <h2>{headerText}</h2>
      </div>

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {catImages.map((cat) => (
          <div key={cat.id} className="cat-card" onClick={() => (cat)}>
            <img src={cat.urls.small} alt={`Cat ${cat.id}`} />
          </div>
        ))}
      </Masonry>
    </div>
        </Transition>
  );
};

export default GalleryPage;