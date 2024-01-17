import { useRef } from "react";
import "./text.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const Text = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
 const lines = [
    [
      { char: "P", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 100]), x: useTransform(scrollYProgress, [0, 1], [0, -20]), scale: useTransform(scrollYProgress, [0, 1], [1, 2])}},
      { char: "I", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 200]), x: useTransform(scrollYProgress, [0, 1], [0, -70]) } },
      { char: "C", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 300]), x: useTransform(scrollYProgress, [0, 1], [0, -100]) } },
      { char: "K", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 400]), x: useTransform(scrollYProgress, [0, 1], [0, -150]) } },
    ],
      [
      { char: "Y", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 0]), x: useTransform(scrollYProgress, [0, 1], [0, 100]) } },
      { char: "O", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 100]), x: useTransform(scrollYProgress, [0, 1], [0, 40]) } },
      { char: "U", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 200]), x: useTransform(scrollYProgress, [0, 1], [0, -20]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 300]), x: useTransform(scrollYProgress, [0, 1], [0, -60]) } },
    ],
      [
      { char: "P", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, -100]), x: useTransform(scrollYProgress, [0, 1], [0, 200]) } },
      { char: "U", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 0]), x: useTransform(scrollYProgress, [0, 1], [0, 150]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 100]), x: useTransform(scrollYProgress, [0, 1], [0, 100]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 0.8], [1, 200]), x: useTransform(scrollYProgress, [0, 1], [0, 50]) } },
    ],

  ];

  return (
    <div className="text"  >
      <div className="text1" >

      {lines.map((line, i) => (
        <div key={i} className="text-line" ref={ref}  >
          <div className="text-holder"   >
            {line.map(({ char, style }, j) => (
              <motion.span key={j} style={style}>
                <h1>{char}</h1>
              </motion.span>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Text;
