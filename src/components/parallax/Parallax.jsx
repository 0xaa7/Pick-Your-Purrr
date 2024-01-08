import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.65 1"],
   
  });

  
   const xL = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);
   const xR = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
   const xI = useTransform(scrollYProgress, [0, 1], ["-100%", "-60%"]);
const xI1 = useTransform(scrollYProgress, [0, 1], ["100%", "60%"]);



  return (
    <div className="parallax" ref={ref}>
      <motion.div className="textContainer" initial={{opacity:0, y:-200}} whileInView={{opacity:1, scale:1, y:0, delay:1}} transition={{duration:1}}>
        <h1>
          Our Story
        </h1>
        <p>
          Our Humble Beginnings!
Four years ago, I embarked on a journey that not only reshaped my life but also had a profound impact on numerous families in search of cherished furry companions. My journey into the Persian kitten world began with a deep-seated love for pets. However, it was disheartening to encounter breeders consistently manipulating both the quality and pricing of these feline companions. As I immersed myself deeper into this world, it became evident that a critical void existed, demanding the creation of a dependable bridge between aspiring pet parents and reputable breeders.
Driven by my passion for Persian kittens and the desire to make a positive impact, I assumed the role of this essential bridge 3 years ago. Today, I take great pride in being this bridge, having connected more than 400 families with their dream Persian kittens and at the same time ensuring the highest quality at the most reasonable prices. 
“My Mission - is to bring joy and fulfillment to those who yearn for the perfect feline companion. With my commitment to simplifying your search for the perfect pet, your journey to feline happiness begins right here."
        </p>
      </motion.div>
      <motion.div style={{ x:xL,transition: { duration: 1212, ease: "easeInOut" } }}  className="left"> </motion.div>
      <motion.div style={{ x:xR }} className="right"> </motion.div>
      <motion.div style={{x:xI}} className="image" > 
        <img src="./catjump1.png" />
      </motion.div>
      <motion.div style={{x:xI1}} className="image1" > 
        <img src="./catjump2.png" />
      </motion.div>
      {/* <motion.div style={{x:xI}} className="image2" > 
        <img src="./catjump1.png" />
      </motion.div><motion.div style={{x:xI}} className="image3" > 
        <img src="./catjump1.png" />
      </motion.div> */}
      <video src="TensorPix - TensorPix - istockphoto-473235311-640_adpp_is.mp4" autoPlay loop muted className="video"/>
    </div>
  );
};

export default Parallax;
