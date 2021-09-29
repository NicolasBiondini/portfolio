import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import styles from "../../styles/Acordion.module.css";

export default function Acordion({ light, data }) {
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
                openItem={item.openItem}
                light={light}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AcordionItem({ title, skills, id, openItem, light }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (id === 1 || openItem) {
      setOpened(true);
    }
  }, []);

  return (
    <div
      className={`${styles.acordionItem} ${
        opened && styles.acordionItemOpened
      }`}
      onClick={() => setOpened(!opened)}
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
