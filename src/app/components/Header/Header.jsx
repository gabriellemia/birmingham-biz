import styles from './Header.module.css'
import Image from 'next/image'

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

      </nav>
      <h1 className={styles.business}>Business</h1>
    </header>
  )
}