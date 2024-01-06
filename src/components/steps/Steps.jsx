import { useRef } from "react";
import "./steps.scss"
import { useScroll, useTransform, motion } from "framer-motion";

const Steps = () => {
const ref = useRef(null);
 const { scrollYProgress } = useScroll({
    target: ref,
    offset:["0 1", "0.6 1"],
  });

 const scale = useTransform(scrollYProgress,[0, 1], [0.89, 1]);
 const opacity = useTransform(scrollYProgress,[0, 1], [1, 1]);
 const scale1 = useTransform(scrollYProgress,[0, 1], [0.95, 1]);
 const opacity1 = useTransform(scrollYProgress,[0, 1], [1, 1]);

  return (
    <div className="container" >
      <div  className="text-container" ref={ref} > 
        <motion.div style={{
            scale:scale,
            opacity:opacity,
          }}  className="text-card">
          <motion.h1  >Step 1 - When your Cat senses tingle; GIVE US A RING!</motion.h1>
          <motion.h1>Step 2 - Let's spill the beans! What's your dream cat scenario? Make it fabulous!</motion.h1>
          <motion.h1>
            Step 3 - Brace yourself for the purr-ade of potential partners-in-crime! We're sending feline resumes your way until you Pick-your-Purrr!!
          </motion.h1>
          <motion.h1>
            Step 4 - Come-on over and snatch your feline Soulmate for the next decade - it's like Tinder, but for aspiring cat parents!
          </motion.h1>
        </motion.div>
      </div>
      <motion.div style={{
            scale:scale1,
            opacity:opacity1,
          }}  className="card-container">

      <div className="card">
        <p>
          Trust US!
400+ families purr-fectly happy! Not a squeak of complaint in sight. Our phones? just rings with requests for 'Kitten #2!'
        </p>
      </div>
      <div className="card">
        <p>
          Your Feline Dream, Your Choice!
"Customer is KING" at “Pick your Purrr”! Choose your purr-fect companion; take your time; it's your catwalk!
        </p>
      </div>
      <div className="card">
        <p>
          Support That Meows!
From day one 'til forever, our support's purr-manent! Queries or concerns – just whatsapp or call us; we've got your back, always!
        </p>
      </div>
      <div className="card1">
        <p>
          Graduates of Purrfection!
Our kittens aren't just cute – they're Pros! Triple-checked for litter training, ability to eat different types of food, and no tummy dramas before they meet you!
        </p>
      </div>
      
      </motion.div>
    </div>
  )
}

export default Steps