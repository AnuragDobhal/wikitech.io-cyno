import React from 'react';
import styles from './hero.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to our Website</h1>
        <p >Discover amazing things here</p  >
       <button className={styles.herobtn}>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
