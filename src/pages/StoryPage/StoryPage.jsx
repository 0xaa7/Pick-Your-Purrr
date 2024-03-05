import './styles.scss'
import CardDeck from "./CardDeck";
import { Rig } from "./Rig";
import { useState } from "react";

export default function StoryPage() {
  const [leftPressed, setLeftPressed] = useState(null);
  const [rightPressed, setRightPressed] = useState(null);
  const cardOptions = [
    "“We’re solving a problem.” ",
    "“We’re customer-centric.”",
    "“We’re agile and adaptable.” ",
    "“We value innovation.”",
    "“We believe in sustainable growth.”"
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
