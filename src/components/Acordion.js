import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import styles from "../../styles/Acordion.module.css";

export default function Acordion({ light, data }) {
  const [childOpen, setChildOpen] = useState(1);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.acordionList}>
        {data.map((item) => {
          return (
            <li className={styles.acordionListItem} key={item.id}>
              <AcordionItem
                title={item.title}
                skills={item.skills}
                id={item.id}
                light={light}
                childOpen={childOpen}
                setChildOpen={setChildOpen}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AcordionItem({ title, skills, id, light, childOpen, setChildOpen }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (id === childOpen) {
      return setOpened(true);
    } else if (opened) {
      return setOpened(false);
    }
  }, [childOpen]);

  return (
    <div
      className={`${styles.acordionItem} ${
        opened && styles.acordionItemOpened
      }`}
      onClick={() => setChildOpen(id)}
    >
      <div
        className={`${styles.titleItem} ${opened && styles.titleItemOpened} ${
          opened & light && styles.titleItemOpenedDark
        }`}
      >
        <div className={`${styles.span} ${opened && styles.spanOpened}`}>
          <FaChevronDown />
        </div>
        <div>{title}</div>
      </div>
      <AnimatePresence initial={false}>
        {opened && <AcordionOpened skills={skills} />}
      </AnimatePresence>
    </div>
  );
}

function AcordionOpened({ skills }) {
  return (
    <motion.ul
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={styles.listOpened}
    >
      {skills.map((skill) => {
        return (
          <motion.li
            key={skill}
            variants={{
              collapsed: { opacity: 0 },
              open: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            className={styles.itemOpened}
          >
            {skill}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
