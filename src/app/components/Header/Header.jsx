import styles from "./Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className={styles.headerBackground}></div>
      <header className={styles.header}>
        <Image
          className={styles.logoBB}
          src="/BBLogo.png"
          width={147}
          height={150}
          alt="Birmingham Business logo"
        />
        <nav className={styles.topNavBar}>
          <h1 className={styles.birmingham}>Birmingham</h1>
          <ul className={styles.navBarContainer}>
            <li>
              <a className={styles.navLinks} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/story">
                News
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/story">
                Features and Analysis
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/story">
                Five Mintues With
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/story">
                Insight
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/story">
                Magazine Archive
              </a>
            </li>
          </ul>
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magIcon} /> */}
        </nav>
        <nav className={styles.bottomNavBar}>
          <h1 className={styles.business}>Business</h1>
        </nav>
      </header>
    </>
  );
}
