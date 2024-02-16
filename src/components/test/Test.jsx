import { useState } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import './test.scss';

const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

const randomColor = (current) => {
  let index;
  do {
    index = Math.floor(Math.random() * colors.length);
  } while (current === colors[index]);

  return colors[index];
};

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
    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }} 
    whileTap={{ scale: 0.85 }}
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

   const scale = useTransform(dragStart.axis === 'x' ? x : y, [-170, 0, 175], [1, 0.9, 1]);
   const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 25, 0]);
  const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 0.2, 0]);
   const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });

 const animateCardSwipe = (animation) => {
  setDragStart({ ...dragStart, animation });

  setTimeout(() => {
    setDragStart({ axis: null, animation: { x: 0, y: 0 } });
    x.set(0);
    y.set(0);
    setCards((cards) => {
      const newCards = [...cards];
      const lastCard = newCards.pop();
      newCards.unshift(lastCard);
      return newCards;
    });
  }, 200); // Adjust this value to match the duration of the animation
};


  const onDragEnd = (info) => {
    if (dragStart.axis === 'x') {
      if (info.offset.x >= 100) animateCardSwipe({ x: 2000, y: 200 });
      else if (info.offset.x <= -100) animateCardSwipe({ x: -2000, y: 100 });
    } else {
      if (info.offset.y >= 100) animateCardSwipe({ x: 200, y: -2000 });
      else if (info.offset.y <= -100) animateCardSwipe({ x: 300, y: -1000 });
    }
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card
            card={card}
            key={index}
            index={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={{
              x: dragStart.animation.x,
              y: dragStart.animation.y,
              transition: {
                duration:3,
                ease: [0.36, 1, 0.3, 1]
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
              zIndex: index,
               scale,
               boxShadow,
              transition: {
                duration: 3,
                ease: [0.36, 1, 0.3, 1],
              },
            }}
          />
        );
    });
  };

  return <div className="infinite-cards">{renderCards()}</div>;
};

export default InfiniteCards;
