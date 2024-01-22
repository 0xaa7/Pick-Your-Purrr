import {  useRef } from "react";
import "./ourstory.scss";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-1000px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}


const OurStory = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

   const scale1 = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const lines = [
    [
      { char: "O", style: { y: useTransform(scrollYProgress, [0, 1], [1, 50]), x: useTransform(scrollYProgress, [0, 1], [0, -120]) } },
      { char: "U", style: { y: useTransform(scrollYProgress, [0, 1], [1,10]), x: useTransform(scrollYProgress, [0, 1], [0, -50]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 1], [1, -30]), x: useTransform(scrollYProgress, [0, 1], [0, 10]) } },
    ],
    [
      { char: "S", style: { y: useTransform(scrollYProgress, [0, 1], [1, 10]), x: useTransform(scrollYProgress, [0, 1], [0, -90]) } },
      { char: "T", style: { y: useTransform(scrollYProgress, [0, 1], [1, -30]), x: useTransform(scrollYProgress, [0, 1], [0, -40]) } },
      { char: "O", style: { y: useTransform(scrollYProgress, [0, 1], [1, -70]), x: useTransform(scrollYProgress, [0, 1], [0, 20]) } },
      { char: "R", style: { y: useTransform(scrollYProgress, [0, 1], [1, -110]), x: useTransform(scrollYProgress, [0, 1], [0, 80]) } },
      { char: "Y", style: { y: useTransform(scrollYProgress, [0, 1], [1, -150]), x: useTransform(scrollYProgress, [0, 1], [0, 130]) } },
    ],
  ];


  return (
    <div className="story" ref={ref}  >
      <div className="aside" >
        <div className="mobile">
          <h1>
            OUR STORY
          </h1>
        </div>
        <div className="text">
          {lines.map((line, i) => (
            <div key={i} className="text-holder">
              {line.map(({ char, style }, j) => (
                <motion.span key={j} style={{ y: style.y, x: style.x, scale:scale1}}>
                  <h1>{char}</h1>
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <motion.div className="text-container">
        <>
      <Section>
        <p>
          Our Humble Beginnings! Four years ago, I embarked on a journey that
          not only reshaped my life but also had a profound impact on numerous
          families in search of cherished furry companions. My journey into the
          Persian kitten world began with a deep-seated love for pets. However,
          it was disheartening to encounter breeders consistently manipulating
          both the quality and pricing of these feline companions. As I immersed
          myself deeper into this world, it became evident that a critical void
          existed, demanding the creation of a dependable bridge between
          aspiring pet parents and reputable breeders. Driven by my passion for
          Persian kittens and the desire to make a positive impact, I assumed
          the role of this essential bridge 3 years ago. Today, I take great
          pride in being this bridge, having connected more than 400 families
          with their dream Persian kittens and at the same time ensuring the
          highest quality at the most reasonable prices. My Mission - is to
          bring joy and fulfillment to those who yearn for the perfect feline
          companion. With my commitment to simplifying your search for the
          perfect pet, your journey to feline happiness begins right here
        </p>
      </Section>
    </>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
