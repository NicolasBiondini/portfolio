import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { motion } from "framer-motion";

import Layout from "../src/components/Layout";
import About from "../src/components/About";

import Picture from "../public/images/image.png";

import styles from "../styles/ProjectPage.module.css";

import { dataProject01 } from "../src/data";

export default function ProjectOne() {
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
    <Layout light={true} key={"projectOne"}>
      <motion.div
        key="backPageProject"
        layout
        className={styles.containerBackground}
      >
        <div className={styles.conatiner}>
          <a onClick={() => Router.back()} className={styles.buttonBack}>
            <span>{"<"}</span> Back
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
            titleOne={
              "TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - TECNOLOGIES - "
            }
          />
        </div>
      </motion.div>
    </Layout>
  );
}
