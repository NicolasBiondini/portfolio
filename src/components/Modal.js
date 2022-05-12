import ReactDOM from "react-dom";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaAngleDoubleRight } from "@react-icons/all-files/fa/FaAngleDoubleRight";

import About from "./About";

import styles from "../../styles/ProjectPage.module.css";

export default function Modal({ show, onClose, data }) {
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
      <ProjectForModal
        onClose={handleCloseClick}
        image={data.image}
        title={data.title}
        link={data.link}
        layoutId={data.layoutId}
        number={data.number}
        data={data.data}
        repository={data.repository}
        component={data.component}
      />
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

function ProjectForModal({
  onClose,
  image,
  title,
  link,
  layoutId,
  number,
  data,
  repository,
  component,
}) {
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
        <div onClick={onClose} className={styles.buttonBack}>
          <FaTimes />
        </div>

        <motion.div
          layoutId={layoutId}
          key={layoutId}
          className={styles.imageContainer}
        >
          <Image src={image} layout={"responsive"} />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
          className={styles.titleContainer}
        >
          <h1 className={styles.title}>
            {number} {title}
          </h1>
          <div className={styles.buttonsContainer}>
            <a href={link} target="_blank" className={styles.button}>
              Live Demo{" "}
              <span>
                <FaAngleDoubleRight />
              </span>
            </a>
            <a href={repository} target="_blank" className={styles.button}>
              Repository{" "}
              <span>
                <FaAngleDoubleRight />
              </span>
            </a>
          </div>
        </motion.div>
        <About
          light={true}
          data={data}
          itsIndex={true}
          titleOne={
            "TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - "
          }
          component={component}
        />
      </div>
    </motion.div>
  );
}
