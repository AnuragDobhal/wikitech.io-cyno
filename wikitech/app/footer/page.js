// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Wikitech.io</h2>
        </div>
        <div className={styles.socialLinks}>
          <a className={styles.socialLinkTwitter} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a className={styles.socialLinkInsta} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className={styles.socialLinkLinked} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <nav className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Services</a>
      </nav>
    </footer>
  );
};

export default Footer;
