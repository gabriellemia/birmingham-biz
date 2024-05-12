import styles from './page.module.css'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className={styles.backgroundContainer}>
    <h1 className={styles.mainTitle}>Contact Us</h1>
    <main className={styles.mainPage}>
    <p className={styles.contactText}>Birmingham Business is an editorially-led magazine and we are keen to hear from you, though the inclusion or articles or comment columns cannot be guaranteed and is always at the Editor’s discretion.</p>
    </main>
    <Image className={styles.contactImage}
          src="/birmingham_background.svg"
          width={1440} height={556}
          alt="Birmingham Cityscape"
      />
    </div>
    
  )
}
