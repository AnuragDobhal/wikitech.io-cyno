import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from Font Awesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
<div className={styles.logo}>
        {/* <img src="/logo.png" alt="Logo" className={styles.logoImg} /> */}
        Wikitech.io
  </div>
      <button className={styles.toggleButton} onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes className={styles.icon} />
        ) : (
          <FaBars className={styles.icon} />
        )}{" "}
      
      </button>
      <div className={isOpen ? styles.navItemsActive : styles.navItems}>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/services" passHref legacyBehavior>
          <a className={styles.navLink}>Services</a>
        </Link>

        <Link href="/fileupload" passHref legacyBehavior>
          <a className={styles.navLink}>Upload FIle</a>
        </Link>
        {/* <Link href="/download" passHref legacyBehavior>
          <a className={styles.navLink}>Download Videos</a>
        </Link> */}
        <Link href="/todolist" passHref legacyBehavior>
          <a className={styles.navLink}>To Do List</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
