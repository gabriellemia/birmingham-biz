import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.list-menu}>
        <li className={styles.list-item}>Contact Us</li>
        <li className={styles.list-item}>Privacy policy</li>
      </ul>
      <small><p>© All Content Birmingham Business</p></small>
      
      


    </div>

  )
}