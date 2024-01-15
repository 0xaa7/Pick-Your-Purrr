import { useRef, useState } from "react";
import "./faq.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Faq = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.7 1"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const faqItems = [
    {
      question: "What does “Pick your Purrr” do?",
      answer: "As we immersed ourselves deeper into this world of pets, it became evident that a critical void existed, demanding the creation of a dependable bridge between aspiring pet parents and reputable breeders. Driven by our passion for Persian kittens and the desire to make a positive impact, we assumed the role of this essential bridge 6 years ago. Today, I take great pride in being this bridge, having connected more than 500 families with their dream Persian kittens and at the same time ensuring the highest quality at the most reasonable prices.",
    },
    {
      question: "How long will it take you to present us with the kitten of our choice?",
      answer: "We will work diligently to match you with the kitten that perfectly suits your preferences and desires, particularly if you're looking for a unique pattern. Please allow us 7-10 days as we work our magic to find your perfect companion.",
    },
    {
      question: "Can I see photos and videos of the kittens before making a decision?",
      answer: "Absolutely! Once we've taken note of your preferences for the type of kitten you desire, whether it's Persian, Himalayan, or Calicos, we'll provide you with a collection of photos and videos showcasing the available kittens. You can take your time reviewing these until you discover the one that captures your heart.",
    },
    {
      question: "How long will it take you to present us with the kitten of our choice?",
      answer: "We will work diligently to match you with the kitten that perfectly suits your preferences and desires, particularly if you're looking for a unique pattern. Please allow us 7-10 days as we work our magic to find your perfect companion.",
    },
    {
      question: "What is the price range for your Persian kittens",
      answer: "The price of our kittens will depend on your decision on the following factors:- Fur quality (Single, Double or Triple coat fur).- Uniqueness of the color pattern.- Whether the kitten is doll faced or punch faced.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wrapper1" ref={ref}>
      

      <motion.div style={{ scale: scale1 }} className="image-container1">
        <img src="cat54.png" alt="Cat" />
      </motion.div>
      
      <div className="circle-container">
        <motion.div className="c1" style={{ scale }}>
          <motion.div style={{ scale }} className="c2">
            <motion.div style={{ scale }} className="c3"></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="faq">
        <div className="header"><h1>FAQ</h1></div>
        {faqItems.map((item, index) => (
          <div  key={index}>

          <motion.div className="faq-item">
            <motion.div
              className="question"
              onClick={() => handleQuestionClick(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {item.question}
            </motion.div>
            <motion.div
              className="answer"
              initial={{ opacity: 0, height: 0, overflow: "hidden", zIndex: -1 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.4 }}
              >
              {item.answer}
            </motion.div>
          </motion.div>
              </div>
        ))}
      </div>
      
    </div>
  );
};

export default Faq;
