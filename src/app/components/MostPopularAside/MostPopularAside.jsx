import styles from "./MostPopularAside.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={`/news/${props.id}`}>
          <h3 className={styles.articlehead}>{props.heading}</h3>
        </Link>
        <p className={styles.articlesubhead}>{props.subheading}</p>
      </div>
    </>
  );
}
