import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Acordion from "./Acordion";
import TextMoving from "./TextMoving";

import styles from "../../styles/About.module.css";

const normalVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -200, opacity: 0 },
};

const normalVariantsRight = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: 200, opacity: 0 },
};

const normalTransition = {
  delay: 0.1,
  duration: 1.5,
};

export default function About({
  light,
  data,
  titleOne,
  text,
  animate,
  itsIndex,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      id={"about"}
      className={`${styles.container} ${light && styles.containerDark} ${
        itsIndex && styles.containerMargin
      }`}
    >
      <motion.div
        animate={controls}
        initial={animate ? "hidden" : "visible"}
        variants={animate ? normalVariants : { visible: { opacity: 1 } }}
        transition={animate ? normalTransition : null}
        className={styles.skills}
      >
        <TextMoving text={titleOne} />
        <Acordion light={light} data={data} />
      </motion.div>
      <motion.div
        animate={controls}
        initial={animate ? "hidden" : "visible"}
        variants={animate ? normalVariantsRight : { visible: { opacity: 1 } }}
        transition={animate ? normalTransition : null}
        className={styles.aboutText}
      >
        <TextMoving
          text={
            "ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -"
          }
        />
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </motion.div>
    </div>
  );
}
