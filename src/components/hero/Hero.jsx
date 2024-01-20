import { useRef } from "react"
import "./hero.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    }
  },
  scrollAnimation:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}


const imageVariants = {
  initial:{
    x:500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
      staggerChildren: 0.2,
    }
  }
}


const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-100%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },
}

const Hero = () => {
   const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  

 const lines = [
    [
      { char: "P", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 200]), x: useTransform(scrollYProgress, [0, 1], [0, -20]) } },
      { char: "I", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 260]), x: useTransform(scrollYProgress, [0, 1], [0, -70]) } },
      { char: "C", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 320]), x: useTransform(scrollYProgress, [0, 1], [0, -110]) } },
      { char: "K", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 380]), x: useTransform(scrollYProgress, [0, 1], [0, -180]) } },
    ],
      [
      { char: "Y", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 100]), x: useTransform(scrollYProgress, [0, 1], [0, 90]) } },
      { char: "O", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 160]), x: useTransform(scrollYProgress, [0, 1], [0, 20]) } },
      { char: "U", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 220]), x: useTransform(scrollYProgress, [0, 1], [0, -50]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 280]), x: useTransform(scrollYProgress, [0, 1], [0, -110]) } },
    ],
      [
      { char: "P", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 0]), x: useTransform(scrollYProgress, [0, 1], [0, 180]) } },
      { char: "U", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 60]), x: useTransform(scrollYProgress, [0, 1], [0, 120]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 120]), x: useTransform(scrollYProgress, [0, 1], [0, 60]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.5], [1, 180]), x: useTransform(scrollYProgress, [0, 1], [0, 0]) } },
    ],

  ];
  return (
    <div className="hero" ref={ref}>
     
         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
 <div className="text"  >
      {lines.map((line, i) => (
        <div key={i} className="text-line"  >
          <div className="text-holder"   >
            {line.map(({ char, style }, j) => (
              <motion.span key={j} style={{ y: style.y, x: style.x, scale: scale1}}>
                <h1>{char}</h1>
              </motion.span>
            ))}
          </div>
        </div>
      ))}
     
    </div>
  
            <div className="row">

            <motion.p variants={textVariants}>
              Welcome to my world, where the love for pets meet the art of matchmaking
            </motion.p>

      <motion.div className="social" variants={textVariants} initial="initial" animate="animate"  >
          <motion.a href='facebook.com' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/facebook.png' alt='' /></motion.a>
            <motion.a href='#' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/insta.png' alt='' /></motion.a>
            <motion.a href='#' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/youtube.png' alt='' /></motion.a>
        </motion.div>

         {/* <motion.div className="scrollContainer" variants={textVariants} initial="initial" animate="animate" >
        <motion.img src="scroll.png" alt="" variants={textVariants} animate="scrollAnimation"/>
      </motion.div>  */}
          </div>

      </motion.div>

    

      
         <motion.div className="sliderText" variants={sliderVariants} initial="initial" animate="animate" >meow!! meow!! purrr.. purrr...</motion.div> 
    

       <div className="imageContainer"  >
        <motion.img fetchpriority="high" src="kitty2.png" variants={imageVariants} initial="initial" animate="animate" />
      </div>
    </div>
  )
}

export default Hero