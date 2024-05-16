import styles from "./MostPopularAside.module.css";
import Image from "next/image";

export default function MostPopularAside(props) {
  return (
    <>
      <div className={styles.mostpopularcontainer}>
        <Image
          src={props.src}
          fill={true}
          sizes={"max-width: 100%"}
          className={styles.mostpopularimage}
          alt="News story thumbnail"
        />
        <h3 className={styles.articlehead}>{props.heading}</h3>
        <p className={styles.articlesubhead}>{props.subheading}</p>
      </div>
    </>
  );
}
