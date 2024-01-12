import { motion } from "framer-motion";

const Links = ({ onClose }) => {
  const items = ["Home", "Our Story", "Gallery", "FAQ", "Contact Us"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <motion.div className="links" variants={variants}>
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Pick your Purr!
      </motion.h1>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLinkClick} // Add onClick handler
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
