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
    answer: "Over 7 years of purr-fectly matched cat parents and kittens (Pick Your Purrr, established 2017)."
  },
  {
    question: "Why was 'Pick your Purrr' created?",
    answer: "Imagine searching for your dream Persian kitten/pet, only to find limited choices, hefty price tags, and a less-than-thrilling experience. That's what sparked “Pick Your Purrr” in 2017! Founded by two cat-crazy friends who wanted healthy, happy kittens in every home in your City, we make finding your fur-ever friend easy and UNFORGETTABLE."
  },
  {
    question: "What milestones has 'Pick your Purrr' achieved?",
    answer: "Over 700+ families have found their purr-fect companions at Pick Your Purrr since 2017! of \"Pick Your Purrr\" customers recommend us to their friends and family!\n40% of \"Pick your Purrr\" customers return for a second helping of purr-fect happiness! Shouldn't your kitty have a playmate?"
  },
  {
    question: "Does 'Pick your Purrr' sell Persian kittens only?",
    answer: "Good question! While “Pick Your Purrr” is all about connecting cat lovers with their purrfect companions, we understand not everyone's a cat person. If a playful pup or a chirpy bird is more your style, don't hesitate to reach out!!. We're happy to help you find your ideal furry (or feathered) friend."
  },
  {
    question: "Why should you choose 'Pick your Purrr'?",
    answer: "Choosing a pet should be exciting, not stressful. At “Pick Your Purrr”, we listen to your dreams and find the perfect kitten that matches your personality perfectly!  Pick up the phone and let's make some purr-fect memories!"
  },
  {
    question: "How do we ensure quality and affordability?",
    answer: "We get it, unexpected vet bills are no fun. That's why at Pick Your Purrr, our kittens are all dewormed, flea-free, ear mite-busters, and litter box pros! Plus, they get a clean bill of health from the vet. Now that's peace of mind you can cuddle with! (And yes, they're always cage-free!)"
  },
  {
    question: "What's our mission/future aspiration?",
    answer: "Super low prices on pure Persian kittens? Sounds tempting, but it can be a recipe for disaster (unhealthy kitties!). At Pick Your Purrr, we're building a community of cat lovers who understand that happy breeders = happier & healthier furballs; and also a community of breeders who are incentivized and not bargained upon for providing healthy breeding conditions. Join us and learn how to find your purr-fect match without the shady stuff!"
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
