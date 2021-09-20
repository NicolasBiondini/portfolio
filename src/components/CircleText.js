import { motion } from "framer-motion";

import styles from "../../styles/CircleText.module.css";

export default function CircleText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
      exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
      key={"circleText"}
      className={styles.container}
    >
      <div className={styles.circle}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enable-background="new 0 0 300 300"
        >
          <defs>
            <path
              className={styles.circlePath}
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use href="#circlePath" fill="none" />
            <text fill="#000">
              <textPath href="#circlePath">
                Keep scrolling! - Keep scrolling! - Keep scrolling! -
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
