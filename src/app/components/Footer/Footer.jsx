import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerMenu}>
        <li className={styles.listItem}>Contact Us</li>
        <li className={styles.listItem}>Privacy policy</li>
      </ul>
      <small>
        <p className={styles.copyright}>© All Content Birmingham Business</p>
      </small>

      <section className={styles.footerSocial}>
        <ul className={styles.socialMenu}>
          <li className={styles.socialItem}>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className={styles.socialItem}>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className={styles.socialItem}>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li className={styles.socialItem}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </section>
    </footer>
  );
}
