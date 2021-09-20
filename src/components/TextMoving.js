import styles from "../../styles/TextMoving.module.css";

export default function TextMoving({ text, light }) {
  return (
    <div className={`${styles.container} ${light && styles.light}`}>
      <h3 className={`${styles.text}  ${styles.realText}`}>{text} </h3>
      <h3 className={` ${styles.spanText}`}>{text}</h3>
    </div>
  );
}
