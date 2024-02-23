import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './test.scss';

const cards = [
  { image: '/Images/cat1.jpeg', text: 'Card 1 Text' },
  { image: '/Images/cat2.jpeg', text: 'Card 2 Text' },
  { image: '/Images/cat3.jpeg', text: 'Card 3 Text' },
  { image: '/Images/cat4.jpeg', text: 'Card 4 Text' },
  { image: '/Images/cat5.jpeg', text: 'Card 5 Text' },
  { image: '/Images/cat6.jpeg', text: 'Card 6 Text' },
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());
  const [index, setIndex] = useState(0);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [currentCard, setCurrentCard] = useState(cards[index]);

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const goNext = () => {
    if (!animationInProgress) {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
      const nextCard = cards[(index + 1) % cards.length];
      setCurrentCard(nextCard);
      animateCard(false, 1, -300, 0.2, nextCard);
    }
  };

  const goPrevious = () => {
    if (!animationInProgress) {
      setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      const previousCard = cards[(index - 1 + cards.length) % cards.length];
      setCurrentCard(previousCard);
      animateCard(false, -1, 300, 0.2, previousCard);
    }
  };

  const animateCard = (down, direction, mx, velocity, currentCard) => {
    const currentIndex = index;
    const xDir = direction;
    const dir = xDir < 0 ? -1 : 1;

    gone.add(currentIndex);
    setAnimationInProgress(true);

    api.start((i) => {
      if (currentIndex !== i) return;
      const isGone = gone.has(currentIndex);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        setIndex(0);
        setCurrentCard(cards[0]);
        api.start((i) => to(i));
        setAnimationInProgress(false);
      }, 600);
    } else {
      setAnimationInProgress(false);
    }
  };

  const bind = useDrag(({ args: [currentIndex], down, movement: [mx], direction: [xDir], velocity }) => {
  const trigger = velocity > 0.2;
  const dir = xDir < 0 ? -1 : 1;

  if (!down && trigger) gone.add(currentIndex);

  api.start((i) => {
    if (currentIndex !== i) return;
    const isGone = gone.has(currentIndex);
    const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
    const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
    const scale = down ? 1.1 : 1;

    if (!down) {
      // Update the current card text when the drag is complete
      setCurrentCard(cards[(i + index) % cards.length]);
    }

    return {
      x,
      rot,
      scale,
      delay: undefined,
      config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
    };
  });

  if (!down && gone.size === cards.length) {
    setTimeout(() => {
      gone.clear();
      api.start((i) => to(i));
    }, 600);
  }
});


  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[(i + index) % cards.length].image})`,
            }}
          />
        </animated.div>
      ))}
      <div className='cards22'>
        <div className="card-text">
          {currentCard.text}
        </div>
      </div>
      <div className='buttons'> 
        <button onClick={goPrevious}>Previous</button>
        <button onClick={goNext}>Next</button>
      </div>
    </>
  );
}

export default function Test() {
  return (
    <div className="container">
      <Deck />
    </div>
  );
}
