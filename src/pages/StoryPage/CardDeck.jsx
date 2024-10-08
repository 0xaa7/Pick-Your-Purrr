import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";



gsap.registerPlugin(Draggable);

const CardDeck = ({ cards, leftPressed, rightPressed }) => {
  const [deck, setDeck] = useState(cards);
  const cardRefs = useRef([]);
  const lastActionRef = useRef(null);

  const animateToBackOfDeck = (target, card, index) => {
    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 0.9,
      zIndex: 0,
      rotation: (cardRefs.current.length - 1) * 5,
      duration: 0.35,
      onComplete: function () {
        gsap.set(card, { scale: 1 });
        const newDeck = [...deck];
        const newDeckRef = [...cardRefs.current];
        const [removed] = newDeck.splice(index, 1);
        const [removedRef] = newDeckRef.splice(index, 1);
        newDeck.push(removed);
        newDeckRef.push(removedRef);
        cardRefs.current = newDeckRef;
        setDeck(newDeck);
      }
    });
  };

  const animateToFrontOfDeck = (target, card, index) => {
    gsap.set(target, { zIndex: cardRefs.current.length + 1 });

    gsap.fromTo(
      target,
      { x: -250, y: 0 },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        onComplete: function () {
          gsap.set(card, { scale: 1 });
          const newDeck = [...deck];
          const newDeckRef = [...cardRefs.current];
          const [removed] = newDeck.splice(index, 1);
          const [removedRef] = newDeckRef.splice(index, 1);
          newDeck.unshift(removed);
          newDeckRef.unshift(removedRef);
          cardRefs.current = newDeckRef;
          setDeck(newDeck);
        }
      }
    );
  };

  // Button handlers

  useEffect(() => {
    if (leftPressed !== null) {
      lastActionRef.current = "right";
      gsap.set(cardRefs.current[cardRefs.current.length - 1], { scale: 0.9 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        x: -250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToFrontOfDeck(
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current[cardRefs.current.length - 1],
            cardRefs.current.length - 1
          );
        }
      });
    }
  }, [leftPressed]);

  useEffect(() => {
    if (rightPressed !== null) {
      lastActionRef.current = "left";
      gsap.to(cardRefs.current[0], {
        x: 250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToBackOfDeck(cardRefs.current[0], cardRefs.current[0], 0);
        }
      });
    }
  }, [rightPressed]);

  // drag handler
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.set(card, { zIndex: deck.length - index });
      let prevPosition = `${(index + 1) * 5}`;
      if (lastActionRef.current === "right") {
        gsap.to(
          card,

          { rotation: `${index * 5}deg`, duration: 0.25 }
        );
      } else {
        gsap.fromTo(
          card,
          { rotation: prevPosition },
          { rotation: `${index * 5}deg`, duration: 0.25 }
        );
      }

      Draggable.create(card, {
        type: "x,y",
        bounds: { minX: -200, maxX: 200, maxY: 200, minY: -200 },
        edgeResistance: 0.75,
        onDragEnd: function () {
          lastActionRef.current = "left";
          if (Math.abs(this.x) >= 50 || Math.abs(this.y) >= 50) {
            gsap.set(this.target, { zIndex: 0 });
            animateToBackOfDeck(this.target, card, index);
          } else {
            gsap.to(this.target, { x: 0, y: 0 });
          }
        }
      });
    });
  }, [deck]);

  return (
    <div className="card_container">
      {deck.map((card, index) => (
        <div
          className="cards"
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ position: "absolute" }}
        >
         <h3>{card.question}</h3>
               
        </div>   
      ))}

       {deck.map((card, index) => (
        <div 
          className="cardsAnswers"
          key={index}         
          style={{ position: "absolute" }}
        >
        
         <p>{card.answer}</p>          
        </div>   
      ))}
    </div>
  );
};

export default CardDeck;



