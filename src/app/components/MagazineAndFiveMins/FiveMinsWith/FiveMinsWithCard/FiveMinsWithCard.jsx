import styles from "./FiveMinsWithCard.module.css";
import Image from "next/image";

export default function MostPopularCard({ imgUrl, headline, description }) {
  return (
    <div className={styles.card}>
      <Image src={imgUrl} alt={headline} width={190} height={140} className={styles.imgStyle} />
      <div className={styles.cardText}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
