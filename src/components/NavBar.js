import Link from "next/link";

import { motion } from "framer-motion";

import styles from "../../styles/NavBar.module.css";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function NavBar({ light }) {
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
    </motion.div>
  );
}
