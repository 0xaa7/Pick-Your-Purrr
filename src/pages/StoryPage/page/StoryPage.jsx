import './storypage.scss';
import CardDeck from "../CardDeck";
import { Rig } from "../Rig";
import { useState } from "react";

export default function StoryPage() {
  const [leftPressed, setLeftPressed] = useState(null);
  const [rightPressed, setRightPressed] = useState(null);
const cardData = [
  {
    question: "When was 'Pick your Purrr' created?",
    answer: "Pick your Purrr was created in 2015."
  },
  {
    question: "Why was 'Pick your Purrr' created?",
    answer: "Pick your Purrr was created to provide a platform for adopting pets."
  },
  {
    question: "What milestones has 'Pick your Purrr' achieved?",
    answer: "Pick your Purrr has achieved over 10,000 successful adoptions."
  },
  {
    question: "Does 'Pick your Purrr' sell Persian kittens only?",
    answer: "No, 'Pick your Purrr' offers various breeds of cats for adoption."
  },
  {
    question: "Why should you choose 'Pick your Purrr'?",
    answer: "Pick your Purrr ensures the well-being of its animals and provides excellent customer service."
  },
  {
    question: "How do we ensure quality and affordability?",
    answer: "We have a thorough vetting process for our animals and offer competitive prices."
  },
  {
    question: "What's our mission/future aspiration?",
    answer: "Our mission is to promote responsible pet ownership and continue expanding our services."
  }
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
        cards={cardData}
      />
      <Rig onClickLeft={onLeftPressed} onClickRight={onRightPressed} />
    </div>
  );
}
