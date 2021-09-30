import Marquee from "react-fast-marquee";

import styles from "../../styles/TextMoving.module.css";

export default function TextMoving({ text, light, reverse }) {
  return (
    <Marquee
      style={{
        width: "100px",
        height: "64px",
      }}
      gradient={false}
      speed={30}
    >
      <h3 className={`${styles.text} ${light && styles.light} `}>{text} </h3>
    </Marquee>
  );
}
