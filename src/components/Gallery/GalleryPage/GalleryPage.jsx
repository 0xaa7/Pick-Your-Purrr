import React, { useState, useEffect } from 'react';
import './GalleryPage.scss'; // Create a CSS file for styling (e.g., GalleryPage.css)

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${imagesPerPage}`);
        const imageData = await response.json();
        const imageUrls = imageData.map(image => image.download_url);
        setImages(prevImages => [...prevImages, ...imageUrls]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [currentPage]);

  const loadMoreImages = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className='gallery-page'>
      <div className='image-grid'>
        {images.map((imageUrl, index) => (
          <div key={index} className={`image-container grid-size-${(index % 3) + 1}`}>
            {/* Vary the grid size based on the remainder of the index */}
            <img loading="lazy" src={imageUrl} alt={`Image ${index}`} className='image' />
          </div>
        ))}
      </div>
      <button onClick={loadMoreImages}>Load More</button>
    </div>
  );
};

export default GalleryPage;
