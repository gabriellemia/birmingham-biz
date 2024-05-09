import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerMenu}>
        <li className={styles.listItem}>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
        </li>
        <li className={styles.listItem}>Privacy Policy</li>
      </ul>

      <p className={styles.copyright}>
        <small>© All Content Birmingham Business</small>
      </p>

      <section className={styles.footerSocial}>
        <ul className={styles.socialMenu}>
          <li className={styles.socialItem}>
            <a
              href="https://www.linkedin.com/company/birmingham-business/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              href="https://www.instagram.com/birminghambiz/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              href="https://twitter.com/brumbiz"
              target="_blank"
              aria-label="XTwitter"
            >
              <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              href="https://www.facebook.com/brumbiz"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
