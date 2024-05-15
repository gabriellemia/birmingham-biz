import styles from './MostPopularAside.module.css';
import Image from 'next/image';

export default function MostPopularAside(props) {
  return (
    <>
      <div className={styles.mostpopularcontainer}>
        <Image 
          src={props.image}
          fill={true}
          sizes={"max-width: 100%"}
          className={styles.mostpopularimage}
          alt="Advertisement"
        />
        <h3 className={styles.articlehead}>{props.heading}</h3>
        <p className={styles.articlesubhead}>{props.subheading}</p>
      </div>
    </>
  )
}