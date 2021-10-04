import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { FaBars } from "@react-icons/all-files/fa/FaBars";

import styles from "../../styles/NavBar.module.css";

export default function NavBar({ light }) {
  const [dropMenu, setDropMenu] = useState(false);

  const handleClick = () => {
    setDropMenu(!dropMenu);
  };

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeDown = {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easing,
      },
    },
  };

  const fadeLeft = {
    initial: {
      x: -60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
    exit: {
      x: -60,
      opacity: 0,
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      className={`${styles.realContainer} ${light && styles.realContainerDark}`}
    >
      <motion.div className={styles.container}>
        <Link href="/">
          <motion.a variants={fadeDown} className={styles.itemLogo}>
            Nicolás Biondini
          </motion.a>
        </Link>
        <motion.div
          variants={fadeDown}
          onClick={handleClick}
          className={styles.responsiveIcon}
        >
          <FaBars />
        </motion.div>
        <motion.nav variants={stagger} className={styles.navBar}>
          <Link href="#home">
            <motion.a
              variants={fadeDown}
              className={`${styles.itemnavbar} ${
                light && styles.itemnavbarDark
              }`}
            >
              Home
            </motion.a>
          </Link>
          <Link href="#about">
            <motion.a
              variants={fadeDown}
              className={`${styles.itemnavbar} ${
                light && styles.itemnavbarDark
              }`}
            >
              About
            </motion.a>
          </Link>
          <Link href="#projects">
            <motion.a
              variants={fadeDown}
              className={`${styles.itemnavbar} ${
                light && styles.itemnavbarDark
              }`}
            >
              Projects
            </motion.a>
          </Link>
          <Link href="#contact">
            <motion.a
              variants={fadeDown}
              className={`${styles.itemnavbar} ${
                light && styles.itemnavbarDark
              }`}
            >
              Contact
            </motion.a>
          </Link>
        </motion.nav>
      </motion.div>
      {dropMenu && (
        <div>
          <motion.nav variants={stagger} className={styles.navBarResponsive}>
            <Link href="#home">
              <motion.a
                onClick={handleClick}
                variants={fadeLeft}
                className={`${styles.itemnavbar} ${
                  light && styles.itemnavbarDark
                }`}
              >
                Home
              </motion.a>
            </Link>
            <Link href="#about">
              <motion.a
                onClick={handleClick}
                variants={fadeLeft}
                className={`${styles.itemnavbar} ${
                  light && styles.itemnavbarDark
                }`}
              >
                About
              </motion.a>
            </Link>
            <Link href="#projects">
              <motion.a
                onClick={handleClick}
                variants={fadeLeft}
                className={`${styles.itemnavbar} ${
                  light && styles.itemnavbarDark
                }`}
              >
                Projects
              </motion.a>
            </Link>
            <Link href="#contact">
              <motion.a
                onClick={handleClick}
                variants={fadeLeft}
                className={`${styles.itemnavbar} ${
                  light && styles.itemnavbarDark
                }`}
              >
                Contact
              </motion.a>
            </Link>
          </motion.nav>
        </div>
      )}
    </motion.div>
  );
}
