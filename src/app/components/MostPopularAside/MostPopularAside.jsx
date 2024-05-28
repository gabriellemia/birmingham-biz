import styles from "./MostPopularAside.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MostPopularAside(props) {
  return (
    <>
      <section className={styles.mostpopularcontainer}>
        <figure>
          <Image
            src={props.src}
            fill={true}
            sizes={"max-width: 100%"}
            className={styles.mostpopularimage}
            alt=""
          />
        </figure>
        <Link href={`/news/${props.id}`}>
          <h3 className={styles.articlehead}>{props.heading}</h3>
        </Link>
        <p className={styles.articlesubhead}>{props.subheading}</p>
      </section>
    </>
  );
}
