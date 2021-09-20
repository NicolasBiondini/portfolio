import ReactDOM from "react-dom";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";

import About from "./About";

import Picture from "../../public/images/image.png";

import styles from "../../styles/ProjectPage.module.css";

import { dataProject01 } from "../../src/data";

export default function Modal({ show, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const projectContent = show ? (
    <div className={styles.containerModal}>
      <ProjectForModal onClose={handleCloseClick} />
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      projectContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

function ProjectForModal({ onClose }) {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeUp = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div
      key="backPageProject"
      layout
      className={styles.containerBackground}
    >
      <div className={styles.conatiner}>
        <a onClick={onClose} className={styles.buttonBack}>
          x
        </a>

        <motion.div
          layoutId="imageOne"
          key="imageProjectPage"
          className={styles.imageContainer}
        >
          <Image src={Picture} layout={"responsive"} />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
          className={styles.titleContainer}
        >
          <h1>01. Project one</h1>
          <div className={styles.button}>
            Live demo <span>{">"}</span>
          </div>
        </motion.div>
        <About
          light={true}
          data={dataProject01}
          itsIndex={true}
          titleOne={
            "TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - "
          }
        />
      </div>
    </motion.div>
  );
}
