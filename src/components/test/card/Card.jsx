import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './card.scss';

const TinderCard = ({ profile, onSwipeRight }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);

    // Check if the card was dragged enough to consider it swiped
    if (Math.abs(info.point.x) > 150) {
      // Animate the card off the screen on swipe right
      x.set(info.point.x > 0 ? 300 : -300);
      onSwipeRight();
    } else {
      // Reset the card position if not swiped enough
      x.set(0);
    }
  };

  return (
    <motion.div
      className={`tinder-card ${isDragging ? 'dragging' : ''}`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      style={{ x, rotate }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="profile-image">
        <img src={profile.image} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>
    </motion.div>
  );
};

export default TinderCard;
