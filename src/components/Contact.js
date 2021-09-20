import Link from "next/link";

import TextMoving from "./TextMoving";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  return (
    <div id={"contact"} className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.connectContainer}>
          <p className={styles.preConnect}>
            I'm allways searching for new challenges so
          </p>
          <h6 className={styles.connect}>Let's connect!</h6>
        </div>
        <form className={styles.form}>
          <input
            className={styles.formInputs}
            type={"email"}
            placeholder={"e-mail"}
          />
          <div className={styles.sendForm}>
            <input
              className={styles.formInputs}
              type={"text"}
              placeholder={"message"}
            />
            <span className={styles.arrowSend}>{" >"} </span>
          </div>
        </form>
      </div>
      <div className={styles.social}>
        <TextMoving
          text={
            " - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL"
          }
        />
        <div className={styles.socialLinksContainer}>
          <div>
            <Link href={"/"}>
              <a className={styles.socialLinks}>
                <span>-</span> Instagram
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.socialLinks}>
                <span>-</span> Linkedin
              </a>
            </Link>
          </div>
          <p className={styles.email}>
            <span>-</span> nicolasbiondiniwork@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
