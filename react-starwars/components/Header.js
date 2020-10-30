import React from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>STARWARS</h1>
      <ul className={styles.header__nav}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/robots">Robots</Link></li>
      </ul>
    </div>
  );
};

export default Header;
