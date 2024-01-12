import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./testimonials.scss";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet tincidunt dui, id rhoncus felis. Duis lacinia fermentum lectus, at vestibulum nunc fermentum sit amet.",
    img:"https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Vestibulum vestibulum tellus nec vestibulum efficitur. Quisque auctor sapien id lacinia convallis. Proin congue elit vitae lacinia fermentum.",
    img:"https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Alex",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "sammy",
    description: "Integer nec orci vel mi ullamcorper mattis a ac purus. Phasellus in dolor eget purus finibus cursus. In hac habitasse platea dictumst.",
    img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Alon",
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
        <button onClick={handlePrev} disabled={currentIndex === 0}>PREV</button>
        <button onClick={handleNext} disabled={currentIndex === testimonialsData.length - 1}>NEXT</button>
      </div>
    </div>
  );
};

export default Testimonials;