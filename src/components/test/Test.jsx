import { useState } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import './test.scss';

const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

const Card = ({ card, style, onDirectionLock, onDragEnd, animate }) => (
  <motion.div
    className="card"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: card.background }}
    transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    whileTap={{ scale: 0.90 }}
  >
    <p>{card.text}</p>
  </motion.div>
);

const InfiniteCards = () => {
  const [cards, setCards] = useState([
    { text: 'Up or down', background: colors[0] },
    { text: 'Left or right', background: colors[1] },
    { text: 'Swipe me!', background: colors[2] },
  ]);

  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });

  const x = useMotionValue(-10);
  const y = useMotionValue(-10);

  const scale = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [1, 0.8, 1]);
  const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 25, 0]);
  const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 0.2, 0]);
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });

  const animateCardSwipe = async (animation) => {
    setDragStart({ ...dragStart, animation });

    await new Promise((resolve) => setTimeout(resolve, 300));

    setDragStart({ axis: null, animation: { x: 0, y: 0 } });
    x.set(0);
    y.set(0);

    setCards((prevCards) => {
      const newCards = [...prevCards];
      const lastCard = newCards.pop();
      newCards.unshift(lastCard);
      return newCards;
    });

  
  };

  const nextAnimations = [{ x: 2000, y: 400 }];

  const previousAnimations = [{ x: -2000, y: 400 }];

  const onDragEnd = (info) => {
    if (dragStart.axis === 'x') {
      if (info.offset.x >= 100) animateCardSwipe(nextAnimations[0]);
      else if (info.offset.x <= -100) animateCardSwipe(previousAnimations[0]);
    } else {
      if (info.offset.y >= 100) animateCardSwipe(nextAnimations[0]);
      else if (info.offset.y <= -100) animateCardSwipe(previousAnimations[0]);
    }
  };

  const handleNext = () => {
    animateCardSwipe(nextAnimations[0]);
   
  };

  const handlePrevious = () => {
    animateCardSwipe(previousAnimations[0]);
    
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={{
              x: dragStart.animation.x,
              y: dragStart.animation.y,
              transition: {
                duration: 1,
              
              },
            }}
          />
        );
      } else
        return (
          <Card
            card={card}
            key={index}
            style={{
              scale,
              boxShadow,
              zIndex: index,
              transition: {
                duration: 1,
              },
            }}
          />
        );
    });
  };

  return (
    <div className="infinite-cards">
      {renderCards()}
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default InfiniteCards;
