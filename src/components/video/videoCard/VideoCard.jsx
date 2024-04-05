import {  useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const VideoCard = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.76 1"] });

  const scale1 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

 
  return (
    <motion.div key={data.id} style={{ scale: scale1, opacity: opacity1 }} className="video-card">
      <div className="card" >
        <video src={data.video} controls ref={ref} />
      </div>
      <div className="content">
        <h1>{data.name}</h1>
        <p>{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
