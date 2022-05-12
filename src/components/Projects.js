import { useEffect } from "react";

import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ProjectCard from "./ProjectCard";
import TextMoving from "./TextMoving";

import styles from "../../styles/Projects.module.css";

import { projects } from "../data";

export default function Projects({ onOpen, light }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id={"projects"}
      className={`${styles.container} ${!light && styles.containerLight}`}
    >
      <div className={styles.projectsContainer}>
        <TextMoving
          text={
            " PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - "
          }
          light={light}
          reverse={true}
        />
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.title}
              onOpen={onOpen}
              imagePicture={project.image}
              text={project.text}
              title={project.title}
              number={project.number}
              path={project.link}
              layoutId={project.layoutId}
              data={project}
              reverse={index === 1 && true}
            />
          );
        })}

        {/**
  
  <ProjectCard
  imagePicture={imagePicture}
  text={
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
  }
  title={"Project 2"}
  number={"02."}
  reverse={true}
/>
<ProjectCard
  imagePicture={imagePicture}
  text={
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
  }
  title={"Project 3"}
  number={"03."}
/>
*/}
        <motion.p
          animate={controls}
          initial="hidden"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 200, opacity: 0 },
          }}
          transition={{ delay: 0.1, duration: 1.5 }}
          ref={ref}
          className={styles.textPortfolio}
        >
          DISCLAIMER: none of these projects are a copy of any tutorial/course.
          All of them were created by me and without a tutorial guide or
          anything like that. And If you want to see the repository of this
          portfolio{" "}
          <a
            className={styles.clickHere}
            href="https://github.com/NicolasBiondini/portfolio"
            target={"_blank"}
          >
            click here
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}
