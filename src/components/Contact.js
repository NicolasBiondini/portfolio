import Link from "next/link";

import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

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
      </div>
      <div className={styles.social}>
        <TextMoving
          text={
            " - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL - SOCIAL"
          }
        />
        <div className={styles.socialLinksContainer}>
          <div className={styles.email}>
            <span className={`${styles.emailIcon} ${styles.emailIconMargin} `}>
              <FaEnvelope />
            </span>
            nicolasbiondiniwork@gmail.com
          </div>
          <div className={styles.socialMediaContainer}>
            <a
              href={"https://www.instagram.com/nicolasbiondini/"}
              target="_blank"
              className={styles.socialLinks}
            >
              <span className={styles.emailIcon}>
                <FaInstagram />
              </span>
              Instagram
            </a>
            <a
              href={"https://twitter.com/BiondiniNicolas"}
              target="_blank"
              className={styles.socialLinks}
            >
              <span className={styles.emailIcon}>
                <FaTwitter />
              </span>
              Twitter
            </a>
            <a
              href={"https://www.linkedin.com/in/nicolas-biondini/"}
              target="_blank"
              className={styles.socialLinks}
            >
              <span className={styles.emailIcon}>
                <FaLinkedinIn />
              </span>
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
