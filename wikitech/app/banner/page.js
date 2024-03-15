import React, { useState } from 'react';
import styles from './banner.module.css';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.banner} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>Wikitech.io</h1>
      <p className ={styles.para}>Welcome to Wikitech.io: Your Hub for Technical Insights and Inspiration!
       Explore</p>
    </div>
  );
};

export default Banner;
