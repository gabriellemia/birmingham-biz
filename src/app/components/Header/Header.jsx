import styles from './Header.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.image}
          src="/BBLogo.png"
          width={147} height={150}
          alt="Birmingham Business logo"
      />
      <nav className={styles.navBar}>
      <h1 className={styles.birmingham}>Birmingham</h1>
      <ul className={styles.navBarContainer}>
  <li>Home</li>
  <li>News</li>
  <li>Features and Analysis</li>
  <li>Five Minutes With</li>
  <li>Insights</li>
  <li>Magazine Archive</li>
        </ul>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magIcon}/>
      </nav>
      <h1 className={styles.business}>Business</h1>
    </header>
  )
}