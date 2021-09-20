import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import styles from "../../styles/ProjectCard.module.css";

export default function ProjectCard({
  imagePicture,
  number,
  title,
  text,
  reverse,
  path,
  onOpen,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.45 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  let realX = -200;

  if (reverse) {
    realX = 200;
  }

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
  const fadeUpTwo = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.4,
        ease: easing,
      },
    },
  };

  const fadeUpThree = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.2,
        ease: easing,
      },
    },
  };

  const imageAnimation = {
    hidden: { x: realX, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.1, duration: 1.5 } },
  };

  return (
    <motion.div ref={ref} layout className={styles.container}>
      <motion.div
        layoutId="imageOne"
        key="imageProject"
        animate={controls}
        initial="hidden"
        exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
        variants={fadeUp}
        className={`${styles.imageContainer} ${
          reverse && styles.imageContainerReverse
        }`}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <a onClick={onOpen}>
            <Image src={imagePicture} layout={"responsive"} />
          </a>
        </Tilt>
      </motion.div>

      <div
        className={`${styles.textContainer} ${
          reverse && styles.textContainerReverse
        }`}
      >
        <motion.h3
          key="titleProject"
          animate={controls}
          initial="hidden"
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
          variants={fadeUp}
          className={styles.title}
        >
          <span className={styles.span}>{number}</span> {title}
        </motion.h3>
        <motion.p
          key="pProject"
          animate={controls}
          initial="hidden"
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
          variants={fadeUpTwo}
          className={styles.text}
        >
          {text}
        </motion.p>
        <motion.a
          key="viewProject"
          onClick={onOpen}
          animate={controls}
          initial="hidden"
          exit={{ opacity: 0, transition: { duration: 1, delay: 0 } }}
          variants={fadeUpThree}
          className={styles.button}
        >
          View more
        </motion.a>
      </div>
    </motion.div>
  );
}
