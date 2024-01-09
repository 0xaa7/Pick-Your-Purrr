import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./testimonials.scss";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet tincidunt dui, id rhoncus felis. Duis lacinia fermentum lectus, at vestibulum nunc fermentum sit amet.",
    img:"cat333.webp"
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Vestibulum vestibulum tellus nec vestibulum efficitur. Quisque auctor sapien id lacinia convallis. Proin congue elit vitae lacinia fermentum.",
    img:"cat333.webp"
  },
  {
    id: 3,
    name: "Alex",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
  {
    id: 4,
    name: "Ason",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
  {
    id: 5,
    name: "Alon",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
  {
    id: 6,
    name: "John",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
  {
    id: 7,
    name: "Sam",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
  {
    id: 8,
    name: "Tom",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"cat333.webp"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleNext = async () => {
    await controls.start({ opacity: 0, x: "10%" });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    await controls.start({ opacity: 1, x: 0 });
  };

  const handlePrev = async () => {
    await controls.start({ opacity: 0, x: "-10%" });
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    await controls.start({ opacity: 1, x: 0 });
  };

  return (
    <div className="testimonials">
      <div className="ocean">
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
</div>
   <div className="ocean1">
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
</div>
     <h1>Testimonials</h1>
      {testimonialsData.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="testimonials-card"
          animate={controls}
          style={{ display: index === currentIndex ? 'block' : 'none', x: "0%", opacity: 1 }}
        >
         
          <div className="card-content">
            <div className="image-container">
              <img src={testimonial.img} />
            </div>
            <div className="text-container">
              <h1>{testimonial.name}</h1>
              <p>{testimonial.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === testimonialsData.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;