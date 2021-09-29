import Image from "next/image";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import profile from "../../public/images/profile.webp";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0, transition: { duration: 0, delay: 0 } }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className={styles.text}
        key={"text"}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} trackOnWindow={true}>
          <span className={styles.spanText}>Hi 👋,</span>
          <h1>
            I'm Nicolás Biondini and i'm a <u>Frontend Developer</u>
          </h1>
          <p className={styles.email}>nicolasbiondiniwork@gmail.com</p>
        </Tilt>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0, transition: { duration: 0, delay: 0 } }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className={styles.imageContainer}
        key={"imageHeader"}
      >
        <Image
          src={profile}
          layout={"fill"}
          objectFit={"cover"}
          objectPosition={"center 80%"}
        />
      </motion.div>
    </div>
  );
}
