import { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './test.scss';

const cards = [
  '/Images/cat1.jpeg',
  '/Images/cat2.jpeg',
  '/Images/cat3.jpeg',
  '/Images/cat4.jpeg',
  '/Images/cat5.jpeg',
  '/Images/cat6.jpeg',
  '/Images/cat7.jpeg',
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [index, setIndex] = useState(0); // Track the current index of the card

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  // Function to handle next card with fixed values
  const goNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
      animateCard(false, 1, -300, 0.2); // Animate card towards left with fixed values
  };

  // Function to handle previous card with fixed values
  const goPrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    animateCard(false, -1, 300, 0.2); // Animate card towards right with fixed values
  };

  // Animate card function
  const animateCard = (down,direction, mx, velocity) => {
    const currentIndex = index;
    const xDir = direction;

    // const trigger = true; // Trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1;

    gone.add(currentIndex);

     api.start((i) => {
      if (currentIndex !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(currentIndex);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flies out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1; // Active cards lift up a bit
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
      }, 0);
    }
  };

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction, and velocity
  const bind = useDrag(({ args: [currentIndex], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out

    const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
    if (!down && trigger) gone.add(currentIndex); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start((i) => {
      if (currentIndex !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(currentIndex);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flies out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1; // Active cards lift up a bit
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

  // Now we're just mapping the animated values to our view
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[(i + index) % cards.length]})`,
            }}
          />
        </animated.div>
      ))}
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
