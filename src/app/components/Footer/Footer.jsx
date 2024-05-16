import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin,faXTwitter, faInstagram  } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footerContainer} role="contentinfo">
      <section className={styles.footerContent}>
        <nav aria-label="Footer navigation">
          <ul className={styles.footerMenu}>
            <li className={styles.listItem}>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <p className={styles.copyright}>
          <small>© All Content Birmingham Business</small>
        </p>

        <section
          className={styles.footerSocial}
          aria-label="Social media links"
        >
          <ul className={styles.socialMenu}>
            <li className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/company/birmingham-business/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.instagram.com/birminghambiz/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://twitter.com/brumbiz"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.facebook.com/brumbiz"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
