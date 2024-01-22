import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0, x: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeIn",
      },
    },
    hidden: {
      opacity: 0,
      x: 10, 
      transition: {
        type: "easeIn",
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
