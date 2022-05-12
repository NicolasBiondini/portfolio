import { motion } from "framer-motion";

import Acordion from "./Acordion";
import TextMoving from "./TextMoving";

import styles from "../../styles/About.module.css";

export default function About({ light, data, titleOne, itsIndex, component }) {
  const animation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
    hidden: { opacity: 0, y: 150 },
  };

  return (
    <motion.div
      id={"about"}
      initial={itsIndex && "hidden"}
      animate={itsIndex && "visible"}
      variants={itsIndex && animation}
      className={`${styles.container} ${light && styles.containerDark} ${
        itsIndex && styles.containerMargin
      }`}
    >
      <div className={styles.skills}>
        <TextMoving text={titleOne} />
        <Acordion light={light} data={data} />
      </div>
      <div className={styles.aboutText}>
        <TextMoving
          text={
            "ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT -"
          }
        />
        {component}
      </div>
    </motion.div>
  );
}
