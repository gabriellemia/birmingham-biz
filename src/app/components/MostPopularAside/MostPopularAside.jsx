import styles from './MostPopularAside.module.css';
import Image from 'next/image';

export default function MostPopularAside(props) {
  return (
    <>
      <div className={styles.mostpopularcontainer}>
        <Image 
          src={props.image}
          layout="fill"
          className={styles.mostpopularimage}
          alt="Advertisement"
        />
        <h3>{props.heading}</h3>
        <p>{props.subheading}</p>
      </div>
    </>
  )
}