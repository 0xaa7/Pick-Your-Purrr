import './storypage.scss';
import CardDeck from "../CardDeck";
import { Rig } from "../Rig";
import { useState } from "react";

export default function StoryPage() {
  const [leftPressed, setLeftPressed] = useState(null);
  const [rightPressed, setRightPressed] = useState(null);
  const cardOptions = [
    "When was \"Pick your Purrr\" created?",
    "Why was \"Pick your Purrr\" created?",
    "What milestones has \"Pick your Purrr\" achieved?",
    "Does “Pick your Purrr” sell Persian kittens only?",
    "Why should you choose \"Pick your Purrr\"?",
    "How do we ensure quality and affordability?",
     "What's our mission/future aspration?"
  ];

  const onLeftPressed = () => {
    setLeftPressed((prev) => !prev);
  };

  const onRightPressed = () => { 
    setRightPressed((prev) => !prev);
  };

  return (
    <div className="storypage">
      <h1>
        Our Story
      </h1>
      <CardDeck
        leftPressed={leftPressed}
        rightPressed={rightPressed}
        cards={cardOptions}
      />
      <Rig onClickLeft={onLeftPressed} onClickRight={onRightPressed} />
    </div>
  );
}
