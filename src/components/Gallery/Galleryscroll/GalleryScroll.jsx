

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from '@studio-freight/lenis';
import "./galleryscroll.scss";

const images = [
  "cat1.jpeg",
  "cat2.jpeg",
  "cat3.jpeg",
  "cat4.jpeg",
  "cat5.jpeg",
  "cat6.jpeg",
  "cat7.jpeg",
  "cat8.jpeg",
  "cat9.jpeg",
  "cat10.jpeg",
  "cat11.jpeg",
  "cat12.jpeg",
  "cat13.jpeg",
  "cat14.jpeg",
  "cat15.jpeg",
  "cat16.jpeg",
  "cat20.jpeg",
  "cat22.jpeg",
  
]

const GalleryScroll = React.memo(() => {
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 2], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -230]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="gallery-scroll">
      <div className="top-space"></div>
      <div ref={container} className="gallery">
        <Column images={[images[0], images[1], images[2], images[3], images[6]]} y={y} />
        <Column images={[images[4], images[5], images[6], images[7], images[12]]} y={y2} />
        <Column images={[images[6], images[7], images[8], images[2], images[13]]} y={y3} />
        <Column className="col" images={[images[9], images[10], images[14], images[15], images[17],]} y={y4} />
        <span>
          <Link to="/gallerypage">
            <button>Gallery</button>
          </Link>
        </span>
      </div>
      <div className="bottom-space"></div>
    </div>
  );
});

GalleryScroll.displayName = "GalleryScroll";

const Column = React.memo(({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map((src, index) => {
        return (
          <div key={index} className="imageContainer">
            <img src={`/Images/${src}`} alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
});

Column.displayName = "Column";

export default GalleryScroll;