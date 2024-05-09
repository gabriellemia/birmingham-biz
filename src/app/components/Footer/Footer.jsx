import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerMenu}>
        <li className={styles.listItem}>Contact Us</li>
        <li className={styles.listItem}>Privacy policy</li>
      </ul>
      <small>
        <p>© All Content Birmingham Business</p>
      </small>

      <div className={styles.footerSocial}>
        <ul>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
          <li><FontAwesomeIcon icon={faInstagram}/> </li>
          <li><FontAwesomeIcon icon={faXTwitter}/> </li>
          <li><FontAwesomeIcon icon={faFacebook}/> </li>

        </ul>

      </div>

      
   
    </div>
  );
}
