import styles from "./FiveMinsWithCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FiveMinsWithCard({
  imgUrl,
  headline,
  description,
  id,
}) {
  return (
    <section className={styles.card}>
      <figure>
        <Image
          src={imgUrl}
          alt=""
          width={190}
          height={140}
          className={styles.imgStyle}
        />
      </figure>
      <section className={styles.cardText}>
        <div className={styles.cardTextContainer}>
          <Link href={`five-minutes/${id}`}>
            <h1 className={styles.headline}>{headline}</h1>
          </Link>
          <p className={styles.description}>{description}</p>
        </div>
        <hr className={styles.hr}></hr>
      </section>
    </section>
  );
}
