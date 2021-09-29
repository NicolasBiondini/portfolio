import { useEffect } from "react";

import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ProjectCard from "./ProjectCard";
import TextMoving from "./TextMoving";

import imagePicture from "../../public/images/image.png";
import imagePicture2 from "../../public/images/imagen2.png";
import imagePicture3 from "../../public/images/imagen3.png";

import styles from "../../styles/Projects.module.css";

import { projects } from "../data";

export default function Projects({ onOpen }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("visible");
    }
  }, [controls, inView]);

  return (
    <div id={"projects"} className={styles.container}>
      <div className={styles.projectsContainer}>
        <TextMoving
          text={
            " PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - "
          }
          light={true}
        />
        {projects.map((project) => {
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
              reverse={project.title === "Project 2" && true}
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
          If you want to see the repository of this portfolio{" "}
          <Link href={"/"}>
            <a className={styles.clickHere}>click here</a>
          </Link>
          .
        </motion.p>
      </div>
    </div>
  );
}
